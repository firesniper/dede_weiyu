+function ( fn_getPmData , fn_injectPdData , $ )
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
/*   var str_href = "/XMWY/data/data_cp_zx.js".fnStr_parseParams 
  ( 
    {
      str_serhHref:location.href
    } 
  ) ; */
  var pm_pdData = "/XMWY/data/data_cp_zx.js".fnPm_getDataParseParams 
  ( 
    {
      str_serhKey : 'series'
    }
  ) ;
  fn_injectPdData ( pm_pdData , fnStr_getHtml , 1 , $( 'ul.thumbs.product' ) ) ;

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
          "/XMWY/data/data_cp_zx_jd.js" ,
          "/XMWY/data/data_cp_zx_gy.js" ,
          "/XMWY/data/data_cp_zx_yd.js" ,
          "/XMWY/data/data_cp_zx_yy.js" ,
          "/XMWY/data/data_cp_zx_gd.js" 
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

} ( fn_getPmData , fn_injectPdData , jQuery ) ;