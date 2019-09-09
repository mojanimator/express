/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev-server/api/auth/auth-routes.js":
/*!********************************************!*\
  !*** ./dev-server/api/auth/auth-routes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(/*! express */ "express");

var router = express.Router();

var controller = __webpack_require__(/*! ../../controllers/authController */ "./dev-server/controllers/authController.js");

router.post('/auth', controller.index);
router.post('/register', controller.register);
module.exports = router;

/***/ }),

/***/ "./dev-server/api/task/tasks-routes.js":
/*!*********************************************!*\
  !*** ./dev-server/api/task/tasks-routes.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import express from 'express';
var controller = __webpack_require__(/*! ../../controllers/taskController */ "./dev-server/controllers/taskController.js");

var express = __webpack_require__(/*! express */ "express");

var router = express.Router();
router.post('/task', controller.create);
router.get('/task', controller.index);
router.get('/task/:id', controller.show);
router.put('/task', controller.update);
router.delete('/task', controller.delete);
module.exports = router;

/***/ }),

/***/ "./dev-server/api/user/user-routes.js":
/*!********************************************!*\
  !*** ./dev-server/api/user/user-routes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(/*! express */ "express");

var controller = __webpack_require__(/*! ../../controllers/userController */ "./dev-server/controllers/userController.js");

var router = express.Router();
router.get('/user', controller.index);
module.exports = router;

/***/ }),

/***/ "./dev-server/config/db.js":
/*!*********************************!*\
  !*** ./dev-server/config/db.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__(/*! mongoose */ "mongoose");

module.exports = {
  connectToDB: function connectToDB() {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true
    }, function (error) {
      if (error) {
        console.log('unable to connect to database');
        throw error;
      } else {
        console.log('Connected to MongoDB!');
      }
    });
  }
};

/***/ }),

/***/ "./dev-server/config/env.js":
/*!**********************************!*\
  !*** ./dev-server/config/env.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var express = __webpack_require__(/*! express */ "express");

var morgan = __webpack_require__(/*! morgan */ "morgan");

var cors = __webpack_require__(/*! cors */ "cors");

var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

module.exports = function setEnvironment(app) {
  if (true) {
    setDevEnv(app);
  } else {}
};

function setDevEnv(app) {
  // process.env.NODE_ENV = 'development';
  process.env.DB_URL = "mongodb://localhost:27017/vue-db";
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());
  console.log('setting dev env');
}

function setProdEnv(app) {
  process.env.DB_URL = "mongodb://localhost:27017/prod-db";
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../dist'));
  console.log('setting prod env');
}
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./dev-server/controllers/authController.js":
/*!**************************************************!*\
  !*** ./dev-server/controllers/authController.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var validator = __webpack_require__(/*! node-input-validator */ "node-input-validator");

module.exports = {
  register: function register(req, res) {
    return res.status(201).json({
      "message": 'auth controller register'
    }); //201 is success without return data
  },
  index: function index(req, res) {
    return res.status(204).json({
      "message": req.body && req.body.username ? "".concat(req.body.username) : 'empty username'
    });
  }
};

/***/ }),

/***/ "./dev-server/controllers/taskController.js":
/*!**************************************************!*\
  !*** ./dev-server/controllers/taskController.js ***!
  \**************************************************/
/*! exports provided: index, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "core-js/modules/es6.array.find");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user */ "./dev-server/model/user.js");
/* harmony import */ var _model_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/task */ "./dev-server/model/task.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);


var validator = __webpack_require__(/*! node-input-validator */ "node-input-validator");




function index(req, res) {
  _model_task__WEBPACK_IMPORTED_MODULE_2__["default"].find({}, function (error, tasks) {
    if (error) {
      return res.status(500).json();
    }

    return res.status(200).json({
      tasks: tasks
    });
  });
}
function create(req, res) {
  var id = 10;
  _model_user__WEBPACK_IMPORTED_MODULE_1__["default"].findOne({
    _id: id
  }, function (error, user) {
    if (error && !user) {
      return res.status(500).json();
    }

    var task = new _model_task__WEBPACK_IMPORTED_MODULE_2__["default"](req.body.task);
    task.author = user._id;
    task.dueDate = moment__WEBPACK_IMPORTED_MODULE_3___default()(task.dueDate);
    task.save(function (error) {
      if (error) {
        return res.status(500).json();
      }

      return res.status(201).json();
    });
  });
}

