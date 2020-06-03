<?php
//llamando a los campos
//declaracion de variables

$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$telefono=$_POST['telefono'];
$mensaje=$_POST['mensaje'];


//declaracion de variables para correo
$destinatario = "leugimblake@gmail.com";
$asunto= "Contacto desde nuestra web";


$carta="De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";


//enviando mensaje
mail($destinatario,$asunto, $carta);
header('Location: mensaje_envio.html')

?>