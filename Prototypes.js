
var CreateObj=function(){
    console.log('i am a normal object');
};
var newObject=new CreateObj();
newObject.about;
console.log(newObject.__proto__);//__proto__ property of any object will refer to its prototype
console.log(CreateObj.prototype);
if(CreateObj.prototype===newObject.__proto__)
    console.log('both pointing to the same object');
CreateObj.prototype.prop1='this is my first property on prototype';
console.log(newObject.__proto__.prop1);
/* prop1 property will be available on each and every 
object created from CreateObj function*/
var obj2=new CreateObj();
var obj3=new CreateObj();
console.log('from obj2-->'+obj2.__proto__.prop1);
console.log('from obj1-->'+obj2.__proto__.prop1);