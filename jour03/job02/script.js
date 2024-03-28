$(document).ready(function(){
  let arc_en_ciel = $("#arc_en_ciel");
  let images = arc_en_ciel.children("img");

  let ordreAttendu = ["img/arc1.png", "img/arc2.png", "img/arc3.png", "img/arc4.png", "img/arc5.png", "img/arc6.png"];
  let ordreActuel = [];

  $(".connexion").sortable({
    connectWith: ".connexion",
    stop: function() {
      if ($("#arc_en_ciel").children().length = 0) {
        $('#resultat').text('Vous avez perdu').css('color', 'red');
      } else {  
        // Réinitialiser le tableau ordreActuel
        ordreActuel = [];

        // Récupérer les sources des images de la div sunshine dans l'ordre actuel
        $("#sunshine").children("img").each(function() {
          ordreActuel.push($(this).attr("src"));
        });

        // Vérifier si l'ordre actuel correspond à l'ordre attendu
        let ordresIdentiques = true;
        for (let i = 0; i < ordreAttendu.length; i++) {
          if (ordreAttendu[i] !== ordreActuel[i]) {
            ordresIdentiques = false;
            break;
          }
        }

        if (ordresIdentiques) {
          $('#resultat').empty().text('Vous avez gagné').css('color', 'green');
        } else {
          $('#resultat').empty().text('Vous avez perdu').css('color', 'red');
        }
      }
    }
  });

  $("#mélanger").click(function(){
    images.sort(function() {
      return Math.random() - 0.5;
    }); 

    arc_en_ciel.empty().append(images);
    $('#resultat').empty();

    if (arc_en_ciel.children().length === 0){
      console.log('La div arc_en_ciel est vide');
      location.reload(true);
    }
  });
});