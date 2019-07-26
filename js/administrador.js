/*Iniciar materializecss*/

document.addEventListener("DOMContentLoaded", function() {
  var modal = document.querySelectorAll(".modal");
  var instances = M.Modal.init(modal);
});
/*consulta*/
var puntos = 8;
var palabra = "Comentario positivo";
document.querySelector("#enviar").addEventListener("click", traerDatos);
function traerDatos() {
  fetch("js/prueba.json")
    .then(res => res.json())
    .then(datos => {
      console.log(datos);
      const tbody_animo_list = document.querySelector("#tbody_animo_list");
      for (let index in datos) {
        const item = datos[index]
        tbody_animo_list.innerHTML += `
<tr class="puntaje_${index}">
  <td id="frase">${item.animo}</td>
  <td>
    <div class="stars-outer">
      <div class="stars-inner" style="width: ">
      </div>
    </div>
  </td>
</tr>
`;


        puntos = item.score;
        /* estrellas */
        var ratings = {
          puntaje: puntos
        };
        var starTotal = 10;
        for (var rating in ratings) {
          var starPercentage = (ratings[rating] / starTotal) * 100;
          var starPercentageRounded = `${Math.round(starPercentage / 10) *
            10}%`;
          document.querySelector(
            `.${rating}_${index} .stars-inner`
          ).style.width = starPercentageRounded;
        }
      }
    });
}
