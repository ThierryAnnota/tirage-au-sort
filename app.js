const app = {
    inputParent : null,
    inputLimit : null,
    numberLimit : null,
    divTableauParentsDispo : null,
    buttonDiv : null,
    button : null,
    cleanButton : null,
    parentsDisponibles : null,
    divParentsSelected : null,
    limit : null,
    restLimit : null,
    resumeBtn : null,
    restartButton : null,
    restartArray : null,
    modaleBtn : null,
    modale : null,
    modaleCloseBtn : null,

    openModal () {
        app.modale.classList.remove("hidden");
        app.modale.setAttribute('aria-modal', 'true');
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' || e.key === 'Esc') {
                app.closeModale();
            }
        })
        app.modaleCloseBtn.focus();
    },

    closeModale() {
        app.modale.classList.add("hidden");
        app.modale.classList.remove('aria-modal');
        app.inputParent.focus();
    },

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
            parentsDispoCell.addEventListener("click", app.focusCell);
            parentsDispoCell.addEventListener("blur", app.unFocusCell);
            app.divTableauParentsDispo.append(parentsDispoCell);
        });
    },

    focusCell(event){
        event.target.contentEditable = true;
        event.target.addEventListener("keydown", (e) => {
            if(e.key ==='Enter'){
                e.preventDefault();
                event.target.blur();
            }
        })
    },

    unFocusCell(event) {
        event.target.contentEditable = false;
    },
    
    getLimit() {
        const regex = /^([1-9]+)$/;
        if (regex.test(app.inputLimit.value)===true){
            app.numberLimit.disabled = false;
            app.parentsDisponibles = app.divTableauParentsDispo.querySelectorAll('.parentCell');
            if (Number(app.inputLimit.value) > app.parentsDisponibles.length) {
                alert("tu as choisis un nombre plus grand que le nombre de candidat... essaye encore");
                app.inputLimit.value = "";
            } else {
                app.limit = Number(app.inputLimit.value);
                app.button.disabled = false;
                app.inputLimit.value = "";
                app.restLimit.innerHTML = app.limit;
            }
        } else {
            app.inputLimit.value = "";
        };
    },
    
    chose () {
        app.parentsDisponibles = app.divTableauParentsDispo.querySelectorAll('.parentCell');
        const randomNumber = parseInt(Math.random() * app.parentsDisponibles.length);
        console.log(`le nombre aléatoire choisi est le : ${randomNumber}`);
        if (app.limit>=1) {
            const parentsSelectionne = app.parentsDisponibles[randomNumber];
            if (parentsSelectionne.contentEditable === "true") {
                parentsSelectionne.contentEditable = "false";
                parentsSelectionne.blur();
            };
            parentsSelectionne.removeEventListener("click", app.focusCell);
            app.divParentsSelected.append(parentsSelectionne);
            app.limit-- ; 
            app.restLimit.innerHTML = app.limit;
            app.inputLimit.disabled = true;
            app.numberLimit.disabled = true;
            app.inputParent.disabled = true;
            document.querySelector("#addParent").disabled = true;
            if(app.limit ===0){
                app.button.disabled = true;
                app.parentsDisponibles = app.divTableauParentsDispo.querySelectorAll('.parentCell');
                if(app.parentsDisponibles.length !==0) {
                    app.resumeBtn.classList.remove("hidden");
                };
            };
        };
    },

    resumeSelection (){
        app.limit++;
        app.restLimit.innerHTML = app.limit;
        app.button.disabled = false;
        app.resumeBtn.classList.add("hidden");
    },
    
    clean (){
        app.divTableauParentsDispo.innerHTML = "";
        app.divParentsSelected.innerHTML = "";
        app.inputLimit.disabled = false;
        app.numberLimit.disabled = false;
        app.inputParent.disabled = false;
        app.resumeBtn.classList.add('hidden');
        app.inputLimit.value = "";
        app.limit = null;
        app.button.disabled = true;
        app.restLimit.innerHTML = "";
        app.inputParent.focus();
    },

    restart (){
        let selection = app.divTableauParentsDispo.querySelectorAll('div');
        app.restartArray = [];
        selection.forEach(e=>{
            app.restartArray.push(e.innerText);
        });
        console.log(this.restartArray);        
        selection = app.divParentsSelected.querySelectorAll('div');
        selection.forEach(e=>{
            app.restartArray.push(e.textContent);
            console.log('2ème tour : ' + this.restartArray)
        });
        app.clean();
        parents = app.restartArray;
        console.log(parents);
        app.displayParents();
        app.inputLimit.focus();
    },

    
    init () {
        app.inputParent = document.querySelector("#inputParent");
        app.inputParent.focus();
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
        app.resumeBtn = document.querySelector('.resumeBtn');
        app.resumeBtn.addEventListener('click', app.resumeSelection);
        app.buttonDiv = document.getElementById("button");
        app.button = app.buttonDiv.childNodes[1];
        app.button.disabled = true;
        app.button.addEventListener("click", app.chose);
        app.cleanButton = document.querySelector(".cleanBtn");
        app.cleanButton.addEventListener("click", app.clean);
        app.restartButton = document.querySelector(".restart");
        app.restartButton.addEventListener("click", app.restart);
        app.divParentsSelected = document.getElementById("parentsSelectArray");
        app.restLimit = document.querySelector(".restLimit");
        app.modaleBtn = document.querySelector(".modaleBtn");
        app.modaleBtn.addEventListener("click", app.openModal);
        app.modaleCloseBtn = document.querySelector(".modale-close-btn");
        app.modaleCloseBtn.addEventListener("click", app.closeModale);
        app.modale = document.querySelector(".modale-overlay");
    },
};



app.init();
