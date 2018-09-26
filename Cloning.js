/*************************************************************************
 * @ purpose :understanding cloning
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/*
pen is an object which has two property 
1)color and 2) func 
*/
var pen={
    color:'red',
    func:function(){
        console.log('i can write');
    }
};
/* 
to create the clone we need to iterate over the whole object (using for in loop)
*/

var clone1={};
for (var key in pen){
    clone1[key]=pen[key];
};

/*
we can do the same using Object.assign()
*/
var clone2=Object.assign({},pen);

/* 
or we can use spread  '...' operator
*/

var clone3={...pen};