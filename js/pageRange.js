
var fnAry_pageRange = function ( amount , threshold )
{
 // amount = amount ? amount : 1000 ;
 // threshold = threshold ? threshold : 5 ;
 var fnPgp_status = function ()
 {
  var val = amount % threshold ;
  var totlePgNum = Math.ceil ( amount / threshold ) ;
  var lastPgNum = 0 ;
  var firstPageNum = 0 ;
  if ( val == amount )
  {
    totlePgNum    = 1 ;
    firstPageNum  = amount ; 
    lastPgNum     = amount ;
  } 
  else if ( val == 0 )
  {
    totlePgNum   = amount / threshold ;
    firstPageNum = threshold ; 
    lastPgNum    = threshold ;
  }
  else if ( val > 1 )
  {
    totlePgNum    = Math.ceil ( amount / threshold ) ;
    firstPageNum  = threshold ; 
    lastPgNum     = amount % threshold ;
  } ;
  return {
   "firstPageNum" : firstPageNum ,
   "totlePgNum"   : totlePgNum ,
   "lastPgNum"    :  lastPgNum
  } ;
 } ;
 // var end = pgp_status.tolePgNum > 1 ? pgp_status.lastPgNum : 
 var pgp_status = fnPgp_status () ;
 var ary_pageRange = [
                  {
                   start: 0 ,
                   end : pgp_status.firstPageNum - 1
                  } 
                 ] ;
 var mount_differ = amount ;
 var mount_sum = 0 ;
 if ( pgp_status.totlePgNum > 2 )
 {
  for ( var i = 1 ; i < pgp_status.totlePgNum - 1  ; i ++ )
  {
   /* pgp = { 
    start : threshold * i ,
    end : pgp_status.lastPgNum - 1
   } ;
   if ( pgp_status.lastPgNum == threshold )
   {
     pgp.end = ( threshold  ) * ( i + 1 ) - 1
   } ; */
   pgp = { 
    start : threshold * i ,
    end : ( threshold  ) * ( i + 1 ) - 1
   } ;
   
   ary_pageRange.push ( pgp ) ;
   /* ary_pageRange [ i ][ 'start' ] = threshold * 1 ;
   ary_pageRange [ i ][ 'end' ] = ( threshold - 1 ) * 2 ; */
   /* var mount_sum = mount_sum + threshold * i ;
   if ( mount_sum <= amount )
   {
    break ;
   } ; */
  } ;
 } ;
 
 
 
 if ( pgp_status.totlePgNum > 1 ) 
 {
  ary_pageRange.push 
  (
   { 
    start : threshold * ( pgp_status.totlePgNum - 1 ) ,
    end : threshold * ( pgp_status.totlePgNum  - 1 ) + pgp_status.lastPgNum - 1
   }
  ) ;

 } ;
 return ary_pageRange ;
} ;
console.log ( "result:" , fnAry_pageRange ( 91 , 12 ) ) ;