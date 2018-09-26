
var obj={ 
    num:2
};
var func=function(a,b,c){
    return this.num+a+b+c;
}
var arr=[1,2,3];
    console.log(func.apply(obj,arr));//same as call but can be called wiht array only 
