'use strict';
var promiseCount = 0;

function testPromise() {
    var thisPromiseCount = ++promiseCount;

    logger.info(thisPromiseCount, "Started", "Sync");

    demoApi.loginAsync(thisPromiseCount)
        .then(demoApi.getParametersAsync)
        .then(demoApi.launchGameAsync)
        .then(onResolved)
        .catch(onRejected);

    function onResolved(val) {  //resolved, fulfilled
        logger.info(val, "Game launched successfully");
    }

    function onRejected(reason) {
        logger.info(reason, ", failed");
    }

    logger.info(thisPromiseCount, "Api called", "Sync, Terminated, idle, ------");
}