"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const connection = require('./database/index');
let PORT = process.env.PORT || 4500;
app_1.app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
//# sourceMappingURL=server.js.map