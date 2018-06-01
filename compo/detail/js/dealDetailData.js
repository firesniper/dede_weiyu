+function ()
{
 window.fnPgp_getStoData = function ( str_stoKey , str_serhKey )
 {
   var jary_serh = "".fnPgp_cvtSerh () ;
   
   var str_jary = localStorage.getItem ( str_stoKey ) ;
   var jary_data = JSON.parse ( str_jary ) ;
   var pgp_data = jary_data [ jary_serh [ str_serhKey ] ]
   return pgp_data ;
 } ;
 window.fnPgp_getPgpByIdx = function ( str_stoKey , num_idx )
 {
   var jary_serh = "".fnPgp_cvtSerh () ;
   
   var str_jary = localStorage.getItem ( str_stoKey ) ;
   var jary_data = JSON.parse ( str_jary ) ;
   var pgp_data = jary_data [ num_idx ]
   return pgp_data ;
 } ;
 
 window.fn_injectData = function ( fnStr_getHtml , jqd )
 {
  
    var pgp_item = fnPgp_getStoData ( 'jary_item' , 'jaryIdx' ) ;
  
   document.onreadystatechange = 
    function ( event )
    {
     if ( document.readyState == 'complete' )
     {
      
        var str_iniJaryIdx = "".fnPgp_cvtSerh ().jaryIdx ;
        var num_iniJaryIdx = Math.ceil ( str_iniJaryIdx ) ;

        localStorage.setItem ( "iniIdx" , num_iniJaryIdx ) ;
        
        var str_jary = localStorage.getItem ( "jary_item" ) ;
        var jary_data = JSON.parse ( str_jary ) ;
        
        var pgp_numState = ( jary_data.length - 1 ).fnPgp_numState 
        ( { curIdx : num_iniJaryIdx } ) ;

        var str_tit_pre = jary_data [ pgp_numState.num_pre ].str_tit ;
        var str_tit_next = jary_data [ pgp_numState.num_next ].str_tit ;

        $ ( '#prev_next li b' ).eq( 0 ).text ( "案例展示" + ( str_tit_pre  ) ) ;
        $ ( '#prev_next li b' ).eq( 1 ).text ( "案例展示" + ( str_tit_next ) ) ;

        /* var pgp_numState = ( jary_data.length - 1 ).fnPgp_numState ( num_curJaryIdx ) ;
        console.log ( "pgp_numState:" , pgp_numState ) ; */

        var str_html = fnStr_getHtml ( pgp_item ) ;
        jqd.html ( str_html ) ;

        $ ( '#prev_next li b' ).eq( 0 ).click 
        (
          function ( event )
          { 
            // console.log ( "this: " , this.__proto__ , this.previousElementSibling ) ;
            var str_iniIdx = localStorage.getItem ( "iniIdx" ) ;
            var num_iniIdx = Math.ceil ( str_iniIdx ) ;

            var pgp_numState_ini = ( jary_data.length - 1 ).fnPgp_numState 
            ( { curIdx : num_iniIdx } ) ;
            var pgp_numState_cur = ( jary_data.length - 1 ).fnPgp_numState 
            ( { curIdx : pgp_numState_ini.num_pre } ) ;

            var str_tit_pre = jary_data [ pgp_numState_cur.num_pre ].str_tit ;
            var str_tit_next = jary_data [ pgp_numState_cur.num_next ].str_tit ;

            this.innerText = "案例展示" + ( str_tit_pre ) ;
            $ ( '#prev_next li b' ).eq( 1 ).text ( "案例展示" + ( str_tit_next ) ) ;

            localStorage.setItem ( 'iniIdx' , pgp_numState_ini.num_pre ) ; 
            var pgp_item = fnPgp_getPgpByIdx ( 'jary_item' , pgp_numState_ini.num_pre ) ;
            var str_html = fnStr_getHtml ( pgp_item )
            jqd.html ( str_html ) ;

          }
        ) ;
        $ ( '#prev_next li b' ).eq( 1 ).click 
        (
          function ( event )
          { 
            var str_iniIdx = localStorage.getItem ( "iniIdx" ) ;
            var num_iniIdx = Math.ceil ( str_iniIdx ) ;

            var pgp_numState_ini = ( jary_data.length - 1 ).fnPgp_numState 
            ( { curIdx : num_iniIdx } ) ;
            var pgp_numState_cur = ( jary_data.length - 1 ).fnPgp_numState 
            ( { curIdx : pgp_numState_ini.num_next } ) ;

            var str_tit_pre = jary_data [ pgp_numState_cur.num_pre ].str_tit ;
            var str_tit_next = jary_data [ pgp_numState_cur.num_next ].str_tit ;

            $ ( '#prev_next li b' ).eq( 0 ).text ( "案例展示" + ( str_tit_pre ) ) ;
            this.innerText = "案例展示" + ( str_tit_next ) ;

            localStorage.setItem ( 'iniIdx' , pgp_numState_ini.num_next ) ; 
            var pgp_item = fnPgp_getPgpByIdx ( 'jary_item' , pgp_numState_ini.num_next ) ;
            var str_html = fnStr_getHtml ( pgp_item )
            jqd.html ( str_html ) ;
          }
        ) ;
      } ;
    } ;

 } ;



} ( jQuery ) ;



