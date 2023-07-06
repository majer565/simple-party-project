"use strict";
(() => {
var exports = {};
exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 661:
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6121:
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
    const db = new (sqlite3__WEBPACK_IMPORTED_MODULE_0___default().Database)(dbPath, (err)=>{
        if (err) {
            console.error(err.message);
            res.status(500).json({
                error: "Failed to connect to the database"
            });
            return db.close();
        } else {
            const query = "SELECT * FROM accom";
            db.all(query, (err, rows)=>{
                if (err) {
                    console.error(err.message);
                    res.status(500).json({
                        error: "Failed to retrieve records from the database"
                    });
                } else {
                    res.status(200).json(rows);
                }
                db.close();
            });
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
var __webpack_exports__ = (__webpack_exec__(6121));
module.exports = __webpack_exports__;

})();