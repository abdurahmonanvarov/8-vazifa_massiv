let cars = ['BMW', 'Mers', 'DAMAS', 'LASETTIY'];     //for all element add to the arr  or cut

/**
 * 
 * for (let i = 0; i< cars.length; i++) {
    console.log(cars[i]);
}
 */

/**
 * for (const test of cars) {
    console.log(test);
}
 */


/**
 * function addElement(arr, element){
    arr.push(element);
    return arr;
}
console.log(addElement(cars, 'solo'));      elrmentlarni ohiriga malumot qoshish
 */

/**
 * function addElement(arr){
    arr.pop();
    return arr;
}
console.log(addElement(cars));   oxirini ochirish
 */
/**
 * function addElement(arr){
   let res ;
   res = arr.length;
    return res;   return arr.length; qilsak ham bolADI yuqoridagilarni ishlatmay 
}
console.log(addElement(cars));   uzunlikni qaytarish uchun
 */



 /**
  * function addElement(arr, element){
    arr.unshift(element)
    return arr;
 }
 console.log(addElement(cars, 'solo'));   //boshiga element qoshish
  */

/**
 *  function addElement(arr){
    arr.shift()
    return arr;
 }
 console.log(addElement(cars));   //boshiga element uchirish
 */

/**
 *  function addElement(arr1, arr2){
   let res = arr1.concat(arr2);
    return res;
 }
 console.log(addElement(cars, [1,2,3]));   // concat yordamida massivlarni birlashtiramiz
 */

/**
 *  function addElement(arr1, element){
    var res = arr1.includes(element);
    return res;
  }
  console.log(addElement(cars, 'BMW'));   // massivda elementlarni tekshirish true or folse
 */


  //12-maala
  

/**
 *   function alfabit(arr1){
    arr1.sort();
    return arr1;
  }
  console.log(alfabit(cars));   // 
 */

  //13-masala
/**
 *   function addElement(arr1, element){
    var res = arr1.indexOf(element);
    return res;
  }
  console.log(addElement(cars, 'BMW'));   // elemrntlarni index ni topish
 */
 

  //17-masala
function change(arr){
    let first = arr[0];
    let last = arr.length[-1];
    
    return arr;
}
console.log(change([1,2,3,4]));