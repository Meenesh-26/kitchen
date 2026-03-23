const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

/* Health check */
app.get("/health",(req,res)=>{
  res.json({status:"ok"});
});

/* Create order */
app.post("/orders",(req,res)=>{
  const order = {
    id: orders.length + 1,
    dish: req.body.dish,
    status: "pending"
  };

  orders.push(order);
  res.status(201).json(order);
});

/* List orders */
app.get("/orders",(req,res)=>{
  res.json(orders);
});

app.listen(3000,()=>{
  console.log("Kitchen API running on port 3000");
});