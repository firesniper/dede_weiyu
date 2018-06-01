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
  window.fn_getPmData = function ( str_uri )
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

/*   var threshold = 12 ;
 */
  var pgp_default = 
  {
    threshold : 5 ,

  } ;
  var fnStr_prodItemHt = function ( curIdx , jary_item , fnStr_getHtml )
  {
    curIdx = curIdx ? curIdx : 0 ;
    // var jsd_product = document.querySelector ( 'ul.thumbs.product' ) ;
    var ary_strBuffer = [] ;
    var ary_pageRange = jary_item.length.fnAry_pageRange ( { 'threshold' : pgp_default.threshold } ) ;
    var pgp_curIdx = ary_pageRange [ curIdx ] ;
    if ( !pgp_curIdx ) return ;
    for ( 
      var i = pgp_curIdx [ 'start' ] ; 
      i <= ary_pageRange [ curIdx ] [ 'end' ] ; 
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
  
  var fnStr_prodPgCtrHt = function ( num_totlePg )
  {
    var str_indicateLeft = '<span class="bullet">'  ;
    var str_indicateRight =  '</span>' ;
    var str_indicate = '' ;
    if ( num_totlePg > 1 )
    {
      for ( var i = 2 ; i <= num_totlePg  ; i ++ )
      {
        str_indicate = str_indicate + str_indicateLeft + ( i  ) + str_indicateRight ;
      } ;

    } ;
    var str_html = 
     '<p class="homeBtn tBtn">首页</p>'
    + '<span class="current bullet">1</span>'
    + str_indicate
    
    + '<p class="nextBtn tBtn" href="#">下一页</p>'
    + '<p class="lastBtn tBtn" href="#">末页</p>'
     ;
    return str_html ;
  } ;
  var fnStr_prodPgCtrHt2 = function ( num_totlePg , num_record )
  {
    var str_html = 
      '<div class="jogger">'
    + '<span class="pageinfo">共 <strong>' + num_totlePg + '</strong>页'
    + '<strong>' + num_record + '</strong>条记录</span>'
    + '</div>' ;
    return str_html ;
  } ;
/*   var fn_addStrToStorage = function ( str_serhVal , index )
  {
    var str_serhVal = 'jary_listItem' + index ;
    localStorage[ str_serhVal ] = JSON.stringify ( json_data.jary_listItem [ index ] ) ;
  } ; */

  window.fn_injectPdData = function ( pm_pdData , fnStr_getHtml , bol_joggerFlag )
  {
    pm_pdData.then 
    (
      function ( resolve )
      {
        console.log ( "resolve:", resolve ) ;
        var json_data = JSON.parse ( resolve ) ;
        var jary_item = json_data.jary_listItem ;
        localStorage [ 'jary_item' ] = JSON.stringify ( jary_item ) ;
        var pgp_status = jary_item.length.fnPgp_status ( { 'threshold' : pgp_default.threshold } ) ;
        var num_totlePg = pgp_status.num_totlePg ;
        document.onreadystatechange = function ( e )
        {
          if ( document.readyState == 'complete' )
          {
            $( 'ul.thumbs.product' ).html 
            ( 
              fnStr_prodItemHt ( 0 , jary_item , fnStr_getHtml ).join ( '' ) 
            ) ;
            $( '.jogger' ).html 
            (
              function (   )
              {
                switch ( bol_joggerFlag )
                {
                  case 1 :
                    return fnStr_prodPgCtrHt ( num_totlePg ) ;
                  break ;
                  case 2 :
                    return fnStr_prodPgCtrHt2 ( num_totlePg , jary_item.length )
                  break ;
                } ;
              } (   ) 
            ) ;
            console.log ( 'this:' , this ) ;
            
            $( '.thumbs.product>li' ).click 
            (
              function ( event )
              {
                // event.preventDefault () ;
                // console.log ( "event:" ,  event ) ;
                // console.log ( $( this ) ) ;
              } 
            ) ; 
            
            /* $( '.thumbs.product>li' ).filter 
            (
              function ( index ) 
              {
                // console.log ( "this:" , $( "a" , this) ) ;
                 var str_serhVal = 'jary_listItem' + index ;
                $ ( "a" , this ).attr 
                ( 
                  "href" ,
                  "/XMWY/pg_pd_detail/index.html" + '?item=' + str_serhVal
                ) ;
                $( this ).click 
                (
                  function ( event )
                  {

                    console.log ( "index:" , json_data.jary_listItem [ index ] ) ;
                    localStorage[ str_serhVal ] = JSON.stringify ( json_data.jary_listItem [ index ] ) ;
                  }
                ) ;
              }
            ) ; */

            $( '.jogger span.bullet' ).filter
            (
              function ( index )
              {
                // $( this ).click () ;
                $( this ).click
                (
                  function ( event )
                  {
                    localStorage.setItem ( "curIdx" , index ) ;
                    $( '.jogger span.bullet' ).removeClass ( 'current' ) ;
                    $( this ).addClass ( 'current' ) ;
                    $( 'ul.thumbs.product' ).html 
                    ( 
                      fnStr_prodItemHt ( index , jary_item , fnStr_getHtml ).join ( '' ) 
                    ) ;
                  } 
                ) ;
              }
            ) ;
            
            var $span_bullet = $( '.jogger span.bullet' ) ;
            $( '.jogger p.nextBtn' ).click 
            (
              function ( e )
              {
                var str_curIdx = localStorage.getItem ( 'curIdx' ) ? localStorage.getItem ( 'curIdx' ) : 0 ;
                var num_curIdx = Math.floor ( str_curIdx ) ;
                if ( !fnStr_prodItemHt ( num_curIdx + 1 , jary_item , fnStr_getHtml ) ) return ;
                $( 'ul.thumbs.product' ).html 
                ( 
                  fnStr_prodItemHt ( num_curIdx + 1 , jary_item , fnStr_getHtml ).join ( '' ) 
                ) ;
                  
                /* $span_bullet.removeClass ( 'current' ) ;
                $span_bullet.eq ( num_curIdx + 1 ).addClass ( 'current' ) ; */
                localStorage.setItem ( 'curIdx' , num_curIdx + 1 ) ;
                $span_bullet.fn_navChangeColor ( num_curIdx + 1 , 'current' )
              }
            ) ;
            $( '.jogger p.homeBtn ' ).click 
            (
              function ( event )
              {
                $( 'ul.thumbs.product' ).html 
                ( 
                  fnStr_prodItemHt ( 0 , jary_item , fnStr_getHtml ).join ( '' ) 
                ) ;
                $span_bullet.fn_navChangeColor ( 0 , 'current' ) ;
                localStorage.setItem ( 'curIdx' , 0 ) ;
                
                /*  $span_bullet.removeClass ( 'current' ) ;
                $span_bullet.eq ( 0 ).addClass ( 'current' ) ; */
              } 
            ) ;
            $( '.jogger p.lastBtn ' ).click 
            (
              function ( event )
              {
                var num_lastIdx = $span_bullet.length - 1 ;
                $( 'ul.thumbs.product' ).html 
                ( 
                  fnStr_prodItemHt ( num_lastIdx , jary_item , fnStr_getHtml ).join ( '' ) 
                ) ;
                $span_bullet.fn_navChangeColor ( num_lastIdx , 'current' ) ;
                localStorage.setItem ( 'curIdx' , num_lastIdx ) ;
                
                /* $span_bullet.removeClass ( 'current' ) ;
                $span_bullet.eq ( $span_bullet.length - 1 ).addClass ( 'current' ) ; */
              } 
            ) ;
          }
          
          
        } ;


      } 
  
    ) ;
  } ;
  
  
  
  
} ( jQuery ) ;


+function ( fn_getPmData , fn_injectPdData )
{

  var fnStr_getHtml = function ( jary_item , i )
  {
    var str_html = 
    '<li class="anim_emt b_to_t">'
    + '<a '
    + 'href=' + jary_item [ i ].a_href +  '?jaryIdx=' + i
    + ' class="centerbox trans">'
    + '<div class="info wrap centerbox-cont anim_emt l_to_r">'
    + '<h3 class="title m-b-xs">' + jary_item [ i ].pd_name + '</h3>'
    + '<!--<p class="cn"></p>-->' 
    + '<span class="view">VIEW DETAILS<i class="icon-arrow-right"></i></span> </div>'
    + '<div class="pic centerbox-cont anim_emt r_to_l">'
    + '<img src="' + jary_item [ i ].img_src + '" oncontextmenu="return false" ondragstart="return false">'
    + '</div>'
    + '</a>'
    + '</li>' ;
    return str_html ;
  } ;

  var pm_pdData = fn_getPmData ( "/XMWY/data/data_chanpinzhongxin.js" ) ;
  fn_injectPdData ( pm_pdData , fnStr_getHtml , 1 , $( 'ul.thumbs.product' ) ) ;

} ( fn_getPmData , fn_injectPdData ) ;
