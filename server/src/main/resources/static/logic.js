import { getAllBanks, postBank, editBank, deleteBank, getBankById } from "./api.js";


let bankData = [];
let selectedBank = null;
let maxLength = parseInt(localStorage.getItem('maxLength')) || 0;

const sortSelect = document.getElementById("sort-select");
let searchInput = document.getElementById("search-input");
const bankTableBody = document.getElementById("bank-table-body");
const totalClients = document.getElementById("total-clients");
const totalLoans = document.getElementById("total-loans");

function displayBankData(data) {
    bankTableBody.innerHTML = "";
    data.forEach((bank, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${bank.name}</td>
            <td>${bank.clients}</td>
            <td>${bank.loans}</td>
            <td><button class="edit-button">Edit</button></td>
        `;

        const editButton = row.querySelector(".edit-button");
        editButton.addEventListener("click", () => {
            const editRow = createEditField(bank, index);
            bankTableBody.replaceChild(editRow, row);
        });
        
        bankTableBody.appendChild(row);
    });
}

const refetchAllBanks = async () => {
    const allBanks = await getAllBanks();
    bankData = allBanks;
    sort(sortSelect.value);
    calculateTotal();
}

function sort(selectedOption) {
    const sortedData = bankData.slice().sort((a, b) => {
        return b[selectedOption] - a[selectedOption];
    });
    displayBankData(sortedData);
}

sortSelect.addEventListener("change", () => {
    const selectedOption = sortSelect.value;
    sort(selectedOption);
});

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = bankData.filter((bank) => {
        return bank.name.toLowerCase().includes(searchTerm);
    });
    displayBankData(filteredData);
    if (!searchTerm) {
        sort(sortSelect.value);
    }
});

function calculateTotal() {
    const totalClientsCount = bankData.reduce((acc, bank) => acc + bank.clients, 0);
    const totalLoansCount = bankData.reduce((acc, bank) => acc + bank.loans, 0);
    totalClients.textContent = totalClientsCount;
    totalLoans.textContent = totalLoansCount;
}

refetchAllBanks();

const addBankForm = document.getElementById("add-bank-form");
const bankNameInput = document.getElementById("bank-name");
const bankClientsInput = document.getElementById("bank-clients");
const bankLoansInput = document.getElementById("bank-loans");
const addBankButton = document.getElementById("add-bank-button");

addBankButton.addEventListener("click", () => {
    const name = bankNameInput.value;
    const clients = parseInt(bankClientsInput.value);
    const loans = parseInt(bankLoansInput.value);

    if (name && clients > 0 && loans > 0) {
        bankNameInput.value = "";
        bankClientsInput.value = "";
        bankLoansInput.value = "";
        postBank({
            name,
            clients,
            loans,
        }).then(refetchAllBanks);
        maxLength++;
        localStorage.setItem('maxLength', maxLength);
    }
    else {
        alert("Incorrect data");
    }
});

const findIdOfRow = async () => {
    for (let i = 1; i < maxLength + 1; i++) {
        try {
            const expectedBank = await getBankById(i);
            if (expectedBank.name == selectedBank.name &&
                expectedBank.clients == selectedBank.clients && 
                expectedBank.loans == selectedBank.loans) 
                {
                    return i;
            }
        } catch (error) {}
    }
}

function createEditField(bank, rowIndex) {
    selectedBank = { ...bank };
    const editRow = document.createElement("tr");
    editRow.innerHTML = `
        <td><input type="text" value="${bank.name}" id="edit-name"></td>
        <td><input type="number" value="${bank.clients}" id="edit-clients"></td>
        <td><input type="number" value="${bank.loans}" id="edit-loans"></td>
        <td>
            <button id="save-edit">Save</button>
            <button id="delete-edit">Delete</button>
            <button id="cancel-edit">Cancel</button>
        </td>
    `;

    const saveEditButton = editRow.querySelector("#save-edit");
    const deleteEditButton = editRow.querySelector("#delete-edit");
    const cancelEditButton = editRow.querySelector("#cancel-edit");

    saveEditButton.addEventListener("click", async () => {
        searchInput = "";
        const editedName = document.getElementById("edit-name").value;
        const editedClients = parseInt(document.getElementById("edit-clients").value);
        const editedLoans = parseInt(document.getElementById("edit-loans").value);
        if (editedName && editedClients > 0 && editedLoans > 0) {
            const id = await findIdOfRow();
            editBank(id, {
                name: editedName,
                clients: editedClients,
                loans: editedLoans,
            }).then(refetchAllBanks);
        } else {
            alert("Incorrect data");
        }
    });

    deleteEditButton.addEventListener("click", async () => {
        searchInput = "";
        const id = await findIdOfRow();
        deleteBank(id).then(refetchAllBanks);
    });

    cancelEditButton.addEventListener("click", () => {
        searchInput = "";
        sort(sortSelect.value);
    });

    return editRow;
}

window.addEventListener('load', () => {
    maxLength = parseInt(localStorage.getItem('maxLength')) || 0;
});

localStorage.setItem('maxLength', maxLength);
