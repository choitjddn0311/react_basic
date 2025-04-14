import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const port = 5000;

app.use(cors());

app.get('/data', (req,res) => {
    fs.readFile('./source.json', 'utf8', (error, jsonData) => {
        const data = JSON.parse(jsonData);
        res.json(data)
    })
})

app.listen(port, () => {
    console.log(`${port}에서 듣는중`);
})