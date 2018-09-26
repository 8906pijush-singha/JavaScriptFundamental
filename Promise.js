//using callback only


// function first(value,callback){callback(value,false);
//     value=value*10;
//     callback(value,false);
// }
// function second(value,callback){
//     value=value+5;
//     callback(value,false);
// }
// function third(value,callback){
//     value=value/10;
//     callback(value,false);
// }

// first(2,function(firstResult,err){
//     if(!err){
//         console.log(firstResult);
//         second(firstResult,function(secondResult,err){
//             if(!err){
//                 console.log(secondResult);
//                 third(secondResult,function(thirdResult,err){
//                     if(!err){
//                         console.log(thirdResult);
//                     }
//                 })
//             }
//         })        
//     }
// })


//using promise
var firstPromise=function(i){ 
    return new Promise(function(resolve,reject){
    if(i>0)
    resolve(i);
    else
    reject('there is an error');
})}
firstPromise(-3).then(first).then(second).then(third).then(function(response)
{
    console.log(response);
}).catch(function(err){
    console.log(err);
})
function first(value){
    value=value*10;
    return value;
}
function second(value){
    value=value+5;
    return value;
}
function third(value){
    value=value/10;
    return value;
}