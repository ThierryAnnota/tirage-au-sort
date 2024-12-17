const app = {
    inputParent : null,
    inputLimit : null,
    numberLimit : null,
    divTableauParentsDispo : null,
    buttonDiv : null,
    button : null,
    restartButton : null,
    parentsDisponibles : null,
    divParentsSelected : null,
    limit : null,
    restLimit : null,
    

    getParents () {
        if (app.inputParent.value !== ""){
        parents = inputParent.value.split(',');
        app.displayParents();
        inputParent.value = "";
        }
    },
    
    displayParents() {
        // le forEach est indispensable pour palier l'éventualité que la fonction getParents renvoie un tableau (pour le cas où l'utilisateur rentre les noms séparés par une virgule)
        parents.forEach(parent => {
            const parentsDispoCell = document.createElement("div");
            parentsDispoCell.classList.add("parentCell");
            const nomParentDispo = parent;
            parentsDispoCell.innerHTML = nomParentDispo;
            app.divTableauParentsDispo.append(parentsDispoCell);
        });
    },
    
    getLimit() {
        app.parentsDisponibles = app.divTableauParentsDispo.querySelectorAll('.parentCell');
        console.log(typeof(Number(app.inputLimit.value)));
        if (Number(app.inputLimit.value) > app.parentsDisponibles.length) {
            alert("tu as choisis un nombre plus grand que le nombre de candidat... essaye encore");
            app.inputLimit.value = "";
        } else {
            app.limit = Number(app.inputLimit.value);
            console.log(typeof(app.limit));
            app.button.disabled = false;
            app.inputLimit.value = "";
            app.restLimit.innerHTML = app.limit;
        }
    },
    
    chose () {
        app.parentsDisponibles = app.divTableauParentsDispo.querySelectorAll('.parentCell');
        const randomNumber = parseInt(Math.random() * app.parentsDisponibles.length);
        console.log(`le nombre aléatoire choisi est le : ${randomNumber}`);
        if (app.limit>=1) {
            const parentsSelectionne = app.parentsDisponibles[randomNumber];
            app.divParentsSelected.append(parentsSelectionne);
            app.limit-- ; 
            app.restLimit.innerHTML = app.limit;
            app.inputLimit.disabled = true;
            app.numberLimit.disabled = true;
            app.inputParent.disabled = true;
            document.querySelector("#addParent").disabled = true;
            if(app.limit ===0){
                app.button.disabled = true;
                app.button.setAttribute("title", "coucou");
            }
        };
    },
    
    restart (){
        app.divTableauParentsDispo.innerHTML = "";
        app.divParentsSelected.innerHTML = "";
        app.inputLimit.disabled = false;
        app.numberLimit.disabled = false;
        app.inputParent.disabled = false;

        app.inputLimit.value = "";
        app.limit = null;
        app.button.disabled = true;
        app.restLimit.innerHTML = "";
    },

    
    init () {
        app.inputParent = document.querySelector("#inputParent");
        app.inputLimit = document.querySelector("#inputLimit")
        app.inputLimit.addEventListener('keydown', function (event) {
            if (event.key === "Enter") {
                app.getLimit();
            }
        });
        app.numberLimit = document.querySelector(".numberLimitBtn")
        app.numberLimit.addEventListener("click", app.getLimit);
        app.divTableauParentsDispo = document.querySelector('#parentsDispoArray');
        document.querySelector("#addParent").addEventListener('click', app.getParents);
        document.querySelector("#inputParent").addEventListener('keydown', function(event) {
            if (event.key === "Enter") {
                app.getParents();
            }
        });
        app.buttonDiv = document.getElementById("button");
        app.button = app.buttonDiv.childNodes[1];
        app.button.disabled = true;
        app.button.addEventListener("click", app.chose);
        app.restartButton = document.querySelector(".restartBtn");
        app.restartButton.addEventListener("click", app.restart);
        app.divParentsSelected = document.getElementById("parentsSelectArray");
        app.restLimit = document.querySelector(".restLimit");
        
    },
};



app.init();
