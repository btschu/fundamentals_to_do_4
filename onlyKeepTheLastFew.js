// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X, remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function onlyKeepTheLastFew(arr,num){
    for(var i = 0; i < num; i++){
        arr[i] = arr[arr.length - num + i];
    }
    arr.length = num;
    return arr;
}

console.log(onlyKeepTheLastFew([2,4,6,8,10],3)); //[ 6, 8, 10 ]
console.log(onlyKeepTheLastFew([2,4,6,8,10,22,12],5)); //[ 6, 8, 10, 22, 12 ]