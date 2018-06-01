+function ( fnPgp_getStoData , fn_injectData )
{
  // var pgp_item = fnPgp_getStoData ( 'jary_item' , 'jaryIdx' ) ;
  
  var fnStr_getHtml = function ( pgp_item ) 
  {
    var str_html = 
    /*'<div style="text-align: center;">'
  + '<img alt="" '
  + 'src="' + pgp_item.img_src + '" '
  + 'style="width: 489px; height: 364px;" '
  + 'oncontextmenu="return false" ondragstart="return false">'
  + '</div>' ; */
    '<h1 class="m-b-md anim_emt scale_blur">CASE</h1>'
  + '<div class="news_tit_u">' + pgp_item.str_tit + '</div>'
  + '<div class="news_t_d">'
  + '<span class="news_user">admin </span>'
  + '<span class="show_t">2017-08-05</span>'
  + '<span class="to_look">'
  + '     140次'
  + '  </span>'
  + '  <div class="back" style="display: block;">'
  + '    <a href="/XMWY/pg_hz_hb/index.html">返回</a>'
  + '  </div>'
  + '</div><!-- news_t_d end -->'
  + '<div class="news_main">'
  + '  <div style="text-align: center;">'
  + '    <img alt="" src="' + pgp_item.img_src + '" style="width: 489px; height: 364px;" oncontextmenu="return false" ondragstart="return false">'
  + '  </div> '
  + ' </div><!-- news_main end -->' ;
  return str_html ;
} ;
   


 
 
 fn_injectData ( fnStr_getHtml , $ ( '.container' ) ) ;

} ( fnPgp_getStoData , fn_injectData ) ;




