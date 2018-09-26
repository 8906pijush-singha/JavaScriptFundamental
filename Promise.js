/*************************************************************************
 * @ purpose :understanding promise and callback
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
//using callback
/*
*function first(value,callback){callback(value,false);
*    value=value*10;
*    callback(value,false);
*}
*function second(value,callback){
*    value=value+5;
*    callback(value,false);
*}
*function third(value,callback){
*    value=value/10;
*    callback(value,false);
*}
*
*first(2,function(firstResult,err){
*    if(!err){
*        console.log(firstResult);
*        second(firstResult,function(secondResult,err){
*            if(!err){
*                console.log(secondResult);
*                third(secondResult,function(thirdResult,err){
*                    if(!err){
*                        console.log(thirdResult);
*                    }
*                })
*            }
*        })        
*    }
*})
*/

//using promise
/*
firstPromise is a function which returns a promise object
*/
var firstPromise=function(i){ 
    return new Promise(function(resolve,reject){
    if(i>0)
    resolve(i);
    else
    reject('there is an error');
})}
/*
first firstPromise will execute then first() and then Second and
goes on until response comes
*/
firstPromise(-3).then(first).then(second).then(third).then(function(response)
{
    console.log(response);
}).catch(function(err){
    console.log(err);
})
/*
these are my 3 methods which needs to execute in order
*/
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