displayMedicines();

// FETCH FUNCTIONS
async function fetchMedicines() {
    try{
        const response = await fetch("http://localhost:8000/medicines");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.error(error);
    }
}

async function fetchMedicine() {
    try{
        const medicineNameRAW = document.getElementById("medicineName").value; //Only works with correct capitilisation
        const medicineName = medicineNameRAW.charAt(0).toUpperCase() + medicineNameRAW.toLowerCase().substring(1); //Converts to Camel Case
        const response = await fetch(`http://localhost:8000/medicines/${medicineName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.error(error);
    }
}

// POST FUNCTIONS
async function addMedicine() {
    try{
        const addForm = document.getElementById("addForm");
        const addFormData = new FormData(addForm);
        console.log(addFormData.get('price'));

        const response = await fetch("http://localhost:8000/create", {
            method: "POST",
            body: addFormData,
        });

        if(!response.ok){
            throw new Error("Could not post form");
        }
        displayMedicines();
        closeAddForm();
        return response.json();
    }
    catch(error){
        console.error(error);
    }
}

// DELETE FUNCTIONS
async function deleteMedicine() {
    try{
        const delForm = document.getElementById("delForm");
        const delFormData = new FormData(delForm);

        const response = await fetch("http://localhost:8000/delete", {
            method: "DELETE",
            body: delFormData,
        });

        if(!response.ok){
            throw new Error("Could not post form");
        }
        displayMedicines();
        closeDelForm();
        return response.json();
    }
    catch(error){
        console.error(error);
    }
}


// FRONTEND DISPLAY FUNCTIONS
function clearMedicines(){
    const main = document.getElementById("medicineContent");
    main.innerHTML = '';
}

async function displayMedicines() {
    clearMedicines();
    const data = await fetchMedicines();
    medicines = Object.values(data)[0];
    
    for (const medicine of medicines) {
        displayMedicine(medicine);
    }
}

function displayMedicine(data) {
    const main = document.getElementById("medicineContent");
    const template = document.getElementById("medicineTemplate");
    const content = template.content.cloneNode(true);
    const div = document.getElementsByClassName("info");
    const medName = Object.values(data)[0];
    const medPrice = Object.values(data)[1];
    
    if (medName != '') {
        content.querySelector(".medName").textContent = medName;
    } else {
        content.querySelector(".medName").textContent = "Unknown";
    }
    
    if (medPrice != null) {
        content.querySelector(".medPrice").textContent = `£${medPrice}`;
    } else {
        content.querySelector(".medPrice").textContent = "Unknown";
    }

    main.appendChild(content);
}


// FRONTEND BUTTON FUNCTIONS
async function searchMedicine() {
    const medicineName = document.getElementById("medicineName").value;
    clearMedicines();
    if (medicineName == "") {
        displayMedicine({"error":"Invalid Search"});
    } else {
        const data = await fetchMedicine();
        displayMedicine(data);
    }
}

function clearSearch() {
    const inputBox = document.getElementById("medicineName");
    inputBox.value = "";
    clearMedicines();
    displayMedicines();
}

function openAddForm() {
    document.getElementById("addForm-popup").style.display = "block";
}
function closeAddForm() {
    document.getElementById("addForm-popup").style.display = "none";
}

function openDelForm() {
    document.getElementById("delForm-popup").style.display = "block";
}
function closeDelForm() {
    document.getElementById("delForm-popup").style.display = "none";
}