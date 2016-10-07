$(document).ready(pied);

// Fonction principale
function pied(){

	var nmbreAleatoire = parseInt(Math.random()*(30-15)+15);
	



	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider(){
		// Récupérer le contenu de mon input
		var recupinput = parseInt($("input").val(),10);

		// Stocker un nombre ENTIER généré "aléatoirement"(dans la fonction pied)
		console.log(typeof recupinput);     
          // (typeof recupinput);
		// Comparer ce contenu à ce nombre
		if (recupinput === nmbreAleatoire) {


			alert('jai gagné');
		// 	// Si le contenu est égal
		// 	// Afficher une alert Gagné

		// 	// Sinon s'il est supérieur
		// 	// Afficher une alert Perdu, votre nombre est trop grand
	}else {  
		alert('tu as perdu');

	}


}

// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
$("button").click(function(){

	clickValider();
	// Et qui appelle la fonction 'clickValider' défini ci-dessus

});
// /Fin == Fonction clickValider =
}