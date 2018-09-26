/*************************************************************************
 * @ purpose :function chaining simple example
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/
/*
fullname is the function which hold three other function and all of them 
returns same function obj
*/ 
var FullName=function(){
    var name;
    this.firstName=function(firstName){
       this.name=firstName+" ";
        return this;
    }
    this.middleName=function(middleName){
        this.name=this.name+middleName+" ";
        return this;
    }
    this.lastName=function(lastName){
        this.name=this.name+lastName;
        return this;
    }
    this.print=function(){
        console.log(this.name);
    }
};
var person=new FullName();
/*
showing the function chaning 
*/
person.firstName('Sourav').middleName('Chandidas').lastName('Gangully').print();