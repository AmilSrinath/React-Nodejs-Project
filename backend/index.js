import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database:"test"
})

app.get("/", (req, res) => {
    res.json("Hello World!");
})

app.use(express.json());
app.use(cors())

app.get("/books", (req, res) => {
    const query = `SELECT * FROM books;`;
    db.query(query, (err, data) => {
        if(err) return res.json(err);
        res.json(data);
    })
})

app.post("/books", (req, res) => {
    const query = "INSERT INTO books(`title`, `desc`, `cover`) VALUES (?)";
    const values =[
        req.body.title,
        req.body.desc,
        req.body.cover
    ]

    db.query(query, [values], (err, data) => {
        if (err) return res.json(err);
        res.json("Book added successfully.");
    });
})

app.listen(8800, ()=>{
    console.log("Server started on 8800");
})