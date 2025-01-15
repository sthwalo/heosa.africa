<?php
// api/nominations/update.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../database.php';
include_once '../../Nomination.php';

$database = new Database();
$db = $database->getConnection();
$nomination = new Nomination($db);

$data = json_decode(file_get_contents("php://input"));

$nomination->id = $data->id;
$nomination->category = $data->category;
$nomination->nominee_name = $data->nominee_name;
$nomination->nominee_email = $data->nominee_email;
$nomination->nominee_phone = $data->nominee_phone;
$nomination->nominee_institution = $data->nominee_institution;
$nomination->nominator_name = $data->nominator_name;
$nomination->nominator_email = $data->nominator_email;
$nomination->nominator_phone = $data->nominator_phone;
$nomination->justification = $data->justification;

if($nomination->update()) {
    http_response_code(200);
    echo json_encode(array("message" => "Nomination was updated."));
} else {
    http_response_code(503);
    echo json_encode(array("message" => "Unable to update nomination."));
}
?>