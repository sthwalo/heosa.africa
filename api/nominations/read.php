<?php
// api/nominations/read.php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../database.php';
include_once '../../Nomination.php';

$database = new Database();
$db = $database->getConnection();
$nomination = new Nomination($db);

$stmt = $nomination->read();
$num = $stmt->rowCount();

if($num > 0) {
    $nominations_arr = array();
    $nominations_arr["records"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $nomination_item = array(
            "id" => $id,
            "category" => $category,
            "nominee_name" => $nominee_name,
            "nominee_email" => $nominee_email,
            "nominee_phone" => $nominee_phone,
            "nominee_institution" => $nominee_institution,
            "nominator_name" => $nominator_name,
            "nominator_email" => $nominator_email,
            "nominator_phone" => $nominator_phone,
            "justification" => $justification,
            "created_at" => $created_at
        );
        array_push($nominations_arr["records"], $nomination_item);
    }

    http_response_code(200);
    echo json_encode($nominations_arr);
} else {
    http_response_code(404);
    echo json_encode(array("message" => "No nominations found."));
}
?>