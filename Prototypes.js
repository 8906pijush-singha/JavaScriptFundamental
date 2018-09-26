/*************************************************************************
 * @ purpose :understanding prototypes
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/*
CreateObj is a function which returns a function object
*/
var CreateObj=function(){
    console.log('i am a normal object');
};
/*
newObj holds that function object
*/
var newObject=new CreateObj();
/*
__proto__ property of any object will refer to its prototype
*/
console.log(newObject.__proto__);
/*
same for the prototype property for function
*/
console.log(CreateObj.prototype);
/*
if is checking if both the object are same or not
*/
if(CreateObj.prototype===newObject.__proto__)
    console.log('both pointing to the same object');
CreateObj.prototype.prop1='this is my first property on prototype';
/* 
prop1 property will be available on each and every 
object created from CreateObj function
*/
console.log(newObject.__proto__.prop1);
var obj2=new CreateObj();
var obj3=new CreateObj();
console.log('from obj2-->'+obj2.__proto__.prop1);
console.log('from obj1-->'+obj2.__proto__.prop1);