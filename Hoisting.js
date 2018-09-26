/*************************************************************************
 * @ purpose :understanding Hoisting
 * @author  Pijush Singha
 * @version 1.0
 * @since 25/09/2018
 *************************************************************************/  
  hoist();
  function hoist() {
    a = 20;
  }
  console.log(a); 
  var a;
  /*function hoist() called before the function declared but it still works as 
  hoisting is happening here
  same goes foe the variable a*/
  