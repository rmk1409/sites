<?php
    $mysqli = new mysqli("localhost", "root", "1234", "mybd");
    if ($mysqli->connect_errno) {
        echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    
    $mysqli->set_charset("utf8");
    
    if($_POST['send']){
        
        $author = $_POST['name'];
        $text = $_POST['msg'];
        $date = $_POST['date'];
        $time = $_POST['time'];
        
        $mysqli->query("INSERT INTO comment(author,text,date,time) VALUES ('$author','$text','$date','$time')");
        header('Location:gb.php');
    }
?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Гостевая книга</title>
</head>
<body>
    <h1>Гостевая книга</h1>
    <p>Оставьте мне здесь какое-нибудь сообщение. Пару ласковых или неласковых слов =)</p>
    <form method="post" action="gb.php">
        name:<br />
        <input type="text" name="name"/><br />
        msg:<br />
        <textarea name="msg" cols="40" rows="5"></textarea><br />
        <input type="hidden" name="date" value="<?php echo date('Y-m-d')?>"/>
        <input type="hidden" name="time" value="<?php echo date('H:i:s', strtotime("+3 hours"))?>"/>
        <input type="submit" name="send"/>
    </form>
    <?php
        $id = $_GET['id']?$_GET['id']:0;
        $count = 5;
        
        $result = $mysqli->query("SELECT * FROM comment ORDER BY id DESC LIMIT $id, $count");
        
        while($row = $result->fetch_assoc()){
    ?>
        <p><?php echo $row['author']?> : <?php echo $row['text']?></p>
        
        <p><?php echo $row['time']."/".$row['date']?></p>
        <hr />
    <?php        
        }
        $result = $mysqli->query("SELECT * FROM comment");
        
        for($i=0, $all=ceil($result->num_rows/$count); $all == 1 or $i != $all; $i++){
    ?>   
        <a href="gb.php?id=<?php echo ($i*$count);?>"><?php echo $i+1; ?></a>
    <?php     
        }
    ?>
</body>
</html>