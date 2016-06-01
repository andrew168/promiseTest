
function loginAsync(id) {
    var delay = Math.floor(Math.random() * 2000 + 1000);

    logger.info(id, ".. get into login");
    return new Promise(loginHttp);

    function loginHttp(resolve, reject) {
        logger.info(id, ".. .. get into login promise");
        window.setTimeout(doIt, delay);
        function doIt() {
            console.log("delay = " + delay );
            logger.info(id, '.. .. .. login cost time ' + delay);
            if (delay > 2000) {
                console.error("login error");
                reject(id + "found error in login");
            } else {
                console.log("Succeed");
                resolve(id);
            }
        }
    }
}

function getParametersAsync(id) {
    var delay = Math.floor(Math.random() * 2000 + 1000);

    logger.info(id, ".. get into parameters");
    return new Promise(getParameterHttp);

    function getParameterHttp(resolve, reject) {
        logger.info(id, ".. .. get into parameters promise");
        window.setTimeout(doIt, delay);
        function doIt() {
            console.log("delay = " + delay );
            logger.info(id, '.. .. .. get parameters cost time ' + delay);
            if (delay > 2000) {
                console.error("Failed");
                reject(id + " found error in Get parameter");
            } else {
                console.log("Succeed");
                resolve(id);
            }
        }
    }
}

function launchGameAsync(id) {
    var delay = Math.floor(Math.random() * 2000 + 1000);

    logger.info(id, ".. launching game");
    return new Promise(launchGameByHttp);

    function launchGameByHttp(resolve, reject) {
        logger.info(id, ".. .. launching game by http");
        window.setTimeout(doIt, delay);
        function doIt() {
            logger.info(id, '.. .. .. launch game, cost time ' + delay);
            if (delay > 2000) {
                console.error("Failed");
                reject(id + "found error in launching game");
            } else {
                console.log("Succeed");
                resolve(id + "game OK");
            }
        }
    }
}