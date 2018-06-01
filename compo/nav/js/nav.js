+function ( $ ) 
{
  var str_navHtml = 
  '<ul>'
  + '<li><a href="/XMWY/index.html" class="cur">首页</a><span></span> </li>'
  + '<li><a href="/XMWY/pg_cp_zx/index.html?series=cp_zx_gd" class="">产品中心</a><span></span> </li>'
  + '<li><a href="/XMWY/pg_cg_al/index.html?series=cg_al" class="">成功案例</a><span></span> </li>'
  + '<li><a href="/XMWY/pg_kh_pj/index.html?series=kh_pj" class="">客户评价</a><span></span> </li>'
  + '<li><a href="/XMWY/pg_ry_zz/index.html?series=ry_zz" class="">荣誉资质</a><span></span> </li>'
  + '<li><a href="/XMWY/pg_xw_dt/index.html?series=xw_dt" class="">新闻动态</a><span></span> </li>'
  + '<li><a href="/XMWY/pg_gy_wm/index.html" class="">关于我们</a><span></span> </li>'
  + '<li><a href="/XMWY/pg_lx_wm/index.html" class="">联系我们</a><span></span> </li>'
  + '</ul>' ;
  window.insertNavHtml = function ()
  {
    $( '.nav' ).html ( str_navHtml ) ;
  } ;
  $(
    function ()
    {
      $('.nav li').hover
      (
        function ()
        {
          $('span',this).stop().css ( 'height' , '2px' ) ;
          $('span',this).animate
          (
            {
              left:'0',
              width:'100%',
              right:'0'
            } , 200 
          ) ;
        } ,
        function ()
        {
          $('span',this).stop().animate
          (
            {
              left:'50%',
              width:'0'
            } , 200
          ) ;
        }
      ) ;
    }
  ) ;

  document.addEventListener 
  (
    "readystatechange" ,
    function ( event )
    {
      if ( document.readyState == 'complete' )
      {
        var jqd_nav_a = $( '.nav li a' ) ;
        jqd_nav_a.removeClass ( "cur" ) ;
        
        var pageUrlId = location.href.fnStr_getHrefId ( ) ;
        console.log ( "pageUrlId:" , pageUrlId ) ;
        var changeActCur = function ()
        {
          jqd_nav_a.filter 
          (
            function ( index )
            {
              var str_href = jqd_nav_a [ index ].href ;
              var str_aHrefId = str_href.fnStr_getHrefId ( ) ;
              var str_locationHrefId = location.href.fnStr_getHrefId ( ) ;
              console.log ( "index:" , this   ) ;
              if ( str_aHrefId == str_locationHrefId ) 
              {
                $( this ).addClass ( 'cur' ) ;
              }
            }
          ) ;
        } ;
        changeActCur () ;

        function headscroll()
        {
          var px=$(window).scrollTop();
          if(px>115){
              $("#nav2").stop().animate({height:45},500);
          }else{
              $("#nav2").stop().animate({height:0},500);
          }
        }
        $(window).scroll(function(){headscroll();});
      } ;
    } 
  ) ; 
  
  
} ( jQuery )
