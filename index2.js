//MASALALAR

//1-masala
/**
 * function colors(arr1, arr2, arr3){
    let res = [];
    res.push(arr1);
    res.push(arr2);
    res.push(arr3);
    return res;
}
console.log(colors('qizil', 'yashil', 'oq'));
 */

//2-masala
/**
 * function numberFind(arr1, arr2, arr3){
    let res = [];
    res.push(arr1);
    res.push(arr2);
    res.push(arr3);
    return res;
}
console.log(numberFind(1,2,3));
 */

//3-masala
/**
 * function findFirstAndLasr(arr){
    console.log(arr[0]);
    console.log(arr[arr.length - 1]);
}
findFirstAndLasr([1,2,3,4,5]);
 */

//4-masala
/**
 * function changeNumber(arr, element){
   arr [1] = element;
   return arr;
}
console.log(changeNumber([1,2,3,4],5));
 */

//5-masala
/**
 * function addElement(arr, element){
    arr.push(element);
    return arr;
}
console.log(addElement([1,2,3,4],'salomlar'));
 */

//6-masala
/**
 * function deletElement(arr){
    arr.pop();
    return arr;
}
console.log(deletElement([1,2,3,4]));
 */

//7-masala
/**
 * function longArry(arr){
    let res = arr.length;
    return res;
}
console.log(longArry([1,2,3,4]));
 */

//8-masala
/**
 * function addElementFirst(arr, element){
    arr.unshift(element);
    return arr;
}
console.log(addElementFirst([1,2,3,4], true));
 */


//9-masala
/**
 * function deletElementFirst(arr){
    arr.shift();
    return arr;
}
console.log(deletElementFirst([1,2,3,4]));
 */

//10-masala
/**
 * function addArrys(arr1, arr2){
    let res = arr1.concat(arr2);
    return res;
}
console.log(addArrys([1,2,3,4],['salom','hayir']));
 */

//11-masala
/**
 * function findElement(arr, element){
    let res = arr.includes(element);
    return res;
}
console.log(findElement([1,2,3,4],3));
 */

//12-masala
/**
 * function alfabit(arr){
    arr.sort();
    return arr;
}
console.log( alfabit(['olma', 'anor', 'bexi']));
 */

/**
 * //13-masala
function findIndex(arr, element){
    let res = arr.indexOf(element);
    return res;
}
console.log(findIndex([1,2,3,4,5,6], 6));
 */

//14-masala
/**
 * function deletIndex(arr, element){
    let res = arr.splice(element);
    return res;

}
console.log(deletIndex([1,2,3,4,5], 1));
 */

//15-masala
/**
 * function deletTwoElement(arr){
    arr.pop();
    arr.pop();
    return arr;
}

console.log(deletTwoElement([1,2,3,4,5,6,7,8]));
 */

//16-masala
/**
 * function deletTwoElement(arr, element1, element2){
    arr.push(element1);
    arr.push(element2);
    return arr;
}

console.log(deletTwoElement([1,2,3,4,5,6,7,8], 'hayir', 'salomlar'));
 */

//17-masala
/**
 * function changeElement(arr){
   let first = arr[0];
   let last = arr[arr.length -1];
   arr[0] = last;
   arr[arr.length -1] = first;
   return arr;
}

console.log(changeElement([1,2,3,4,5,6,7,8]));
 */

//18-masala
/**
 * function deletIndex(arr, element){
    let res = arr.splice(element, 0);
    return res;

}
console.log(deletIndex([1,2,3,4,5]));
 */

//20-masala
/**
 * function repitElement(arr){
    let arr1 = [];
    for (let i = 0; i < arr.length; i++){
        arr1.push(arr[i]);
        arr1.push(arr[i]);
    }
    return arr1
}
console.log(repitElement([1,2,3,4,5]));
 */


//21-masala
/**
 * function findBigElement(arr){
   let res=  arr.sort9().length - 1;
    return res;
}
console.log(findBigElement([1,2,3,4,5,6,7]));
 */

