'use strict';
var logger = (function(){
    var instance = {
            info: info
        };

    return instance;

    function info(id, state, comment) {
        if (id === undefined) {
            id = -1;
        }

        if (state === undefined) {
            state = '';
        }

        if (comment === undefined) {
            comment = '';
        }

        var logEle = document.getElementById('log');
        logEle.insertAdjacentHTML('beforeend', id + ')' + state + ' (<small>' + comment + '</small>)<br/>');
    }
})();
