(function($, Drupal, drupalSettings) {
// Your code...
// New behavior
    // hello
    Drupal.behaviors.myBehave = {
        attach: function (context) {
            //$('selector', context).command();
            //alert('Hello Monsieur');
            //console.log(drupalSettings);
        }
    }

    // Tous les liens pointant vers un site externe
    // doivent s’ouvrir dans une nouvelle fenêtre.
    // •Tous les liens pointant vers un site externe qui
    // apparaissent dans un noeud doivent être
    // précédés de l’icône
    Drupal.behaviors.iveExternalLink = {
        attach: function (context) {
            //$('selector', context).command();
            //$("a").attr('target',"_blank");

            $("a[href^='http']", content).attr("target", "_blank").addClass("external-link");
        }
    }

    // Tous les blocs peuvent être repliés/dépliés
    // lorsque l’on clique sur leur titre.
    Drupal.behaviors.collapsableBlock = {
        attach: function (context, settings) {
            $('.sidebar .block h2', context).click(function() {
                // Visual debugging ;-)
                // alert('Hello !');
                // Debugging with console
                $(this).parent().find('.content').slideToggle('fast');
                // $(this).siblings('.content').slideToggle('fast');
            });
        }
    }

})(jQuery, Drupal, drupalSettings);