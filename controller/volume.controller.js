const path = require('path');




exports.getVolumePage = (req, res)=>{
    res.sendFile(path.join(__dirname , "/../views/volume/index.html"));
};

// sphere
exports.getSphereVolumePage = (req, res)=>{
    res.sendFile(path.join(__dirname , "/../views/volume/sphere.html"));
};

exports.postSphereVolume = (req, res)=>{
    const radius = req.body.radius;

    let volume = (4/3) * 3.14159265 * radius * radius * radius;
    if(isNaN(volume)){
        res.send("Invalid Input.");
    }
    else{
        res.send(`Volume of the Sphere is ${volume} cubic unit`);
    }
};


// cube
exports.getCubeVolumePage = (req, res)=>{
    res.sendFile(path.join(__dirname , "/../views/volume/cube.html"));
};
exports.postCubeVolume = (req, res)=>{
    const side = req.body.side;

    let volume = side * side * side;
    if(isNaN(volume)){
        res.send("Invalid Input.");
    }
    else{
        res.send(`Volume of the Cube is ${volume} cubic unit`);
    }
};

// cuboid
exports.getCuboidVolumePage = (req, res)=>{
    res.sendFile(path.join(__dirname , "/../views/volume/cuboid.html"));
};

exports.postCuboidVolume = (req, res)=>{
    const length = req.body.length;
    const width = req.body.width;
    const height = req.body.height;

    let volume = length * width * height;
    if(isNaN(volume)){
        res.send("Invalid Input.");
    }
    else{
        res.send(`Volume of the Cuboid is ${volume} cubic unit`);
    }
};

// hemisphere
exports.getHemispherVolumePage = (req, res)=>{
    res.sendFile(path.join(__dirname , "/../views/volume/hemisphere.html"));
};

exports.postHemisphereVolume = (req, res)=>{
    const radius = req.body.radius;

    let volume = .5 * (4/3) * 3.14159265 * radius * radius * radius;
    if(isNaN(volume)){
        res.send("Invalid Input.");
    }
    else{
        res.send(`Volume of the Hemisphere is ${volume} cubic unit`);
    }
};

// cone
exports.getConeVolumePage = (req, res)=>{
    res.sendFile(path.join(__dirname , "/../views/volume/cone.html"));
};

exports.postConeVolume = (req, res)=>{
    const radius = req.body.radius;
    const height = req.body.height;

    let volume = (1/3) * 3.14159265 * radius * radius * height;
    if(isNaN(volume)){
        res.send("Invalid Input.");
    }
    else{
        res.send(`Volume of the Cone is ${volume} cubic unit`);
    }
};

// Prism
exports.getPrismVolumePage = (req, res)=>{
    res.sendFile(path.join(__dirname , "/../views/volume/cuboid.html"));
};

exports.postPrismVolume = (req, res)=>{
    // const base = req.body.base;
    // const width = req.body.width;
    // const height = req.body.height;

    // let baseArea = base * width;
    // let volume = 
    // if(isNaN(volume)){
    //     res.send("Invalid Input.");
    // }
    // else{
    //     res.send(`Volume of the Cone is ${volume} cubic unit`);
    // }
};

// cylinder
exports.getCylinderVolumePage = (req, res)=>{
    res.sendFile(path.join(__dirname , "/../views/volume/cylinder.html"));
};

exports.postCylinderVolune = (req, res)=>{
    const radius = req.body.radius;
    const height = req.body.height;

    let volume = 3.14159265 * radius * radius * height;
    if(isNaN(volume)){
        res.send("Invalid Input.");
    }
    else{
        res.send(`Volume of the Cylinder is ${volume} cubic unit`);
    }
};