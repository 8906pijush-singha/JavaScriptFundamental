
var obj={ 
    num:2
};
var func=function(a){
    return this.num+a;
}
    console.log(func.call(obj,3));//calling the num property of obj object.
