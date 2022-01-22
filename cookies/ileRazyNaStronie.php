<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        <?php
            if(isset($_COOKIE['ileRazyNaStronie'])){
                echo "Odwiedziles strone " .$_COOKIE['ileRazyNaStronie']+1 ." razy.";
                setcookie('ileRazyNaStronie',$_COOKIE['ileRazyNaStronie']+1, time()+24*3600);
            }else{
                setcookie('ileRazyNaStronie',1, time()+24*3600);
                echo "Odwiedziles strone pierwszy raz";
            }
        ?>
    </h1>
</body>
</html>