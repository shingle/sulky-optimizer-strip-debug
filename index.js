/**
 * SunEee
 * @date Created on 2015/4/30
 * @author YuHui(语晖)<yuhui@suneee.com>
 *
 */

'use strict';
var stripDebug = require('strip-debug');

module.exports = function (content) {
    return stripDebug(content).toString();
};