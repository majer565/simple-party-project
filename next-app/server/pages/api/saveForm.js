"use strict";
(() => {
var exports = {};
exports.id = 372;
exports.ids = [372];
exports.modules = {

/***/ 661:
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(661);
/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


function handler(req, res) {
    const dbPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "database/main.sqlite");
    const db = new (sqlite3__WEBPACK_IMPORTED_MODULE_0___default().Database)(dbPath, sqlite3__WEBPACK_IMPORTED_MODULE_0__.OPEN_READWRITE, (err)=>{
        if (err) {
            console.error(err.message);
            res.status(500).json({
                error: "Failed to connect to the database"
            });
        } else {
            const { name, presence, sausages, approach, accomodation } = req.body;
            const query = `INSERT INTO form (name, presence, sausages, approach, accomodation) VALUES (?, ?, ?, ?, ?)`;
            db.run(query, [
                name,
                presence,
                sausages,
                approach,
                accomodation
            ], function(err) {
                if (err) {
                    console.error(err.message);
                    res.status(500).json({
                        error: "Failed to save presence data"
                    });
                } else {
                    res.status(200).json({
                        message: "Presence data saved successfully"
                    });
                }
            });
            db.close();
        }
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(512));
module.exports = __webpack_exports__;

})();