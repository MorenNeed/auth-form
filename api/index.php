<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require (dirname(__FILE__) . DIRECTORY_SEPARATOR . 'autoload.php');

    $router = new Router();

    $router->get($_SERVER["REQUEST_METHOD"]);
?>