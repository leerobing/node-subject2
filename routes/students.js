var express = require("express");
var studentRouter = express.Router();

// API 1: 모든 학우 정보 조회, Postman: GET http://localhost:3001/api/students
studentRouter.get("/students", (req, res) => {
  res.json({ message: "모든 학우 조회" });
});

// API 2: 특정 학번의 학우 정보 조회, Postman: GET http://localhost:3001/api/students/{studentId}
studentRouter.get("/students/:studentId", (req, res) => {
  const studentId = req.params.studentId;
  res.json({ message: `해당 아이디 학우 조회 ${studentId}` });
});

// API 3: 새로운 학우 추가 , Postman: POST http://localhost:3001/api/students
studentRouter.post("/students", (req, res) => {
  const newStudent = req.body;
  res.json({ message: "새로운 학우 추가" });
});

// API 4: 학회비 납부 여부 업데이트, Postman: PUT http://localhost:3001/api/students/{studentId}/payments
studentRouter.put("/students/:studentId/payments", (req, res) => {
  const studentId = req.params.studentId;
  res.json({ message: `학회비 납부 여부 업데이트 ${studentId}` });
});

// API 5: 특정 학우 삭제, Postman: DELETE http://localhost:3001/api/students/{studentId}
studentRouter.delete("/students/:studentId", (req, res) => {
  const studentId = req.params.studentId;
  res.json({ message: `특정학우 삭제 ${studentId}` });
});

module.exports = studentRouter;
