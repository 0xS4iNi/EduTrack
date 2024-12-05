const branch = document.getElementById("branch");
const paraMedicalBranch = document.getElementById("Paramedical-section");

function handleParaBranch() {
    if (branch.value === "Paramedical") {
        paraMedicalBranch.classList.remove("hidden");
    } else {
        paraMedicalBranch.classList.add("hidden");
    }
}

branch.addEventListener("change", handleParaBranch);