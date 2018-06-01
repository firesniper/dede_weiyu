+function ( DealSampleData )
{

  var fnStr_getHtml = function ( jary_item , i )
  {
    var str_html = 
 
      '<li style="float: left; width: 269px;">' 
    + '<a href="' + jary_item [ i ].a_href + '?jaryIdx=' + i + '">' 
    + '<img src="' + jary_item [ i ].img_src + '" ' 
    + 'alt="' + jary_item [ i ].str_tit + '" width="269" height="158" '
    + 'oncontextmenu="return false" ondragstart="return false">'
    + '<h6>' + jary_item [ i ].str_tit + '</h6>' 
    + '</a>'
    + '</li>' ;

    return str_html ;

  } ;

  var dealSampleData = ( new DealSampleData () ) ;
  var pm_pdData = dealSampleData.fn_getPmData ( "/XMWY/data/data_cg_al.js" ) ;
  dealSampleData.fn_injectPdData ( pm_pdData , fnStr_getHtml , 'ul.tempBox' ) ;

  
} ( DealSampleData ) ;



+function ( DealSampleData )
{

  var fnStr_getHtml = function ( jary_item , i )
  {
    var str_html = 
      '<li>'
    + '<a href="' + jary_item [ i ].a_href + '?jaryIdx=' + i + '">'
    + jary_item [ i ].str_tit
    + '<span class="fr">' + jary_item [ i ].str_data + '</span>'
    + '</a>'
    + '</li>' ;

    return str_html ;

  } ;

  var dealSampleData2 = (new DealSampleData()) ;
  var pm_pdData2 = dealSampleData2.fn_getPmData ( "/XMWY/data/data_xw_dt.js" ) ;
  dealSampleData2.fn_injectPdData ( pm_pdData2 , fnStr_getHtml , '.newsTxt ul' ) ;
  
} ( DealSampleData ) ;


+function ( DealSampleData )
{

  var fnStr_getHtml = function ( jary_item , i )
  {
    var str_html = 
     '<li style="position: relative; overflow: hidden; float: left;">'
   + '<a href="' + jary_item [ i ].a_href + '?jaryIdx=' + i + '">'
   + '<img width="186" height="94" alt="' + jary_item [ i ].str_tit
   + '" src="' + jary_item [ i ].img_src + '" oncontextmenu="return false" ondragstart="return false">'
   + '</a>'
   + '</li>' ;
    return str_html ;

  } ;

  var dealSampleData2 = (new DealSampleData()) ;
  var pm_pdData2 = dealSampleData2.fn_getPmData ( "/XMWY/data/data_ry_zz_hzHb.js" ) ;
  dealSampleData2.fn_injectPdData ( pm_pdData2 , fnStr_getHtml , '.scrollleft ul' ) ;
  
} ( DealSampleData ) ;


