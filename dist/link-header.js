/**
 * angular-hy-res - Hypermedia client for AngularJS inspired by $resource
 * @version v0.0.23 - 2015-06-19
 * @link https://github.com/petejohanson/angular-hy-res
 * @author Pete Johanson <peter@peterjohanson.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";

var angular = require("angular");
var LinkHeader = require("hy-res").LinkHeaderExtension;

angular.module("hrLinkHeader", [require("./core")]).service("hrLinkHeaderExtension", function () {
  return new LinkHeader();
}).config(["hrRootProvider", function (hrRootProvider) {
  hrRootProvider.extensions.push("hrLinkHeaderExtension");
}]);

module.exports = "hrLinkHeader";