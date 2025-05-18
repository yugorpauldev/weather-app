const dropdown = document.querySelector("#myExercise");
const logButton = document.querySelector("#logButton");
const logList = document.querySelector("#log-list");
const sets = document.querySelector(".sets")
const reps = document.querySelector(".reps")



//Vai buscar o que foi gravado no local storage pra mostrar na tela sempre que for refreshed
const stored = localStorage.getItem("workouts")
const workouts = stored ? JSON.parse(stored): [] // Ve se tem algo e se nao tiver deixa vazio caso tenha trasnforma em Json


//Funcao geral pra mostrar workouts que automaticamente limpa e se estiver vazio avisa que esta vazio
//E se nao estiver vazio vai buscar a array e mostra tudo junto independentemente de quando foi feito
function displayWorkouts(){
    logList.innerHTML = "";

    if (workouts.length === 0){
        const li = document.createElement('li');
        li.textContent = "No exercises logged yet";
        logList.appendChild(li);
    } else{
        workouts.forEach(item =>{
        const li = document.createElement('li');
        li.textContent = `${item.selectedExercise} - ${item.numSet} sets of ${item.numRep} reps at ${item.tempo}`;
        logList.appendChild(li)
        })
    }

    
    
}
displayWorkouts();

//Listener do botao de Logar exercicio
logButton.addEventListener("click", () => {
    const selectedExercise = dropdown.value;
    const numSet = +sets.value;
    const numRep = +reps.value;
    const tempo = new Date().toISOString()

    // Basic input validation
    if (!selectedExercise || numSet <= 0 || numRep <= 0 || isNaN(numSet) || isNaN(numRep)) {
        alert("Please enter a valid exercise, number of sets (greater than 0), and number of reps.");
        return;
    }

    const CurrentWorkout = {
        tempo,
        selectedExercise,
        numSet,
        numRep
    };

    workouts.push(CurrentWorkout);
    localStorage.setItem("workouts", JSON.stringify(workouts));
    displayWorkouts();

    //: Clear fields after logging
    sets.value = "";
    reps.value = "";
});