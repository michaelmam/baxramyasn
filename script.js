function rdn(n){

    let aaa = [];
    
    for(let i=0; i<n; ++i){
        aaa[i] = Math.floor(Math.random() * 101); 
    }
    return aaa;
}
var x1 = rdn(5);
var x2 = rdn(5);
var x3 = rdn(5);
var x4 = rdn(5);
var x5 = rdn(5);
var x6 = rdn(5);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);

let max_x1 = Math.max(...x1);
let max_x2 = Math.max(...x2);
let max_x3 = Math.max(...x3);
let max_x4 = Math.max(...x4);
let max_x5 = Math.max(...x5);
let max_x6 = Math.max(...x6);
let b =  mode(x3);
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}
console.log(b,"aaaa");


console.log(max_x1);
console.log(max_x2);
console.log(max_x3);
console.log(max_x4);
console.log(max_x5);
console.log(max_x6);

let max_max = Math.max(max_x1,max_x2,max_x3,max_x4,max_x5,max_x6);

console.log("Max=" + max_max);

