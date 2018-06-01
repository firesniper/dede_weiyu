+function ( $ ) 
{
 var str_footerHtml = 
     '<div class="end">'
   + '<div class="nrl fl">' 
   + '<img class= "logo_f_w" src="/XMWY/skin/img/Lignar_logo_white.png" '
   + 'alt="" oncontextmenu="return false" '
   + 'ondragstart="return false"> '
   + '<div></div> '
   + '<img src="/XMWY/skin/img/erweima.jpg" width="105" height="105" '
   + 'alt="" oncontextmenu="return false" ondragstart="return false">'
   + '<h5> 扫描二维码<br>'
   + '关注我们 </h5>'
   + '</div>'
   + '<div class="nrc fl">'
   + '<ul>'
   + '<h1><a href="/XMWY/pg_cp_zx/index.html">产品中心</a></h1>'
   + '<li><a href="/XMWY/pg_cp_zx/index.html?series=cp_zx_jd">酒店系列</a></li>'
   + '<li><a href="/XMWY/pg_cp_zx/index.html?series=cp_zx_gy">公寓系列</a></li>'
   + '<li><a href="/XMWY/pg_cp_zx/index.html?series=cp_zx_yd">移动系列</a></li>'
   + '<li><a href="/XMWY/pg_cp_zx/index.html?series=cp_zx_yy">医用系列</a></li>'
   + '<li><a href="/XMWY/pg_cp_zx/index.html?series=cp_zx_gd">高端系列</a></li>'
   + '</ul>'
   + '<ul>'
   + '<h1><a href="/XMWY/pg_ry_zz/index.html?series=ry_zz">荣誉资质</a></h1>'
   + '<li><a href="/XMWY/pg_ry_zz/index.html?series=ry_zz">荣誉资质</a></li>'
   + '<li><a href="/XMWY/pg_ry_zz/index.html?series=ry_zz_zyTd">专业团队</a></li>'
   + '</ul>'
   + '<ul>'
   + '<h1><a href="/XMWY/pg_xw_dt/index.html?series=xw_dt">新闻动态</a></h1>'
   + '<li><a href="/XMWY/pg_xw_dt/index.html?series=xw_dt_gsXw">公司新闻</a></li>'
   + '<li><a href="/XMWY/pg_xw_dt/index.html?series=xw_dt_hyDt">行业动态</a></li>'
   + '<li><a href="/XMWY/pg_xw_dt/index.html?series=xw_dt_cjWt">常见问题解答</a></li>'
   + '</ul>'
   + '<ul>'
   + '<h1><a href="/XMWY/pg_gy_wm/index.html?series=gy_wm">关于我们</a></h1>'
   + '<li><a href="/XMWY/pg_ry_zz/index.html?series=gy_wm_qyFc">企业风采</a></li>'
   + '<li><a href="/XMWY/pg_gy_wm/index.html?series=gy_wm_qyWh">企业文化</a></li>'
   + '<li><a href="/XMWY/pg_gy_wm/index.html?series=gy_wm_hzHb">合作伙伴</a></li>'
   + '<li><a href="/XMWY/pg_gy_wm/index.html?series=gy_wm_qySp">企业视频</a></li>'
   + '<li><a href="/XMWY/pg_gy_wm/index.html?series=gy_wm_scJd">生产基地</a></li>'
   + '</ul>'
   + '<ul>'
   + '<h1><a href="/XMWY/pg_gy_wm/index.html?series=gy_wm_scJd">联系我们</a></h1>'
   + '<li><a href="/XMWY/pg_gy_wm/index.html?series=gy_wm_scJd">人才招聘</a></li>'
   + '</ul>'
   + '<div class="footTxt"> Copyright © 2002-2017 某某卫浴有限公司  版权所有<br>'
   + '<a href="http://www.miitbeian.gov.cn" target="_blank">&nbsp;&nbsp;备案号：粤ICP备*********号   </a> </div>'
   + '</div>'
   + '<div class="nrr fr">'
   + '<div class="footPh"> 400-123-4567 </div>'
   + '<div class="footli">'
   + '<ul>'
   + '<li>手机：13800000000</li>'
   + '<li>传真：+86-123-4567</li>'
   + '<li>Q Q：987654321</li>'
   + '<li>邮箱：admin@baidu.com</li>'
   + '<li>地址：广东省广州市天河区88号</li>'
   + '</ul>'
   + '</div>'
   + '</div>'
   + '</div> ' ;

var str_headHtml = 
    '<div class="top">'
   + '<div class="top-ico">'
   + '<ul>'
   + ' <li>'
   + '   <a href="" class="a1">'
   + '   </a>'
   + ' </li>'
   + ' <li>'
   + '   <a href="#" class="a3"></a>'
   + ' </li>'
   + ' </ul>'
   + '</div>'
   + '<div class="logo"><a href="/XMWY"><img src="/XMWY/skin/img/Lignar_logo.png" alt="" oncontextmenu="return false" ondragstart="return false"></a></div>'
   + '<div class="phone"><img src="/XMWY/skin/img/phone.png" alt="" oncontextmenu="return false" ondragstart="return false"></div>'
   + '</div>' ;

 document.addEventListener 
 (
  'readystatechange' ,
  function ( event)
  {
    if ( document.readyState == 'complete' )
    {
      $ ( '#top' ).html ( str_headHtml ) ;
      $ ( '#end' ).html ( str_footerHtml ) ;
    }
  } 
 ) ;
} ( jQuery ) ;