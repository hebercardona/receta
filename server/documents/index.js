module.exports = ({
   paciente,
   edad,
   peso,
   notas
}) => {
   const today = new Date();
   var months = new Array(12);
   months[0] = "Enero";
   months[1] = "Febrero";
   months[2] = "Marzo";
   months[3] = "Abril";
   months[4] = "Mayo";
   months[5] = "Junio";
   months[6] = "Julio";
   months[7] = "Agosto";
   months[8] = "Septiembre";
   months[9] = "Octubre";
   months[10] = "Noviembre";
   months[11] = "Diciembre";
   return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>Receta Paciente</title>
          <style>

          html, body {
            height: 90%;
            margin: 0;
            padding: 0;
        }

        .div1 {
         overflow:auto; // without overflow here, if the "Line 1" and "Line 2" is short then "Next elements" will display below "Line 2" and the image will cover the "Next elements" 
    }
    .img {
        float: left;
        width:150px;
        height:150px;
        z-index: 2;
    }
    .div2 {
         // without float here, if "Line 1" and "Line 2" is long -> text will display both at right and bottom the image
    }

       .head {
         width: 225px;
         background-color: #ccc;
         padding: 50px;
       }

          #footer{
            font-family: 'Open Sans', sans-serif;
            font-weight: light;
            font-size: 16px;
            position: fixed;
            width: 100%;
            bottom: 0;
            text-align: center;
            border-top: 4px solid #555555;
            margin-top:10px;
            margin-bottom: 30px;
           }

          .entry-title-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: rgba(255,255,255,0.7);
            padding: 6px 12px;
            margin: auto;
            border-radius: 2px;
            text-align:center;
          }

          #header {
              display: flex;
              align-items: center;
              font-family: 'Open Sans', sans-serif;
              font-weight: bold;
              font-size: 38px;
              height: 15px; 
              width: 100%; 
              margin: 10px 0 150px; 
              text-align: center; 
              color: black; 
              
              padding: 8px 0px;
            }

            #logo { 
                text-align: left; 
                float: left; 
                position: fixed; 
                margin-top: 0; 
                margin-left: 0;
                border: 1px solid #fff; 
                max-width: 540px; 
                max-height: 100px; 
                overflow: hidden; 
            }

            .especialidad {
                font-weight: 400;
                font-size: 22px;
                padding-top: 4px;
            }

            .universidad {
                font-weight: 400;
                font-size: 18px;
            }

            .credenciales {
                font-weight: 300;
                font-size: 13px;
            }
           

             .invoice-box {
             max-width: 800px;
             
             margin: auto;
             padding: 0px;
             border: 0 solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Open Sans', sans-serif;
             color: #222;
             margin-top: 60px;
             }
        
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 55px;
             line-height: 55px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body style="position: relative">
       <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
       <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
       <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
       <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">

          <div class="invoice-box">
          <div class="div1">
            <img class="img" src="https://user-images.githubusercontent.com/37750446/94746704-eafb6180-0342-11eb-8097-89d722e4b9ab.jpg"></img>
            <div class="div2"  id="header" style="padding-top: 40px; position: relative; right: 40px;">
            Dra. Yuridia Salazar Galvez
            <div class="especialidad">ALERGIA E INMUNOLOGIA CLINICA</div>
            <div class="universidad">Universidad de Guadalajara</div>
            <div class="credenciales">Cédula Medicina General 7948253 / Cédula Pediatría 11028047 / Cédula en Alergia e Inmunología 11988279</div>
          <hr>
          </div>
          </div>
          <div style="height: 60px;"></div>
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr style="height: 180px;">
                            <td class="title" style="width:50%;"></td>
                            <td style="font-size: 20px;">
                               Fecha: ${`${today.getDate()} ${months[today.getMonth()]}, ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr style="font-size: 20px;">
                            <td>
                               Paciente: ${paciente}
                            </td>
                            <td>
                               Edad: ${edad}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Indicaciones:</td>
                </tr>
                <tr class="item">
                   <td style="white-space: pre-wrap;">
                    <div>${notas}</div>
                   </td>
                </tr>
             </table>
             <br />
          </div>
          <div id="footer">
            <div>Doctors Hospital Calle Ecuador 2331 Col. Balcones de Galerías Monterrey NL, México. CP 64620. Consultorio 935-936.</div>
            <div><i class="fas fa-phone-square"></i> (0181) 13 65 93 95 &nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-whatsapp"></i> 331 071 5712 &nbsp;&nbsp;&nbsp;&nbsp;<i class="far fa-envelope"></i> Correo electrónico: yuridiasalazargalvez@hotmail.com</div>
          </div>
       </body>
    </html>
    `;
};