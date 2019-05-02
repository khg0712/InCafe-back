"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(3000, () => {
    console.log('run');
});
//# sourceMappingURL=index.js.map