var pen={
    color:'red',
    func:function(){
        console.log('i can write');
    }
};
// 1)iterate over the whole object

// var clone={};
// for (var key in pen){
//     clone[key]=pen[key];
// };

//2) using Object.assign()

//var clone=Object.assign({},pen);

// 3) using spread  '...' operator

var clone={...pen};

console.log(pen);
console.log(clone);
console.log(pen.func());
console.log(clone.func());