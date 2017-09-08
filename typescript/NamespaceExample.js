//import ComplexNumber = com.edutilos.src.ComplexNumber;
var com;
(function (com) {
    var edutilos;
    (function (edutilos) {
        var src;
        (function (src) {
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
            src.ComplexNumber = ComplexNumber;
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
            src.SimpleMath = SimpleMath;
        })(src = edutilos.src || (edutilos.src = {}));
    })(edutilos = com.edutilos || (com.edutilos = {}));
})(com || (com = {}));
function testNamespace() {
    var cn1 = new com.edutilos.src.ComplexNumber(1, 1);
    var cn2 = new com.edutilos.src.ComplexNumber(2, 2);
    console.log("cn1 = ", cn1.toString());
    console.log("cn2 = ", cn2.toString());
    console.log("cn1 + cn2 = ", cn1.add(cn2).toString());
    console.log("cn1 - cn2 = ", cn1.subtract(cn2).toString());
    console.log("cn1 * cn2 = ", cn1.multiply(cn2).toString());
    console.log();
    var sm = new com.edutilos.src.SimpleMath(20, 10);
    console.log("sm add = ", sm.add());
    console.log("sm subtract = ", sm.subtract());
    console.log("sm multiply = ", sm.multiply());
    console.log("sm divide = ", sm.divide());
}
testNamespace();
