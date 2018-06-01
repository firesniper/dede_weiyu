if (!Object.assign) 
{
    // 定义assign方法
  Object.defineProperty
  (
    Object, 'assign', 
    {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function ( target ) 
      { // assign方法的第一个参数
        'use strict';
        // 第一个参数为空，则抛错
        if (target === undefined || target === null) 
        {
          throw new TypeError('Cannot convert first argument to object');
        }

        var to = Object(target);
        // 遍历剩余所有参数
        for (var i = 1; i < arguments.length; i++) 
        {
          var nextSource = arguments[i];
          // 参数为空，则跳过，继续下一个
          if (nextSource === undefined || nextSource === null) {
            continue;
          }
          nextSource = Object(nextSource);

          // 获取改参数的所有key值，并遍历
          var keysArray = Object.keys(nextSource);
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            // 如果不为空且可枚举，则直接浅拷贝赋值
            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
        return to;
      }
    }
  ) ;
} ;

Object.defineProperties 
(
  String.prototype ,
  {
    fnStr_getHrefId : 
    {
      enumerable : false ,
      configurable : true ,
      writable : false ,
      value : function ( str_href )
      {
        var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
        var str_href = pgp_args && pgp_args.str_href ? pgp_args.str_href : this.length != 0 ? this : location.href ;
        var _this = str_href ? str_href : this ;
        var ary_reg = str_href.match ( /\/{1,2}[^/]*/ig ) ;
        var ary_regRes = ary_reg [ ary_reg.length - 2 ] ; 
        return ary_regRes.substr ( 1 , ary_regRes.length ) ;
      }
    } ,
    fnJary_serhStrToJson :
    {
      enumerable : false ,
      configurable :true ,
      writable : true ,
      value : function ( str_serh )
      {
        var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
        var _this = str_serh ? str_serh : this.length != 0 ? this : location.search ? location.search : "" ;
        // _this = "?a=1&b=2&c=3&d=4" ;
        var str_sech = _this.match (/[^?]{1,}/ig) [ 0 ] ;
        var ary_sech = str_sech.split ( "&" ) ;
        var ary_new = [] ;
        for ( var i = 0 ; i < ary_sech.length ; i ++ )
        {
          var ary_paire = ary_sech [ i ].split ( "=" ) ;
          var pgp_obj = {} ;
          pgp_obj [ ary_paire [ 0 ] ] = ary_paire [ 1 ] ;
          ary_new.push ( pgp_obj ) ;
        } ;
        console.log ( "ary_new:" , ary_new ) ;
        return ary_new ;
      } 
    } ,
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
      if ( str_serh == "" ) return false ;
      // var str_serh = str_serh.substr ( 1 , str_serh.length ) ;
      var str_serh = str_serh.match ( /[^?]{1,}$/ig ) [ 0 ] ;

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
  String.prototype ,
  {
    'fnStr_parseParams' :
    {
      enumerable : false ,
      configurable : true ,
      writable : true ,
      value : function ( pgp_args )
      {
        var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
        var str_href = this.length != 0 ? this : "undefined" ;
        var str_serhKey = pgp_args && pgp_args.str_serhKey ? pgp_args.str_serhKey : "series" ;
        var str_href2 = pgp_args && pgp_args.str_serhHref ? pgp_args.str_serhHref : location.href ;
        var str_parentHref = str_href.match ( /^[^?]{1,}/ig ) [ 0 ] ;
        var str_parentPath = str_parentHref.slice ( 0 , -3 ) ;
        var pgp_serh = str_href2.fnPgp_cvtSerh () ;
        var str_serhVal = pgp_serh && pgp_serh [ str_serhKey ] ? "_" + pgp_serh [ str_serhKey ] : "" ;
        // var str_result = str_parentPath + str_serhVal + '.js' ;
        var str_result = '/XMWY/data/data' + str_serhVal + '.js' ;
        return str_result ;
      
      } 
    }
  }
) ;
Object.defineProperties 
(
  String.prototype ,
  {
    fnPm_getData :
    {
      enumerable : false ,
      configurable : true ,
      writable : true ,
      value : function ( pgp_args )
      {
        var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
        var str_uri = pgp_args && pgp_args.str_uri ? pgp_args.str_uri : this.length != 0 ? this : '' ; 
        
        var pm01 = new Promise 
        (
          function ( resolve , rejected )
          {
            $.getJSON
            (
              str_uri , 
              function ( data )
              {
                console.log ( "data:" , data ) ;
                var str_data = JSON.stringify ( data ) ;
                resolve ( str_data ) ;
              }
            ) ;
          }
        ) ;
        return pm01 ;
      } 
    } ,
    fnPm_getDataParseParams :
    {
      enumerable : false ,
      configurable : true ,
      writable : true ,
      value : function ( pgp_args )
      {
        var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
        var str_uri = pgp_args && pgp_args.str_uri ? pgp_args.str_uri : this.length != 0 ? this : '' ; 
        var str_serhKey = pgp_args && pgp_args.str_serhKey ? pgp_args.str_serhKey : 'series' ;
        var str_uri2 = str_uri.fnStr_parseParams 
        ( 
          {
            str_serhKey : str_serhKey
          } 
        ) ;
        var pm01 = new Promise 
        (
          function ( resolve , rejected )
          {
            $.getJSON
            (
              str_uri2 , 
              function ( data )
              {
                console.log ( "data:" , data ) ;
                var str_data = JSON.stringify ( data ) ;
                resolve ( str_data ) ;
              }
            ) ;
          }
        ) ;
        return pm01 ;
      } 
    }
  } 

) ;
Object.defineProperties
(
  Array.prototype ,
  {
    fn_random : {
      configurable : true ,
      enumerable : true ,
      writable : true ,
      value : function () 
      {
        var input = this;
        for ( var i = input.length - 1 ; i >= 0 ; i-- ) 
        {
          var randomIndex = Math.floor ( Math.random () * ( i + 1 ) ) ;
          var itemAtIndex = input [ randomIndex ] ;
          input [ randomIndex ] = input [ i ] ;
          input [ i ] = itemAtIndex ;     
        }
          return input;
      }
    }
  }
) ;

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
       else if ( remainder >= 1 )
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
    } ,
    fnPgp_numState : 
    {
      enumerable : false ,
      configurable : true ,
      writable : false ,
      value : function ( pgp_args )
      {
        var pgp_args = Array.prototype.slice.call ( arguments ) [ 0 ] ;
        var pgp_opt_cum = pgp_args.pgp_opt_cum ? pgp_args.pgp_opt_cum : {} ;

        var pgp_opt_def = {
          bol_loop : true , 
          num_minBound : 0
        } ;
        var pgp_opt = Object.assign ( pgp_opt_def , pgp_opt_cum ) ;
        var _this = Math.ceil ( this ) ;
        var curIdx = pgp_args.curIdx ? pgp_args.curIdx : 0 ;
        var amount = pgp_args.amount ? pgp_args.amount : _this ? _this : 0 ;
        var num_pre = 0 ;
        var num_deff = amount + 1 ;
        var num_next = 0 ;
        if ( curIdx > pgp_opt.num_minBound && curIdx < amount ) 
        {
          num_pre = curIdx - 1 ;
          num_next = curIdx + 1 ;
        }
        else if ( pgp_opt.bol_loop ) 
        {
          
          if ( curIdx == pgp_opt.num_minBound ) 
          {
            num_pre = amount ;
            num_next = curIdx + 1 ;
          }
          else if ( curIdx == amount ) 
          {
            num_pre = curIdx - 1 ;
            num_next = pgp_opt.num_minBound ;
          } ; 
        }
        else
        {
          if ( curIdx == pgp_opt.num_minBound ) 
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
              resolve ( str_jdm ) ;
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
                    resolve ( str_jdm ) ;
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

