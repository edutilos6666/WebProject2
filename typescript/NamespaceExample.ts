//import ComplexNumber = com.edutilos.src.ComplexNumber;
namespace com {
    export namespace edutilos {
        export namespace src {
            export class ComplexNumber {
                private real:number
                private im:number;

                constructor(real:number= 0, im:number = 0) {
                    this.real = real ;
                    this.im = im ;
                }

                add(other:ComplexNumber):any {
                    var res:ComplexNumber = new ComplexNumber(0, 0);
                    res.real = this.real + other.real ;
                    res.im = this.im + other.im ;
                    return res;
                }

                subtract(other:ComplexNumber):any {
                    var res:ComplexNumber = new ComplexNumber(0, 0);
                    res.real = this.real - other.real ;
                    res.im = this.im - other.im ;
                    return res ;
                }

                multiply(other:ComplexNumber):any {
                    var res =  new ComplexNumber();
                    res.real = this.real*other.real - this.im*other.im;
                    res.im = this.real*other.im + this.im*other.real;
                    return res;
                }

                toString():string {
                    return this.real + " + i*"+ this.im ;
                }
            }

            export class SimpleMath {
                private n1:number ;
                private n2:number ;
                constructor(n1:number = 0, n2:number = 0) {
                    this.n1 = n1 ;
                    this.n2 = n2 ;
                }

                add() {
                    return this.n1 + this.n2 ;
                }

                subtract() {
                    return this.n1 - this.n2 ;
                }

                multiply() {
                    return this.n1 * this.n2 ;
                }
                divide() {
                    return this.n1 / this.n2 ;
                }
            }
        }
    }
}


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