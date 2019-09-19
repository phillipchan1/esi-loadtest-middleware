require('source-map-support/register');
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.hooks.ts":
/*!**************************!*\
  !*** ./src/app.hooks.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Application hooks that run for every service
// Don't remove this comment. It's needed to format import lines nicely.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const serve_favicon_1 = __importDefault(__webpack_require__(/*! serve-favicon */ "serve-favicon"));
const compression_1 = __importDefault(__webpack_require__(/*! compression */ "compression"));
const helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "helmet"));
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
const feathers_1 = __importDefault(__webpack_require__(/*! @feathersjs/feathers */ "@feathersjs/feathers"));
const configuration_1 = __importDefault(__webpack_require__(/*! @feathersjs/configuration */ "@feathersjs/configuration"));
const express_1 = __importDefault(__webpack_require__(/*! @feathersjs/express */ "@feathersjs/express"));
const socketio_1 = __importDefault(__webpack_require__(/*! @feathersjs/socketio */ "@feathersjs/socketio"));
const logger_1 = __importDefault(__webpack_require__(/*! ./logger */ "./src/logger.ts"));
const middleware_1 = __importDefault(__webpack_require__(/*! ./middleware */ "./src/middleware/index.ts"));
const services_1 = __importDefault(__webpack_require__(/*! ./services */ "./src/services/index.ts"));
const app_hooks_1 = __importDefault(__webpack_require__(/*! ./app.hooks */ "./src/app.hooks.ts"));
const channels_1 = __importDefault(__webpack_require__(/*! ./channels */ "./src/channels.ts"));
// Don't remove this comment. It's needed to format import lines nicely.
const app = express_1.default(feathers_1.default());
// Load app configuration
app.configure(configuration_1.default());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(compression_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(serve_favicon_1.default(path_1.default.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express_1.default.static(app.get('public')));
// Set up Plugins and providers
app.configure(express_1.default.rest());
app.configure(socketio_1.default());
// Configure other middleware (see `middleware/index.js`)
app.configure(middleware_1.default);
// Set up our services (see `services/index.js`)
app.configure(services_1.default);
// Set up event channels (see channels.js)
app.configure(channels_1.default);
// Configure a middleware for 404s and the error handler
app.use(express_1.default.notFound());
app.use(express_1.default.errorHandler({ logger: logger_1.default }));
app.hooks(app_hooks_1.default);
exports.default = app;


/***/ }),

/***/ "./src/channels.ts":
/*!*************************!*\
  !*** ./src/channels.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    if (typeof app.channel !== 'function') {
        // If no real-time functionality has been configured just return
        return;
    }
    app.on('connection', (connection) => {
        // On a new real-time connection, add it to the anonymous channel
        app.channel('anonymous').join(connection);
    });
    app.on('login', (authResult, { connection }) => {
        // connection can be undefined if there is no
        // real-time connection, e.g. when logging in via REST
        if (connection) {
            // Obtain the logged in user from the connection
            // const user = connection.user;
            // The connection is no longer anonymous, remove it
            app.channel('anonymous').leave(connection);
            // Add it to the authenticated user channel
            app.channel('authenticated').join(connection);
            // Channels can be named anything and joined on any condition 
            // E.g. to send real-time events only to admins use
            // if(user.isAdmin) { app.channel('admins').join(connection); }
            // If the user has joined e.g. chat rooms
            // if(Array.isArray(user.rooms)) user.rooms.forEach(room => app.channel(`rooms/${room.id}`).join(channel));
            // Easily organize users by email and userid for things like messaging
            // app.channel(`emails/${user.email}`).join(channel);
            // app.channel(`userIds/$(user.id}`).join(channel);
        }
    });
    // eslint-disable-next-line no-unused-vars
    app.publish((data, hook) => {
        // Here you can add event publishers to channels set up in `channels.js`
        // To publish only for a specific event use `app.publish(eventname, () => {})`
        console.log('Publishing all events to all authenticated users. See `channels.js` and https://docs.feathersjs.com/api/channels.html for more information.'); // eslint-disable-line
        // e.g. to publish all service events to all authenticated users use
        return app.channel('authenticated');
    });
    // Here you can also add service specific event publishers
    // e.g. the publish the `users` service `created` event to the `admins` channel
    // app.service('users').publish('created', () => app.channel('admins'));
    // With the userid and email organization from above you can easily select involved users
    // app.service('messages').publish(() => {
    //   return [
    //     app.channel(`userIds/${data.createdBy}`),
    //     app.channel(`emails/${data.recipientEmail}`)
    //   ];
    // });
}
exports.default = default_1;
;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(__webpack_require__(/*! ./logger */ "./src/logger.ts"));
const app_1 = __importDefault(__webpack_require__(/*! ./app */ "./src/app.ts"));
const port = app_1.default.get('port');
const server = app_1.default.listen(port);
process.on('unhandledRejection', (reason, p) => logger_1.default.error('Unhandled Rejection at: Promise ', p, reason));
server.on('listening', () => logger_1.default.info('Feathers application started on http://%s:%d', app_1.default.get('host'), port));


/***/ }),

/***/ "./src/logger.ts":
/*!***********************!*\
  !*** ./src/logger.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __webpack_require__(/*! winston */ "winston");
// Configure the Winston logger. For the complete documentation see https://github.com/winstonjs/winston
const logger = winston_1.createLogger({
    // To see more detailed errors, change this to 'debug'
    level: 'info',
    format: winston_1.format.combine(winston_1.format.splat(), winston_1.format.simple()),
    transports: [
        new winston_1.transports.Console()
    ],
});
exports.default = logger;


/***/ }),

/***/ "./src/middleware/index.ts":
/*!*********************************!*\
  !*** ./src/middleware/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Don't remove this comment. It's needed to format import lines nicely.
function default_1(app) {
}
exports.default = default_1;


/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Don't remove this comment. It's needed to format import lines nicely.
function default_1(app) {
}
exports.default = default_1;


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ }),

/***/ "@feathersjs/configuration":
/*!********************************************!*\
  !*** external "@feathersjs/configuration" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@feathersjs/configuration");

/***/ }),

/***/ "@feathersjs/express":
/*!**************************************!*\
  !*** external "@feathersjs/express" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@feathersjs/express");

/***/ }),

/***/ "@feathersjs/feathers":
/*!***************************************!*\
  !*** external "@feathersjs/feathers" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@feathersjs/feathers");

/***/ }),

/***/ "@feathersjs/socketio":
/*!***************************************!*\
  !*** external "@feathersjs/socketio" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@feathersjs/socketio");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ })

/******/ });
//# sourceMappingURL=main.map