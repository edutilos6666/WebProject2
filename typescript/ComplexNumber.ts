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
