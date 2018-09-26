/*************************************************************************
 * @ purpose :understanding call()
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
func is a function is which returns the sum
argument and num property of obj object
*/
var func=function(a){
    return this.num+a;
}
/*
passing the value of parameter a and binding it using call method
*/
console.log(func.call(obj,3));
