<html xmlns="http://www.w3.org/1999/xhtml" style="" class="js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths chrome"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="author" content="order by dede58.com/">
    <title>琳颛贸易 首页</title>
    <head>
      <title>tough first script </title>
    </head>
    <body>
      <h1>
        the very first script 
      </h1>
      <p>
        this is the first script！
      </p>
     
       <?php
        echo "this is PHP code" . "<br/>"  ;
        $monkeys = 10 ;
        echo "Number of monkeys： " . $monkeys . "<br/>"  ;

        $cds = 50 ;
        $taps = 60 ;

        $total = $cds + $taps   ;
        echo "you have " . $cds . " cds and " . $taps  . " tapes with " . $total . " items!" . "<br/>"  ; 

        $stories = 43 ;
        $pagesize = 8 ;

        $pages = $stories / $pagesize  ;
        echo "you will need " . $pages . " pages" . "<br/>" ;
        echo "round down:" . floor ( $pages ) . "round up:" . ceil ( $pages ) . "<br/>"   ;

        $arr [ 'Color' ] = 'Blue' ;
        $arr [ 'Food' ] = 'Mexican' ;
        $arr = array ( 'Color' => 'Blue' , "Food" => 'Mexican' ) ; 

        echo '$arr:' . $arr [ 'Color' ] . "<br/>"   ; 

        for ( $i = 1 ; $i < 10 ; $i ++ )
        {
          echo $i . '<br />' ;
        } ;

        $age = 1 ;
        while ( $age < 18 ) 
        {
          echo 'You are age ' . $age . " and still not an adult" ."<br/>" ;
          $age ++ ;
        } ;
        echo 'you are now an adult!' ; 


       ?>
    <form action= 'form1.php' method= 'post' >
        username <input type= "text" name="username" ><br />
        password <input type= "password" name="password" ><br/>
        <input type= "submit" name= "submitbutt" value= "Login!"><br/>
    </form>

    </body>
 </html>