console.log("Activado");

document.querySelector("#enviar").addEventListener('click',traerDatos);

function traerDatos(){
        console.log("funcion activada");
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET','js/prueba.json', true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              console.log(this.responseText+" Hola");
          }
        };
}