<?php
// api/nominations/read_one.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../database.php';
include_once '../../Nomination.php';

$database = new Database();
$db = $database->getConnection();
$nomination = new Nomination($db);

$nomination->id = isset($_GET['id']) ? $_GET['id'] : die();

if($nomination->readOne()) {
    $nomination_arr = array(
        "id" =>  $nomination->id,
        "category" => $nomination->category,
        "nominee_name" => $nomination->nominee_name,
        "nominee_email" => $nomination->nominee_email,
        "nominee_phone" => $nomination->nominee_phone,
        "nominee_institution" => $nomination->nominee_institution,
        "nominator_name" => $nomination->nominator_name,
        "nominator_email" => $nomination->nominator_email,
        "nominator_phone" => $nomination->nominator_phone,
        "justification" => $nomination->justification,
        "created_at" => $nomination->created_at
    );

    http_response_code(200);
    echo json_encode($nomination_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "Nomination does not exist."));
}
?>