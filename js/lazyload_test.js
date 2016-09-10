/* 
* @Author: anchen
* @Date:   2016-04-06 10:28:55
* @Last Modified by:   anchen
* @Last Modified time: 2016-04-06 10:28:59
*/

'use strict';
var eLnow = Date.now();
var lazyEvalLazy = (function() {
    var timer, running;
    var unblock = function() {
        running = false;
    };
    var run = function() {
        clearTimeout(timer);
        //执行加载图片动作
        //...
        setTimeout(unblock);
    };
    return {
        debounce: function() {
            clearTimeout(timer);
            running = true;
            timer = setTimeout(run, 66);
        },
        throttled: function() {
            var delay;
            if (!running) {
                running = true;
                clearTimeout(timer);
                delay = Date.now() - eLnow;
                if (delay > 300) {
                    delay = 9;
                } else {
                    delay = 99;
                }
                timer = setTimeout(run, delay);
            }
        }
    };
})();