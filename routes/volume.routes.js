const express = require('express');
const { getVolumePage, getCubeVolumePage, getSphereVolumePage, getCuboidVolumePage, getConeVolumePage,
    getHemispherVolumePage, getPrismVolumePage, getCylinderVolumePage,
    postSphereVolume, postCuboidVolume, postCubeVolume, postCylinderVolune, postConeVolume,
    postHemisphereVolume, postPrismVolume} = require('../controller/volume.controller');

const router = express.Router();


router.get("/volume", getVolumePage);
router.get("/volume/sphere", getSphereVolumePage);
router.get("/volume/cuboid", getCuboidVolumePage);
router.get("/volume/cube", getCubeVolumePage);
router.get("/volume/cylinder", getCylinderVolumePage);
router.get("/volume/cone", getConeVolumePage);
router.get("/volume/hemisphere", getHemispherVolumePage);
router.get("/volume/prism", getPrismVolumePage);

// post requests

router.post("/volume/sphere", postSphereVolume);
router.post("/volume/cube", postCubeVolume);
router.post("/volume/cuboid", postCuboidVolume);
router.post("/volume/cylinder", postCylinderVolune);
router.post("/volume/cone", postConeVolume);
router.post("/volume/hemisphere", postHemisphereVolume);
router.post("/volume/prism", postPrismVolume);










module.exports = router;