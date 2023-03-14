function odd() {
    for (var i=1; i<= 20; i++) {
        if (i % 2 != 0) {console.log(i)}
    }
}
function multOfThree() {
    for ( var i=100; i>=0; i--) {
        if ( i % 3 == 0 ) {console.log(i)}
    }
}
function printSequence() {
    for (var i=4; i >= -3.5; i-=1.5) {
        console.log(i);
    }
}

function sigma() {
    var sum=0;
    for (let i=1; i <= 100;i++) {
        sum+=i;
    }
    console.log(sum);
}

function factorial() {
    var product=1;
    for (let i=1; i<=12; i++) {
        product=product*i;
    }
    console.log(product);
}
