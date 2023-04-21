//Ejercicio 2


function sum (arr, n) {


    if(n <= 0){
        return 0;
}else if(n >arr.length){
    return arr.reduce((acc,curr)=> acc + curr);
} else {
    return arr [n-1] + sum(arr.slice(0,n-1),n-1);
}
}



console.log(sum([2,3,4,5],3));
