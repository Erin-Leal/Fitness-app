const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./htmlController");


// API Routes
router.use("/api", apiRoutes);

// HTML Routes
router.use("/", htmlRoutes);

module.exports = router;
