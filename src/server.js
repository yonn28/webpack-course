const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/dog', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/dog.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
    res.status(200).send(contentFromHtmlFile);
})
app.get('/hello-world', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/hello-world.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf8');
    res.status(200).send(contentFromHtmlFile);
})

app.use('/static', express.static(path.resolve(__dirname,'../dist')));

app.listen(3000, ()=>{
    console.log("listen on port 3000")
})