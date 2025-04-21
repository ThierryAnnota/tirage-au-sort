# 🎲 Tirage au sort

**Tirage au sort** est une petite application web qui, comme son nom l’indique, a pour seule mission de… tirer au sort.  
Initialement conçue pour choisir objectivement des parents d’élèves en sortie scolaire, elle peut bien sûr être détournée pour toute autre utilisation, pour laisser le soin à `Math.random()` 🌀 d'effectuer la sélection à notre place.

---

## ⚙️ Particularités techniques

- 100% **frontend** (Vanilla JS, HTML, CSS)
- **Aucune donnée n’est traitée ou stockée** côté serveur
- Ceci rend l'application conforme au **RGPD** 🛡️

---

## ✨ Fonctionnalités principales

- ➕ Ajout de candidats un par un, ou en les séparant par une **virgule**
- ⌨️ Validation possible via le bouton **Valider** ou la touche **Entrée**
- 🔓 Le bouton de tirage ne s’active qu’une fois le **nombre de places défini**
- 📝 Possibilité de :
  - Corriger/modifier l'orthographe d'un nom en cliquant dessus
  - Supprimer un nom via la **petite croix** (qui apparaît en cliquant sur le candidat - par suppression de la classe "hidden")
- ⚠️ Attention :
  - Une fois un.e candidat.e sélectionné.e (par le tirage au sort), il/elle n’est **plus modifiable**. (L'écouteur d'événement est supprimé.)
  - Supprimer un.e candidat.e **réinitialise** le tirage en cours
  - Le bouton **Effacer** permet de remettre la page à zéro, comme si on appuyait sur **F5**
  - Le bouton **Recommencer** boucle et replace les candidat.e.s (sélectionné.e.s ou non)

---

## ➕ Tirage supplémentaire

S’il reste des candidats **non sélectionné.e.s** une fois toutes les places attribuées, une option permet d’**ajouter une place** et de poursuivre le tirage.  
Cette action est proposée **jusqu’à épuisement des candidat.e.s**


