/**
 * angular-hy-res - Hypermedia client for AngularJS inspired by $resource
 * @version v0.0.23 - 2015-06-19
 * @link https://github.com/petejohanson/angular-hy-res
 * @author Pete Johanson <peter@peterjohanson.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";

var angular = require("angular");

angular.module("hrHyRes", [require("./core"), require("./hal"), require("./siren"), require("./link-header"), require("./json")]);

module.exports = "hrHyRes";