$.fn.fn_navChangeColor = function 
(  
  num_curIdx ,  str_curCls
)
{
    // console.log ( 'this:' , this ) ;
    this.removeClass ( str_curCls ) ;
    this.eq ( num_curIdx ).addClass ( str_curCls ) ;
} ;


+function ( $ )
{
  
  var DealSampleData = function ()
  {
    arguments.callee.prototype.fn_getPmData = function ( str_uri )
    {
      var pm01 = new Promise 
      (
        function ( resolve , rejected )
        {
          $.getJSON
          (
            str_uri , 
            function ( data )
            {
              console.log ( "data:" , data ) ;
              var str_data = JSON.stringify ( data ) ;
              resolve ( str_data ) ;
            }
          ) ;
        }
      ) ;
      return pm01 ;
    } ;

    arguments.callee.prototype.fnStr_prodItemHt = function ( jary_item , fnStr_getHtml )
    {
  
      var ary_strBuffer = [] ;
  
      for ( 
        var i = 0 ; 
        i < jary_item.length ; 
        i ++ 
      )
      {
        console.log ( "jary_item:" , jary_item [ i ] ) ;
        var str_serhVal = 'jary_listItem' + i ;
        
        var str_html = fnStr_getHtml ( jary_item , i ) ;
        
        ary_strBuffer.push ( str_html ) ;
      } ;
      return ary_strBuffer ;
    } ;

    arguments.callee.prototype.fnStr_prodItemHt2 = function ( jary_item , fnStr_getHtml )
    {
  
      this.ary_strBuffer = [] ;
  
      for ( 
        this.i = 0 ; 
        this.i < jary_item.length ; 
        this.i ++ 
      )
      {
        console.log ( "jary_item:" , jary_item [ this.i ] ) ;
        this.str_serhVal = 'jary_listItem' + this.i ;
        
        this.str_html = fnStr_getHtml ( jary_item , this.i ) ;
        
        this.ary_strBuffer.push ( this.str_html ) ;
      } ;
      return this.ary_strBuffer ;
    } ;

    /* this.DealSampleData1 = function () 
    {
      this.fn_getPmData = fn_getPmData ;
      this.fnStr_prodItemHt = fnStr_prodItemHt ;
      this.fnStr_prodItemHt2 = fnStr_prodItemHt2 ;
    } ;

    var dealSampleData1 = new DealSampleData1 () ; */

    arguments.callee.prototype.fn_injectPdData = function ( pm_pdData , fnStr_getHtml , jqd_listAnch )
    {
      /* var str_pgId = ''.fnStr_getHrefId () ;
      var str_iniPgCurIdxKey = str_pgId + '_curIdx' ;
      var str_iniPgCurIdx = localStorage.getItem ( str_iniPgCurIdxKey ) ; */
      /* if ( !str_iniPgCurIdx ) 
      { 
        str_iniPgCurIdx = 0 ;
        localStorage.setItem ( str_iniPgCurIdxKey , 0 ) ;
      } ; */
      
      pm_pdData.then 
      (
        function ( resolve )
        {
          console.log ( "resolve:", resolve ) ;
          var json_data = JSON.parse ( resolve ) ;
          var jary_item = json_data.jary_listItem ;
          localStorage [ 'jary_item' ] = JSON.stringify ( jary_item ) ;
 
          var pm_obs = Object.fnPm_observer ( { str_jdm : jqd_listAnch } ) ;
          console.log ( "result:" , pm_obs ) ;

          pm_obs.then 
          (
            function ( resolve )
            {

              var jqd_listAnch = $( resolve ) ;

              var str_html = DealSampleData.prototype.fnStr_prodItemHt ( jary_item , fnStr_getHtml ).join ( '' ) ;
              jqd_listAnch.html 
              ( 
                str_html
              ) ;

            } 
          ) ;

          
  
/*           document.onreadystatechange = function ( e )
          {
            if ( document.readyState == 'interactive' )
            {
              
              jqd_listAnch.html 
              ( 
                DealSampleData.prototype.fnStr_prodItemHt (  jary_item , fnStr_getHtml ).join ( '' ) 
              ) ;
              console.log ( 'this:' , this ) ;
            } ;
 
          } ; */
        } 
      ) ;
    } ;
  } ;
  
  window.DealSampleData = DealSampleData ;
  
  
  
} ( jQuery ) ;


