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
    '<li class="anim_emt b_to_t">'
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
    + '</li>' ;
    return str_html ;
  } ;

  var pm_pdData = fn_getPmData ( "/XMWY/data/data_zy_td.js" ) ;
  fn_injectPdData ( pm_pdData , fnStr_getHtml , 1 , $( 'ul.thumbs.product' ) ) ;

} ( fn_getPmData , fn_injectPdData ) ;