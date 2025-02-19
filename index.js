import express from "express";
import path from 'path';

const __dirname = path.resolve();

const filePath = path.resolve(__dirname,'index.html')
console.log(filePath);//testing purpose


const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(file)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})