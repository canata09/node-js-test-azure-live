const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json())

app.get("/api/test",(req,res)=>{
    res.json({message: "Api isteği başarılı şekilde çalıştı!"});
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("sunucu çalışıyor.."));