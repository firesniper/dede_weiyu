+function ()
{
 var str_jdm = document.body.innerHTML ;
 window.setTimeout 
 (
  function () 
  {
   var str_jdm2 = str_jdm + '<h1>1</h1>' ;
   document.body.innerHTML = str_jdm2 ;
  } ,
  3000
 ) ;
 var jdm = document.querySelector ( 'h1' ) ;
 var pm_res = Object.fnPm_observer ( { str_jdm : 'h1' } ) ;
 console.log ( "result:" , pm_res ) ;

 pm_res.then 
 (
  function ( resolve )
  {
    console.log ( "resolve:" , resolve ) ;
  }
 ) ;

} () ;