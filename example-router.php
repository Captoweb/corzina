<?php

// print_r($_GET); // Array ( [route] => www )

$route = $_GET['route'] ?? '';

require 'templates/header.php';


switch ($route) {
    case '';
        require 'templates/main.php';
        break;
    case 'cart';
        require 'templates/cart.php';
        break;
    case 'fum';
        require 'templates/category.php';
        break;    
    case 'roliki';
        require 'templates/category.php';
        break; 
    case 'rezina';
        require 'templates/category.php';
        break;    
    case 'bidon';
        require 'templates/category.php';
        break; 
    case 'smazka';
        require 'templates/category.php';
        break;   
    case 'homuty';
        require 'templates/category.php';
        break;   
    case 'krepezh';
        require 'templates/category.php';
        break;  
    case 'paronit';
        require 'templates/category.php';
        break;  
    case 'procladki_rezina';
        require 'templates/category.php';
        break;  
    case 'silikon';
        require 'templates/category.php';
        break;  
    case 'amerikanka';
        require 'templates/category.php';
        break;   
    case 'procladki_smesitel';
        require 'templates/category.php';
        break; 
}


require 'templates/footer.php';