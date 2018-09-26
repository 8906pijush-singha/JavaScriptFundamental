/*************************************************************************
 * @ purpose :understanding apply()
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/*
obj is an object which contains num prperty
*/
var obj={ 
    num:2
};
/*
func is a function is which returns the sum of three arguments and num property of obj object
*/
var func=function(a,b,c){
    return this.num+a+b+c;
}
/*
arr is an array
*/
var arr=[1,2,3];
/*
using apply function we are binding arr array and obj object. 
*/
console.log(func.apply(obj,arr));
