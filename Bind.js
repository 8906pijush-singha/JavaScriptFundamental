/*************************************************************************
 * @ purpose :understanding bind()
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
var func=function(a){
    return this.num+a;
}
var a=12;
/*getting the binded func with the respective obj
* and then passing the argument as variable a.
*/
var bindedFunc=func.bind(obj);
    console.log(bindedFunc(a));
