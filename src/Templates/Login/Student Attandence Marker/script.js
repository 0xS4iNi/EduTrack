const branch = document.getElementById("studentBranch");
const paraMedicalBranch = document.getElementById("Paramedical-section");

function handleParaBranchToggle() {
    if (branch.value === "Paramedical") {
        paraMedicalBranch.classList.remove("hidden");
    }else {
        paraMedicalBranch.classList.add("hidden");
    }
}

branch.addEventListener("change", handleParaBranchToggle);