<?php

//print_r($_GET); // Array ( [route] => roliki )
// print_r($_GET['route']); // roliki

$route = $_GET['route'] ?? '';

// require 'templates/header.php';


switch ($route) {
    case '';
        require 'templates/home.php';
        break;
    case 'cart';
        require 'templates/cart.php';
        break;
    case $route;
        require 'templates/category.php';
        break;    
}


// require 'templates/footer.php';