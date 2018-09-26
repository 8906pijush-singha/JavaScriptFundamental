/*************************************************************************
 * @ purpose :understanding closure function
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/*
createObj is a variable which holds the obj object
*/ 
var createObj=function(){
    var a=10;//closure variable
    var b=20;//closure variable
    var obj={
        printA:function(){
            console.log(a);
        },
        printB:function(){
            console.log(b);
        }
    }
    return obj;
};
/*
creating the obj object by executing the creatObj()
*/
var newObj= createObj();
/*
printing two values which are noway related to newObj object
*/
newObj.printA();
newObj.printB();