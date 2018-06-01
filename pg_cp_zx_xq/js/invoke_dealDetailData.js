+function ( fnPgp_getStoData , fn_injectData )
{

  var fnStr_getHtml = function ( pgp_item )
  {
    var str_html = 
    '<div class="ProIn_pic">'
   + '<img src="' + pgp_item.img_src + '"' 
   + 'alt="' + pgp_item.pd_name + '" oncontextmenu="return false"' 
   + 'ondragstart="return false">'  
   + '</div>'
   + '<div class="food_name">' + pgp_item.pd_name + '</div>'
   + '<div id="newsContent">'
   + '<p class="xxsmys">'
   + '<span class="xxsmwz">详细说明：</span>'
   + '</p>'
   + pgp_item.detail ;
   + '</div>' ;
    return str_html ;
  } ;
 
 
 fn_injectData ( fnStr_getHtml , $ ( 'section.container.productInfo' ) ) ;

} ( fnPgp_getStoData , fn_injectData ) ;