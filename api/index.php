<?php
// Permitir solicitudes de cualquier origen
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

// Obtener la parte de la ruta de la URL
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$pathComponents = explode('/', $path);
// Buscar la parte relevante de la ruta
$key = array_search('api', $pathComponents);
$route = $pathComponents[$key + 1] ?? '';

// Procesar la solicitud
switch ($route) {
    case 'properties':
        echo json_encode([
            ["id" => "18281828", "name" => "propiedad 1", "address" => "calle falsa 123", "campaign_id" => "0000000"],
            ["id" => "18281829", "name" => "propiedad 2", "address" => "calle falsa 124", "campaign_id" => "0000000"]
        ]);
        break;
    case 'campaigns':
        echo json_encode([
            ["id" => "0000000", "name" => "campaign 1", "isActivated" => 1]
        ]);
        break;
    default:
        // Enviar una respuesta de error si se accede a una ruta no definida
        http_response_code(404);
        echo json_encode(['error' => 'Resource not found']);
        break;
}
