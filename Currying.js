/*************************************************************************
 * @ purpose :understanding curring function
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/*
avg is a function which returns the average of an array
*/
var avg=function(...n){
	var total=0;
	n.forEach(function(i){
		total=total+i;
	});
	return total/n.length;
};
/*
spiceup is another function which takes one 
variable and return a function which takes one function 
to bind(with the help of apply) and one array to cancat with the last one
*/  
var spiceUp=function(fn,...n){
	return function(...m){
		return fn.apply(this,n.concat(m));
	}
};
var addToAvg=spiceUp(avg,1,2,3,4);//reducing the arity
var result=addToAvg(5,6,7,8);
/*
printing the result to the console
*/
console.log(result);