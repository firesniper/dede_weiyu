$.fn.fn_navChangeColor = function 
(  
  num_curIdx ,  str_curCls
)
{
    // console.log ( 'this:' , this ) ;
    this.removeClass ( str_curCls ) ;
    this.eq ( num_curIdx ).addClass ( str_curCls ) ;
} ;