/***/ }),

/***/ "./dev-server/controllers/userController.js":
/*!**************************************************!*\
  !*** ./dev-server/controllers/userController.js ***!
  \**************************************************/
/*! exports provided: index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/user */ "./dev-server/model/user.js");
/* harmony import */ var _model_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/task */ "./dev-server/model/task.js");


function index(req, res) {
  return res.status(200).json({
    "message": 'user controller'
  });
}

/***/ }),

/***/ "./dev-server/index.js":
/*!*****************************!*\
  !*** ./dev-server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var HOST_NAME = 'localhost';
var PORT = 3000;

var registerRoutes = __webpack_require__(/*! ./routes */ "./dev-server/routes.js");

var setEnvironment = __webpack_require__(/*! ./config/env */ "./dev-server/config/env.js");

var _require = __webpack_require__(/*! ./config/db */ "./dev-server/config/db.js"),
    connectToDB = _require.connectToDB; // import {registerRoutes} from "./routes";


setEnvironment(app);
connectToDB();
registerRoutes(app);
app.get('/', function (req, res) {
  if (true) {
    return res.send('run server in dev mode');
  } else {}
});
app.listen(PORT, function () {
  return console.log("server run in ".concat("development", " at http://").concat(HOST_NAME, ":").concat(PORT, "/"));
}); // nodejs codes
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('hello');
// });
//
// server.listen(PORT, HOST_NAME, () => {
//     console.log(`server run at http://${HOST_NAME}:${PORT}/`)
// });

/***/ }),

/***/ "./dev-server/model/task.js":
/*!**********************************!*\
  !*** ./dev-server/model/task.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var taskSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  title: String,
  body: String,
  dueDate: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: 'user'
  }
});
taskSchema.set('timestamps', true);
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('task', taskSchema));

/***/ }),

/***/ "./dev-server/model/user.js":
/*!**********************************!*\
  !*** ./dev-server/model/user.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  username: String,
  first: String,
  last: String,
  password: String
});
userSchema.set('timestamps', true);
userSchema.virtual('fullName').get(function () {
  return "".concat(this.first, " ").concat(this.last);
}); //before save to database

userSchema.pre('save', function (next) {
  this.username = this.username.toLowerCase();
  this.first = this.first.toLowerCase();
  this.last = this.last.toLowerCase();
  next();
});
/* harmony default export */ __webpack_exports__["default"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('user', userSchema));

/***/ }),

/***/ "./dev-server/routes.js":
/*!******************************!*\
  !*** ./dev-server/routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// import taskRoutes from './api/task/tasks-routes'
// import authRoutes from './api/auth/auth-routes'
// import userRoutes from './api/user/user-routes'
var taskRoutes = __webpack_require__(/*! ./api/task/tasks-routes */ "./dev-server/api/task/tasks-routes.js");

var authRoutes = __webpack_require__(/*! ./api/auth/auth-routes */ "./dev-server/api/auth/auth-routes.js");

var userRoutes = __webpack_require__(/*! ./api/user/user-routes */ "./dev-server/api/user/user-routes.js");

module.exports = function registerRoutes(app) {
  app.use('/api', taskRoutes);
  app.use('/api', authRoutes);
  app.use('/api', userRoutes);
};

/***/ }),

/***/ 1:
/*!***********************************!*\
  !*** multi ./dev-server/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\_MEVN\first-app\dev-server\index.js */"./dev-server/index.js");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "core-js/modules/es6.array.find":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.find" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "node-input-validator":
/*!***************************************!*\
  !*** external "node-input-validator" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-input-validator");

/***/ })

/******/ });