<?php
$servername = "MariaDB-11.2";
$username = "root";
$password = "";
$dbname = "oleg-magaz";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   // echo "Подключение к базе данных успешно";
} catch(PDOException $e) {
    echo "" . $e->getMessage();
}

header('Content-Type: application/json');

$cat = 'rezina';
//$stmt = $conn->query("SELECT * FROM goods");
$stmt = $conn->query("SELECT * FROM goods WHERE category = '$cat'");
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);
?>
