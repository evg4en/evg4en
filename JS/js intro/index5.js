const getMax = function(first, second, third) {
    let test;
    if (first > second) {
        test = first;
    } else {
        test = second;
    }
    if (test > third) {
        return test;
    } else {
        return third;
    }
};

// examples
console.log(getMax(10, 20, 30)); // ===> 30
console.log(getMax(100, 20, 30)); // ===> 100
console.log(getMax(0, 0, 0)); // ===> 0