# Tirage au sort

Comme son nom l'indique, tirage au sort a pour unique vocation d'effectuer des tirages au sort. Initialement conçu pour choisir objectivement des parents d'élèves en sortie, son usage peut être détourné pour laisser le soin à Math.random() d'effectuer la sélection à notre place. 

# Particularités techniques

Le site est conçu uniquement en front (JS à la vanille, HTML et CSS). Il n'y a donc pas de traitement de données ce qui le rend conforme au RGPD. 

# Précision des fonctionnalités

- on peut ajouter les candidats ou en les séparant par une virgule
- la validation des candidats peut se faire par le bouton ou par une pression sur la touche "Enter"
- le bouton de lancement du tirage au sort ne se dévérouille que lorsque le nombre de place.s disponible.s est choisi. 
- l'écouteur d'événement qui permet de modifier l'orthographe des candidats ou de les supprimer est supprimé lorsque le candidat est sélectionné. Aussi, la suppression d'un candidat remet à zéro le tirage au sort.
- lorsqu'il n'y a plus de places disponibles, s'il reste des candidats, il est proposé de poursuivre le tirage au sort, en ajoutant des places une par une, jusqu'à ce qu'il n'y ait plus de candidats. 

Pour ajouter les candidats, il est possible de les rentrer un par un ou en les séparant par une virgule. 
Le bouton de lancement du tirage au sort ne se dévérouille que qu'une fois qu'un nombre de places disponibles a été choisi. 
Le bouton "Effacer" permet d'effacer tous les éléments de la page et de rétablir l'état de la page au mooment de son chargement (une pression de la touche "F5" provoque le même résultat). 
Le bouton "Recommencer" boucle et replace les différents candidats (sélectionné.e.s ou pas encore)