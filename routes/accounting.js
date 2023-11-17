var express = require("express");
const accountingRouter = express.Router();

// API 6: 모든 회계 정보 조회, Postman: GET http://localhost:3001/api/accounting
accountingRouter.get("/accounting", (req, res) => {
  res.json({ message: "모든 회계 정보 조회" });
});

// API 7: 특정 학회비 납부 내역 조회, Postman: GET http://localhost:3001/api/accounting/payments
accountingRouter.get("/accounting/payments", (req, res) => {
  res.json({ message: "특정 학회비 납부 내역 조회" });
});

// API 8: 학회비 납부 내역 추가, Postman: POST http://localhost:3001/api/accounting/payments
accountingRouter.post("/accounting/payments", (req, res) => {
  const newPayment = req.body;

  res.json({ message: "학회비 납부 내역 추가" });
});

// API 9: 회계 정보 업데이트, Postman: PUT http://localhost:3001/api/accounting/{entryId}
accountingRouter.put("/accounting/:entryId", (req, res) => {
  const entryId = req.params.entryId;
  res.json({ message: `회계 정보 업데이트 : ${entryId}` });
});

// API 10: 특정 회계 정보 삭제, Postman: DELETE http://localhost:3001/api/accounting/{entryId}
accountingRouter.delete("/accounting/:entryId", (req, res) => {
  const entryId = req.params.entryId;
  res.json({ message: `특정 회계 정보 삭제 : ${entryId}` });
});

module.exports = accountingRouter;
