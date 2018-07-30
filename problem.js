//s1 =2 4 6 8 10 12 14 ...

var series = "";
var name = "";
var n;
for (var i=1;i<10;i++){
    n = i*2;
    name = name + n +" ";
}
console.log(name);


//s2 = 1 4 7 10 13 16...

series ="1 ";
n = 1;
for(var i=1;i<10;i++){
    n = n+3;
    series = series + n + " ";
}
console.log("series 2 =",series);
