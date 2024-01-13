const express = require('express');
const { getAreaPage, getAreaCirclePage, postCircleAreaPage, getRectAreaPage, postRectAreaPage, getSquareAreaPage, postSquareAreaPage, getTriangleAreaPage, postTriangleAreaPage } = require('../controller/area.controller');
const router = express.Router();


router.get("/area", getAreaPage);

// circle section 
router.get("/area/circle", getAreaCirclePage);
router.post("/area/circle", postCircleAreaPage);

// triangle section
router.get("/area/triangle", getTriangleAreaPage);
router.post("/area/triangle", postTriangleAreaPage);

// rectangle section
router.get("/area/rectangle", getRectAreaPage);
router.post("/area/rectangle", postRectAreaPage);

// square section
router.get("/area/square", getSquareAreaPage);
router.post("/area/square", postSquareAreaPage);




module.exports = router;