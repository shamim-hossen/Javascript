//01 Function doWhatEverYouWant(Obj, cb)

var me = {
    name: 'Mim',
    age: 20,
    email: 'mimroy344@gmail.com'
};

function doWhatEverYouWant(obj, cb) {
    console.log('Person: ' + obj.name + ' (' + obj.age + ')');
    if (obj.age >= 18) {
        cb(obj.email);
    } else {
        console.log('Your are not adult.');
    }
}

doWhatEverYouWant(me, function(email){
    console.log('Your email is ' + email);
});



//02 Impliment Map Function

var arr=[0,1,2,3,4,5,6,7,8,9];
function myMap(arr, cb) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        var data = cb(arr[i]);
        newArr.push(data);
    }
    return newArr;
}
var arr1 = myMap(arr, function(value) {
    return value +2;
});

var arr2 = myMap(arr, function(value) {
    return value -2;
});
var arr3 = myMap(arr, function(value) {
    return value *2;
});
var arr4 = myMap(arr, function(value) {
    return value /2;
});
var arr5 = myMap(arr, function(value) {
    return value %2;
});
console.log('Addition is =' + arr1);
console.log('Subtraction is =' + arr2);
console.log('Multiplication is =' + arr3);
console.log('Division is =' + arr4);
console.log('Remainder is =' + arr5);
