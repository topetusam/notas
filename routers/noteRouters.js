const router = require('express').Router();


router.get("/", async (req, res) => {
    return res.send("Hello from noteRouters!");
});


module.exports = router;