"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleMath = (function () {
    function SimpleMath(n1, n2) {
        if (n1 === void 0) { n1 = 0; }
        if (n2 === void 0) { n2 = 0; }
        this.n1 = n1;
        this.n2 = n2;
    }
    SimpleMath.prototype.add = function () {
        return this.n1 + this.n2;
    };
    SimpleMath.prototype.subtract = function () {
        return this.n1 - this.n2;
    };
    SimpleMath.prototype.multiply = function () {
        return this.n1 * this.n2;
    };
    SimpleMath.prototype.divide = function () {
        return this.n1 / this.n2;
    };
    return SimpleMath;
}());
exports.SimpleMath = SimpleMath;