//23-masala
/**
 * function urtachasi(arr){
    let sum  = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum /2;
}
console.log(urtachasi([1,2,3,4,5]));
 */


//24-masala
/**
 * function teskari(arr){
    arr.reverse();
    return arr;
}
console.log(teskari([1,2,3,4]));
 */


//26-masala
/**
 * function repitElement(arr){
    let arr1 = [];
    for (let i = 0; i < arr.length; i++){
        arr1.push(arr[i]);
        arr1.push(arr[i]);
    }
    return arr1
}
console.log(repitElement([1,2,3,4,5]));
 */

//27-masala
/**
 * function cvadratTopish(arr){
    let res =[];
    for (let i = 0; i < arr.length; i++){
        res =  arr[i]**i;
    }
    return res;
}
console.log(cvadratTopish([1,2,3]));
 */

//28-masala
/**
 * function deletElement(arr, element){
    let res = arr.splice(element);
    return res;
}
console.log(deletElement([1,2,3,4],1));
 */

//29-masala
/**
 * function findElement(arr, element){
    let res = arr.includes(element);
    return res;
}
console.log(findElement([1,2,3,4],7));
 */
//31-masala
/**
 * function arry(arr){
    let sum = 0;
    for (let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(arry[1,2,3,4]);
 */


//33-masala
/**
 * function addArr(arr1, arr2){
    return arr1.concat(arr2);
}
console.log(addArr([1,2,3,4], [6,7,8]));
 */

//34-masala
/**
 * function numberPilus(arr, element){
    for (let i = 0; i < arr.length; i++){
        return i+element;
    }
}
console.log(numberPilus[2,3,4],2);
 */


//35-masala
/**
 * function findBigElement(arr){
    arr.sort();
    return arr;
}
console.log(findBigElement([1,2,3,4,5,6,7]));
 */





//MASALALAR  MASSIV METODLARI

//1-MASALA
/**
 * function newElement(arr, element){
    arr.push(element);
    return arr;
}
console.log(newElement([4,7],2));
 */

//2-masala
/**
 * function newElement(arr){
    arr.pop();
    return arr;
}
console.log(newElement([4,7,56,7]));
 */

//3-masala
/**
 * function newElement(arr,){
    arr.shift();
    return arr;
}
console.log(newElement([4,7,56,7]));
 */

//4-masala
/**
 * function newElement(arr,){
    arr.unshift('salom');
    return arr;
}
console.log(newElement([4,7,56,7]));
 */

//5-masala
/**
 * function newElement(arr,element){
    arr.includes(element);
    return arr;
}
console.log(newElement());
 */

//6-masala
/**
 * function newElement(arr,element){
    arr.indexOf(element);
    return arr;
}
console.log(newElement());
 */

//7-masala
/**
 * function newElement(arr,element){
    arr.lastIndexOf(element);
    return arr;
}
console.log(newElement());
 */

//8-masala
/**
 * function newElement(arr){
    arr.splice(2, 2);
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//9-masala
/**
 * function newElement(arr){
    arr.push('dunto');
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//10-masala
/**
 * function newElement(arr){
    arr.pop();
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//11-masala
/**
 * function newElement(arr){
    arr.shift();
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//12-masala
/**
 * function newElement(arr){
    arr.unshift('Abdurahmon');
    return arr;
}
console.log(newElement([1,2,3,4,5]));

 */

//14-masala

/**
 * function newElement(arr, element){
    arr.includes(element);
    return arr;
}
console.log(newElement());
 */

//15-masala
/**
 * 
  function newElement(arr){
    arr.indexOf();
    return arr;
}
console.log(newElement([1,2,3,4,5]));
 */

//16-masala
/**
 * function newElement(arr){
    arr.splice(1,2);
    return arr;
}
console.log(newElement([1,2,3,4,5,6,7,8,9]));
 */

