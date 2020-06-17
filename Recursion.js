/* Make a function that computes factorials
    recursiverly
*/


function calcRecursion(n){
    if(n===1)
    return 1;
    else
        var x= n*calcRecursion(n-1);

    return x;
}
console.log(calcRecursion(e));