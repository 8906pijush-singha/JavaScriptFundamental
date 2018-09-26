
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

var newObj= createObj();
newObj.printA();
newObj.printB();