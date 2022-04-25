"use strict";
exports.__esModule = true;
exports.wrapper = exports.makeStore = void 0;
var redux_1 = require("redux");
var reducers_1 = require("./reducers");
var next_redux_wrapper_1 = require("next-redux-wrapper");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var saga_1 = require("./saga");
var redux_saga_1 = require("redux-saga");
exports.makeStore = function (context) {
    // 1: Create the middleware
    var sagaMiddleware = redux_saga_1["default"]();
    // 2: Add an extra parameter for applying middleware:
    var store = redux_1.createStore(reducers_1["default"], redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(sagaMiddleware)));
    // 3: Run your sagas on server
    store.sagaTask = sagaMiddleware.run(saga_1["default"]);
    // 4: now return the store:
    return store;
};
// export an assembled wrapper
exports.wrapper = next_redux_wrapper_1.createWrapper(exports.makeStore, { debug: true });
