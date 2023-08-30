const express = require('express');
const router = express.Router();

router.get('/', async (_, res) => {
    await new Promise((r) => setTimeout(r, 1000));
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ appId: '123' }));
});

module.exports = router;