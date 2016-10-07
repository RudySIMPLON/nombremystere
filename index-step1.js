$(document).ready(main);

// Fonction principale
function main(){

	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function ClickValider(){
// Récupérer le contenu de mon input
		var recup = $("input").val();

		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné

		if (recup == 6) {

			alert("Tu as Gagné");
		
			// Sinon,
			// Afficher une alert Perdu

		} else {


			alert("vous avez perdu");
		}    
}
// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
$("button").click(function(){
// Et qui appelle la fonction 'clickValider' défini ci-dessus
	 ClickValider();

});
	

}

		
	// /Fin == Fonction clickValider == 



	
	


