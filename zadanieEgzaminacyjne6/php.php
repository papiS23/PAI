<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="get">
        <input type="date" name="input1">
        <input type="date" name="input2">
        <input type="submit" value="porównaj">
    </form>
</body>
<?php
$input1 = $_GET['input1'];
$input2 = $_GET['input2'];
$now = date("d-m-y");

$result = round((strtotime($input2) - strtotime($input1)) / (60*60*24));

if ($result>10 and $result<20){
    echo($result." - OK");
}elseif($result>=20 and $result<=50){
    echo($result." - Super");
}elseif($result>50){
    echo($result." - Rewelacyjnie");
}

$connection = mysqli_connect('localhost', 'root', '', 'zadaniejsphp');

// if(!$connection){
//     echo "<br>";
//     echo("Connection failed");
// }else{
//     echo "<br>";
//     echo("git");
// }

$query = "INSERT INTO daty(data_wpisu, data1, data2, operacja) VALUES('$now', '$input1', '$input2','$result')";
mysqli_query($connection,$query);

?>
</html>