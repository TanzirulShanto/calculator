const path = require('path');


exports.getAreaPage = (req, res)=>{
    res.sendFile(path.join(__dirname , "/../views/area/index.html"));
};

exports.getAreaCirclePage = (req, res)=>{
    res.sendFile(path.join(__dirname,"/../views/area/circle.html"));
};
exports.postCircleAreaPage = (req, res)=>{
    const radius = req.body.radius;
    let area = 3.14159265 * radius * radius;
    if (isNaN(area)){
        res.send("Invalid Input");
    }
    else{
        res.send(`Area of the Circle is ${area} square unit`);
    }
    
};

exports.getRectAreaPage = (req, res)=>{
    res.sendFile(path.join(__dirname, "/../views/area/rectangle.html"));
};

exports.postRectAreaPage =(req, res)=>{
    const base = req.body.base;
    const height = req.body.height;
    let area = base * height;

    if (isNaN(area)){
        res.send("Invalid Input");
    }
    else{
        res.send(`Area of the Rectangle is ${area} square unit`);
    }
    
};

exports.getTriangleAreaPage = (req, res)=>{
    res.sendFile(path.join(__dirname, "/../views/area/triangle.html"));
};

exports.postTriangleAreaPage = (req, res)=>{
    const base = req.body.base;
    const height = req.body.height;
    let area = .5 *  base * height;
    if (isNaN(area)){
        res.send("Invalid Input");
    }
    else{
        res.send(`Area of the Triangle is ${area} square unit`);
    }
};

exports.getSquareAreaPage = (req, res)=>{
    res.sendFile(path.join(__dirname, "/../views/area/square.html"));
};
exports.postSquareAreaPage = (req, res)=>{
    const arm = req.body.arm;
    let area = arm * arm;
    
    if (isNaN(area)){
        res.send("Invalid Input");
    }
    else{
        res.send(`Area of the Square is ${area} square unit`);
    }
    
};