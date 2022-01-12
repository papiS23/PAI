<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post">
        <label>Waga: <input type="number" name="input1"></label>
        <label>Wzrost[cm]: <input type="number" name="input2"></label>
        <input type="submit" value="Licz BMI i zapisz wynik">
    </form>
    <?php
        if($_POST['input1'] == "" || $_POST['input2'] == ""){
        }else{
            $waga = (int) $_POST['input1'];
            $wzrost = (int) $_POST['input2'];
            $bmi = ($waga / ($wzrost * $wzrost))*10000;

            echo "Twoja waga: $waga; Twoj wzrost $wzrost BMI wynosi: $bmi";
        }
    ?>
    <table>
        <tr>
            <td>lp.</td>
            <td>Interpretacja</td>
            <td>Zaczyna sie od:</td>
        </tr>
        <?php
            $link = @mysqli_connect('localhost','root', '', 'egzamin');


            if(!$link){
                echo @mysqli_error($link);
            }else{
                $query = "select id, informacja, wart_min from bmi;";
                $wynik = @mysqli_query($link, $query);

                while($linia = @mysqli_fetch_row($wynik)){
                    echo "<tr><td>" .$linia[0] ."</td><td>" .$linia[1] ."</td><td>" .$linia[2] ."</td></tr>";
                }
            };
        ?>
    </table>
</body>

</html>