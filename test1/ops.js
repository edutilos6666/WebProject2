function arithmeticOps() {
    /*
     +	Addition
     -	Subtraction
     *	Multiplication
     /	Division
     %	Modulus
     ++	Increment
     --	Decrement
     */

    var x = 10 , y = 3 ;
    var add = x + y,
        sub = x - y ,
        multi = x * y ,
        div = x / y ,
        mod = x % y ,
        incr = ++x ,
        decr = --x ;

    console.log(`add = ${add}`);
    console.log(`subtract = ${sub}`);
    console.log(`multi = ${multi}`);
    console.log(`div = ${div}`);
    console.log(`mod = ${mod}`);
    console.log(`incr = ${incr}`);
    console.log(`decr = ${decr}`);
}



function assignmentOps() {
    /*
     =	x = y	x = y
     +=	x += y	x = x + y
     -=	x -= y	x = x - y
     *=	x *= y	x = x * y
     /=	x /= y	x = x / y
     %=	x %= y	x = x % y
     */
    var x = 10 ,
        xEq = x,
        xSumEq = 0 ,
        xSubEq = 0 ,
        xMultEq = 1 ,
        xDivEq = 1 ,
        xModEq = 1 ;

    xSumEq += x ;
    xSubEq -= x ;
    xMultEq *= x ;
    xDivEq /= x ;
    xModEq %= x ;
    console.log(`xSumEq = ${xSumEq}`);
    console.log(`xSubEq = ${xSubEq}`);
    console.log(`xMultEq = ${xMultEq}`);
    console.log(`xDivEq = ${xDivEq}`);
    console.log(`xModEq = ${xModEq}`);
}


function comparisonOps() {
    /*
     ==	equal to
     ===	equal value and equal type
     !=	not equal
     !==	not equal value or not equal type
     >	greater than
     <	less than
     >=	greater than or equal to
     <=	less than or equal to
     ?	ternary operator
     */

    var x = 10 , y = 5 ;
    var eq = x == y ,
        identical = x === y ,
        notEq = x != y ,
        notIdentical = x !== y ,
        gt = x > y ,
        lt = x < y ,
        gte = x >= y ,
        lte = x <= y ,
        ternary = x==y?true: false ;

    console.log(`eq = ${eq}`);
    console.log(`identical = ${identical}`);
    console.log(`notEq = ${notEq}`);
    console.log(`notIdentical = ${notIdentical}`);
    console.log(`gt = ${gt}`);
    console.log(`lt = ${lt}`);
    console.log(`gte = ${gte}`);
    console.log(`lte = ${lte}`);
    console.log(`ternary = ${ternary}`);
}


function logicalOps() {
    /*
     &&	logical and
     ||	logical or
     !	logical not
     */
    var x = true , y = false ;
    var and = x && y ,
        or = x || y ,
        notX = !x;
    console.log(`and = ${and}`);
    console.log(`or = ${or}`);
    console.log(`notX = ${notX}`);
}


function typeOps() {
    /*
     typeof	Returns the type of a variable
     instanceof	Returns true if an object is an instance of an object type
     */
    var x = 10 , y = new Number(10);
    console.log(`typeof x = ${typeof x}`);
    console.log(`typeof y = ${typeof y}`);
    console.log(`x instanceof Object = ${x instanceof Object}`);
    console.log(`y instanceof Number = ${y instanceof Number}`);
    console.log(`y instanceof Object = ${y instanceof Object}`);
}


function bitwiseOps() {
    /*
     &	AND	5 & 1	0101 & 0001	0001	 1
     |	OR	5 | 1	0101 | 0001	0101	 5
     ~	NOT	~ 5	 ~0101	1010	 10
     ^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
     <<	Zero fill left shift	5 << 1	0101 << 1	1010	 10
     >>	Signed right shift	5 >> 1	0101 >> 1	0010	  2
     >>>	Zero fill right shift	5 >>> 1	0101 >>> 1	0010	  2
     */
    var x = 5 , y = 1 ;
    var and = x & y ,
        or = x | y ,
        notX = ~x ,
        xor = x ^ y ,
        leftShift  = x << y ,
        signedRightShift = x >> y ,
        zeroFilledRightShift = x >>> y ;

    console.log(`and = ${and}`);
    console.log(`or = ${or}`);
    console.log(`notX = ${notX}`);
    console.log(`xor = ${xor}`);
    console.log(`leftShift = ${leftShift}`);
    console.log(`signedRightShift = ${signedRightShift}`);
    console.log(`zeroFilledRightShift = ${zeroFilledRightShift}`);
}


console.log("<<arithmetic ops>>");
arithmeticOps();
console.log();
console.log("<<assignment ops>>");
assignmentOps();
console.log();
console.log("<<comparison ops>>");
comparisonOps();
console.log();
console.log("<<logical ops>>");
logicalOps();
console.log();
console.log("<<type ops>>");
typeOps();
console.log();
console.log("<<bitwise ops>>");
bitwiseOps();