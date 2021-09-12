const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();

app.use('/',express.static(path.join(__dirname,'../dist')));

app.get('*', (req, res) => {
    const pathToHtmlFile = path.resolve(__dirname, '../dist/dashboard.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.listen(9000,()=>{
    console.log('listen on port http://localhost:9000');
})