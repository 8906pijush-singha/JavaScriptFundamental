//chainnig function
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
person.firstName('Sourav').middleName('Chandidas').lastName('Gangully').print();