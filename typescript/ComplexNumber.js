"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComplexNumber = (function () {
    function ComplexNumber(real, im) {
        if (real === void 0) { real = 0; }
        if (im === void 0) { im = 0; }
        this.real = real;
        this.im = im;
    }
    ComplexNumber.prototype.add = function (other) {
        var res = new ComplexNumber(0, 0);
        res.real = this.real + other.real;
        res.im = this.im + other.im;
        return res;
    };
    ComplexNumber.prototype.subtract = function (other) {
        var res = new ComplexNumber(0, 0);
        res.real = this.real - other.real;
        res.im = this.im - other.im;
        return res;
    };
    ComplexNumber.prototype.multiply = function (other) {
        var res = new ComplexNumber();
        res.real = this.real * other.real - this.im * other.im;
        res.im = this.real * other.im + this.im * other.real;
        return res;
    };
    ComplexNumber.prototype.toString = function () {
        return this.real + " + i*" + this.im;
    };
    return ComplexNumber;
}());
exports.ComplexNumber = ComplexNumber;
