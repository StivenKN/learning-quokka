<?php 

require_once "../certificated/vendor/autoload.php";

use Dompdf\Dompdf;
use Dompdf\Option;
use Dompdf\Exception as DomException;
use Dompdf\Options;


$dompdf = new Dompdf();

$html = '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body {
      background-color: black;
    }
    img {
      position: relative;
      top: 50px;
      left: 350px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <div class="card">
          <div class="card-body">
          <img src="certificated/quokka1.png">
          <h5 class="card-title" style="text-align: center; color: white; font-size: 60pt;">Certificado de Finalización</h5>
          <p class="card-text" style="text-align: center; color: white; font-size: 17pt;">Este certificado acredita que [nombre del estudiante] ha completado con éxito el curso [nombre del curso].</br></br>
          <i class="color-text: yellow;">Felicidades por completar el curso y esperamos que los conocimientos adquiridos le sean útiles en su carrera.</i></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>';

$dompdf->loadHtml($html);

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4', 'landscape');
$dompdf->set_option('defaultFont', 'Arial');


// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream("Certificado_LearningQuokkas", array('Attachment'=>0));

?>