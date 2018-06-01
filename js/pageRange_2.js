Object.defineProperties
(
  Number.prototype ,
  {
    fnPgp_status :
    {
      enumerable : false ,
      configurable : true ,
      writable : true ,
      value : function  ( pgp_args )
      {
       var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
       var amount = pgp_args.amount ? pgp_args.amount : this ;
       var threshold = pgp_args.threshold
       var remainder = amount % threshold ;
       var num_totlePg = Math.ceil ( amount / threshold ) ;
       var num_lastPg = 0 ;
       var num_firstPage = 0 ;
       if ( remainder == amount )
       {
         num_totlePg    = 1 ;
         num_firstPage  = amount ; 
         num_lastPg     = amount ;
       } 
       else if ( remainder == 0 )
       {
         num_totlePg   = amount / threshold ;
         num_firstPage = threshold ; 
         num_lastPg    = threshold ;
       }
       else if ( remainder > 1 )
       {
         num_totlePg    = Math.ceil ( amount / threshold ) ;
         num_firstPage  = threshold ; 
         num_lastPg     = amount % threshold ;
       } ;
       return {
        "num_firstPage" : num_firstPage ,
        "num_totlePg"   : num_totlePg ,
        "num_lastPg"    :  num_lastPg
       } ;
      } 
    }
    
  }
) ;
Object.defineProperties
(
  Number.prototype ,
  {
    fnAry_pageRange :
    {
      enumerable : false ,
      configurable : true ,
      writable : true ,
      value :  function ( pgp_args )
      {
       var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
       var amount = pgp_args.amount ? pgp_args.amount : this ;
       var threshold = pgp_args.threshold ;
      //  amount = this ? this : 1000 ;
       // threshold = threshold ? threshold : 5 ;
       
       // var end = pgp_status.tolePgNum > 1 ? pgp_status.num_lastPg : 
       var pgp_status = amount.fnPgp_status ( { 'threshold' : threshold } ) ;
       var ary_pageRange = [
                        {
                         start: 0 ,
                         end : pgp_status.num_firstPage - 1
                        } 
                       ] ;
       var mount_differ = amount ;
       var mount_sum = 0 ;
       if ( pgp_status.num_totlePg > 2 )
       {
        for ( var i = 1 ; i < pgp_status.num_totlePg - 1  ; i ++ )
        {
         /* pgp = { 
          start : threshold * i ,
          end : pgp_status.num_lastPg - 1
         } ;
         if ( pgp_status.num_lastPg == threshold )
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
       
       
       
       if ( pgp_status.num_totlePg > 1 ) 
       {
        ary_pageRange.push 
        (
         { 
          start : threshold * ( pgp_status.num_totlePg - 1 ) ,
          end : threshold * ( pgp_status.num_totlePg  - 1 ) + pgp_status.num_lastPg - 1
         }
        ) ;
      
       } ;
       return ary_pageRange ;
      } 
    }
  }
) ;
console.log ( "result:" , new Number( 91 ).fnPgp_status ( { 'threshold' : 12 } ) ) ;
console.log ( "result:" , new Number( 91 ).fnAry_pageRange ( { 'threshold' : 12 } ) ) ;

Object.defineProperties
(
 String.prototype ,
 {
  fnPgp_cvtSerh :
  {
   enumerable : false ,
   configurable : true ,
   writable  : true ,
   value : function ( pgp_args )
   {
    var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
    var str_serh = 
                    pgp_args && pgp_args.str_serh ? pgp_args.str_serh : 
                    this.length != 0 ? this : 
                    location.search ? location.search : 
                    "" ;
    var str_serh = str_serh.substr ( 1 , str_serh.length ) ;
    var ary_sech = str_serh.split ( "&" ) ;
    var pgp_new = {} ;
    for ( var i = 0 ; i < ary_sech.length ; i ++ )
    {
      var ary_paire = ary_sech [ i ].split ( "=" ) ;
      var pgp_obj = {} ;
      pgp_obj [ ary_paire [ 0 ] ] = ary_paire [ 1 ] ;
      Object.assign ( pgp_new , pgp_obj ) ;
    } ;
    console.log ( "pgp_new:" , pgp_new ) ;
    return pgp_new ;
   }
  }
 }
) ;
Object.defineProperties
(
  Number.prototype ,
  {
    fnPgp_numState : 
    {
      enumerable : false ,
      configurable : true ,
      writable : false ,
      value : function ( pgp_args )
      {
        var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
        var pgp_def = {
          bol_loop : true 
        } ;
        var _this = Math.ceil ( this ) ;
        var curIdx = pgp_args.curIdx ? pgp_args.curIdx : 0 ;
        var amount = pgp_args.amount ? pgp_args.amount : _this ? _this : 0 ;
        var num_pre = 0 ;
        var num_deff = amount + 1 ;
        var num_next = 0 ;
        if ( curIdx > 0 && curIdx < amount ) 
        {
          num_pre = curIdx - 1 ;
          num_next = curIdx + 1 ;
        } ;
        if ( pgp_def.bol_loop ) 
        {
          
          if ( curIdx == 0 ) 
          {
            num_pre = amount ;
            num_next = curIdx + 1 ;
          }
          else if ( curIdx == amount ) 
          {
            num_pre = curIdx - 1 ;
            num_next = 0 ;
          } ; 
        }
        else
        {
          if ( curIdx == 0 ) 
          {
            num_pre = null ;
            num_next = curIdx + 1 ;
          } 
          else if ( curIdx == amount ) 
          {
            num_pre = curIdx - 1 ;
            num_next = null ;
          } ; 
        } ;

        return {
          'num_pre'  : num_pre ,
          'num_next' : num_next
        } ;
      }
    }
  }
) ;
Object.defineProperties 
(
  Object ,
  {
    fnPm_observer :
    {
      enumerable : false ,
      configurable : true ,
      writable : true ,
      value : function ( pgp_args )
      {
        // console.log ( this.__proto__.constructor.name ) ;
        var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
        var _this = this ;
        var str_jdm = pgp_args.str_jdm ;
        var jdm = pgp_args && pgp_args.jdm ? pgp_args.jdm : document.querySelector ( str_jdm ) ;
        var pm_a01 = new Promise 
        (
          function ( resolve , reject )
          {
            if ( jdm ) 
            {
              resolve ( jdm ) ;
              return pm_a01 ;
            }
            else 
            {
              var st01 = window.setInterval 
              (
                function ()
                {
                  jdm = document.querySelector ( str_jdm ) ;
                  if ( jdm ) 
                  {
                    clearInterval ( st01 ) ;
                    console.log ( "resolve:true" ) ;
                    resolve ( jdm ) ;
                    return pm_a01 ;
                  }
                } ,
                100
              ) ; 
    
            } ;
            
          } 
        ) ;
        
        return pm_a01 ;
      }
    }
  }
) ;