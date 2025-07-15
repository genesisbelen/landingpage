<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars(trim($_POST["nombre"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $telefono = htmlspecialchars(trim($_POST["telefono"]));
    $mensaje = htmlspecialchars(trim($_POST["mensaje"]));

    // Dirección de correo a donde se enviarán los mensajes
    $destinatario = "tu_correo@tudominio.com"; // ¡IMPORTANTE! Cambia esto por tu correo electrónico real
    $asunto = "Nuevo mensaje de contacto desde el Gimnasio Web";

    $contenido = "Nombre: " . $nombre . "\n";
    $contenido .= "Email: " . $email . "\n";
    if (!empty($telefono)) {
        $contenido .= "Teléfono: " . $telefono . "\n";
    }
    $contenido .= "Mensaje:\n" . $mensaje . "\n";

    $cabeceras = "From: " . $email . "\r\n";
    $cabeceras .= "Reply-To: " . $email . "\r\n";
    $cabeceras .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($destinatario, $asunto, $contenido, $cabeceras)) {
        // Redirige a una página de éxito o muestra un mensaje
        header("Location: thank_you.html"); // Crea un archivo thank_you.html o similar
        exit();
    } else {
        // Redirige a una página de error o muestra un mensaje
        header("Location: error.html"); // Crea un archivo error.html o similar
        exit();
    }
} else {
    // Si alguien intenta acceder directamente a send_mail.php
    header("Location: index.html");
    exit();
}
?>