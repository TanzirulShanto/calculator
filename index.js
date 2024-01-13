const express = require('express');
const app = express();

const areaRouter = require('./routes/area.routes');
const volumeRouter = require('./routes/volume.routes');
const PORT = 3003;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(areaRouter);
app.use(volumeRouter);

app.get("/", (req, res)=>{
    
    res.sendFile(__dirname + "/views/index.html");
});

// wrong url
app.use((req, res)=>{
    res.sendFile(__dirname + "/views/err.html");
});


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});