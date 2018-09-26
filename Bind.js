
var obj={ 
    num:2
};
var func=function(a){
    return this.num+a;
}
var a=12;
var bindedFunc=func.bind(obj);//getting the binded func with the respective obj
    console.log(bindedFunc(a));//and then passing the argument.
