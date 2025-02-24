<?php
require_once __DIR__ . '/env.php';
loadEnv(__DIR__ . '/../../.env');

return [
    'smtp' => [
        'host' => getenv('SMTP_HOST'),
        'username' => getenv('SMTP_USERNAME'),
        'password' => getenv('SMTP_PASSWORD'),
        'port' => getenv('SMTP_PORT'),
        'secure' => getenv('SMTP_SECURE'),
        'from_email' => getenv('SMTP_FROM_EMAIL'),
        'from_name' => getenv('SMTP_FROM_NAME'),
        'debug' => getenv('SMTP_DEBUG') ?? 0,
        'verify_peer' => getenv('ENVIRONMENT') === 'production'
    ]
];
