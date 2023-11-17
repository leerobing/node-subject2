const express = require("express");
const dotenv = require("dotenv");

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const path = require("path");

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 5001);
app.use(
  morgan("dev"),
  express.json(),
  express.urlencoded({ extended: false }),
  cookieParser(process.env.SECRET),
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

// 라우터 파일 불러오기
const studentRouter = require("./routes/students");
const accountingRouter = require("./routes/accounting");

// 라우터 등록
app.use("/api", studentRouter);
app.use("/api", accountingRouter);

app.listen(app.get("port"), () =>
  console.log(`${app.get("port")} 번 포트에서 대기 중`)
);
