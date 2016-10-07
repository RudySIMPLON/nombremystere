$(document).ready(main);

       var nmbreAleatoire;
	var nombresTentatives;

// Fonction principale
function main(){


	
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre de tentatives restantes.
	// Créer et initialiser une variable 'globale' qui 
	// va stocker le nombre "aléatoire" mystère.*



	function demarrerPartie(){ 
        

		

		nombresTentatives=parseInt(prompt("Choisis ton nombre de tentatives"))
		
		var min=parseInt(prompt("Choisis ton nombre minimum"));
		var max=parseInt(prompt("Choisis ton nombre de maximum"));

		nmbreAleatoire =Math.floor(Math.random() * (max - min +1)) + min;

		console.log(nmbreAleatoire);
		$("span").text(nombresTentatives);

	}


	function partieGagnee(){
		alert("Gagné");

		demarrerPartie();

	}

	function partiePerdue (message){


		alert(message);

		demarrerPartie();

	}

function essaieEncore(message){
			--nombresTentatives;
		console.log(nombresTentatives);
		$("span").text(nombresTentatives);
alert(message);
}


	// == Fonction clickValider == 
	// Créer la fonction 'clickValider'
	function clickValider() {

		// Récupérer le contenu de mon input

		var recupInput= $("input").val()
	// Comparer ce contenu au nombre mystère.
		/*
			Si le contenu est égal : 
			- afficher une alert Gagné
			- démarrer une nouvelle partie
			*/
			if(recupInput===nmbreAleatoire){


				partieGagnee();
			}

if (nombresTentatives==0){

               partiePerdue("Partie perdues");




			}

		// Sinon s'il est supérieur
		// Afficher une alert Perdu, votre nombre est trop grand
		else if (recupInput>nmbreAleatoire){

			essaieEncore ("Perdu, votre nombre est trop grand");
			
		}
		// Sinon s'il est inférieur
		// Afficher une alert Perdu, votre nombre est trop petit
		else if (recupInput<nmbreAleatoire)  {

		essaieEncore("Perdu, votre alerte est trop petite");

			}

			//  if (nombresTentatives==0){

   //             partiePerdue("Partie perdues");
	}


		// Dans les cas où c'est perdu, diminuer le nombre de tentatives

			// Actualiser la zone html affichant le nombre de tentatives

			/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 		*/

	// /Fin == Fonction clickValider == 


	$("button").click(function(){


		clickValider();
	});


demarrerPartie();

	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
}	// Et qui appelle la fonction 'clickValider' défini ci-dessus


	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
		*/
