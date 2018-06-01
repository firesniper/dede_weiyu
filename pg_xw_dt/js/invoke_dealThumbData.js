/* +function ( fn_getPmData , fn_injectPdData )
{
 var pm_pdData = fn_getPmData ( "/XMWY/data/data_anli.js" ) ;
 fn_injectPdData ( pm_pdData ) ;

} ( fn_getPmData , fn_injectPdData ) ; */

+function ( fn_getPmData , fn_injectPdData )
{

  var fnStr_getHtml = function ( jary_item , i )
  {
    var str_html = 
    /* '<li class="anim_emt b_to_t">'
    + '<a '
    + 'href=' + jary_item [ i ].a_href +  '?jaryIdx=' + i
    + ' class="centerbox trans">'
    + '<div class="info wrap centerbox-cont anim_emt l_to_r">'
    + '<h3 class="title m-b-xs">' + jary_item [ i ].str_tit + '</h3>'
    + '<!--<p class="cn"></p>-->' 
    + '<span class="view">VIEW DETAILS<i class="icon-arrow-right"></i></span> </div>'
    + '<div class="pic centerbox-cont anim_emt r_to_l">'
    + '<img src="' + jary_item [ i ].img_src + '" oncontextmenu="return false" ondragstart="return false">'
    + '</div>'
    + '</a>'
    + '</li>' ; */

    '<li class="m-b-md anim_emt b_to_t_scale animation-triggered start-animation">'
    + '<a href="' + jary_item [ i ].a_href + '?jaryIdx=' + i + '"'  
    + ' class="trans" data-postid="1363">'
    + '  <div class="pic coverbg" ' 
    + '  style="background-image:url(' + jary_item [ i ].img_src + ')">'
    + '    <img src="' + jary_item [ i ].img_src + '" ' 
    + ' oncontextmenu="return false" ondragstart="return false">'
    + '  </div>'
    + '  <div class="info wrap">'
    + '    <h6 class="date c-gray m-b-xs">2017-07-25</h6>'
    + '    <h4 class="title cn">' + jary_item [ i ].str_tit + '</h4>'
    + '    <span class="view m-t-md">VIEW DETAILS<i class="icon-arrow-right"></i></span>'
    + '  </div>'
    + '  </a>'
    + '</li>' ;

    return str_html ;
  } ;

  var pm_pdData = fn_getPmData ( "/XMWY/data/data_xw_dt.js" ) ;
  fn_injectPdData ( pm_pdData , fnStr_getHtml , 1 , $( 'ul.thumbs' ) ) ;
  document.addEventListener 
  (
    'readystatechange' ,
    function ( e )
    {
      if ( document.readyState == 'complete' )
      {
        // var jqd_subNav = $( '.bottom-nav li a' )  ;
        var jqd_subNav = document.querySelectorAll ( '.bottom-nav li a' ) ;
        var ary_uri  = [
          "/XMWY/data/data_xw_dt_gsXw.js" ,
          "/XMWY/data/data_xw_dt_hyDt.js" ,
          "/XMWY/data/data_xw_dt_cjWt.js" 
        ] ;

        $.each
        (
          jqd_subNav ,
          function ( index )
          {
            $( this ).click
            (
              function ( event )
              {
                event.preventDefault () ;
                var pm_pdData2 = ary_uri [ index  ] .fnPm_getData 
                ( 
                   
                ) ;
                fn_injectPdData ( pm_pdData2 , fnStr_getHtml , 1 , $( 'ul.thumbs.product' ) ) ;
              }
            ) ;
          }
        ) ;
        

      } ;

    }
  ) ;
} ( fn_getPmData , fn_injectPdData ) ;