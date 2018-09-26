//currying function implementation
var avg=function(...n){
	var total=0;
	n.forEach(function(i){
		total=total+i;
	});
	return total/n.length;
};
var spiceUp=function(fn,...n){
	return function(...m){
		return fn.apply(this,n.concat(m));
	}
};
var addToAvg=spiceUp(avg,1,2,3,4);//reducing the arity
var result=addToAvg(5,6,7,8);
console.log(result);