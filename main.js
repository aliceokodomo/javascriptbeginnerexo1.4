function displayInput() {
    // value pour la valeur a mettre dans l'input
    var nom= document.form1.nom.value;
    var prenom= document.form1.prenom.value;
    var ville= document.form1.ville.value;
    if(nom && prenom && ville){
        alert('Nom: ' + nom + '\n' + 'Prénom: ' + prenom + '\n' + 'Ville: ' + ville)
    }else {
        alert("veuillez remplir les champs");
    }
}
// par la suite introduire des conditions si nombre ou vide