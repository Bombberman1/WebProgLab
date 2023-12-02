import { getAllBanks, postBank, editBank, deleteBank } from "./api.js";


let bankData = [];
let selectedBank = null;

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
    sort(sortSelect.value, bankData);
}

function sort(selectedOption, data) {
    let sortedData = data.slice().sort((a, b) => {
        return b[selectedOption] - a[selectedOption];
    });
    if (searchInput.value && searchInput.value !== "") {
        sortedData = sortedData.filter((bank) => {
            return bank.name.toLowerCase().includes(searchInput.value.toLowerCase());
        });
    }
    calculateTotal(sortedData);
    displayBankData(sortedData);
}

sortSelect.addEventListener("change", () => {
    const selectedOption = sortSelect.value;
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = bankData.filter((bank) => {
        return bank.name.toLowerCase().includes(searchTerm);
    });
    sort(selectedOption, [...filteredData]);
});

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredData = bankData.filter((bank) => {
        return bank.name.toLowerCase().includes(searchTerm);
    });
    sort(sortSelect.value, [...filteredData]);
});

function calculateTotal(data) {
    const totalClientsCount = data.reduce((acc, bank) => acc + bank.clients, 0);
    const totalLoansCount = data.reduce((acc, bank) => acc + bank.loans, 0);
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
        }).then(response => response.json())
        .then(data => {
            bankData = data;
            sort(sortSelect.value, bankData);
        });
    }
    else {
        alert("Incorrect data");
    }
});

const findIdOfRow = () => {
    for (let i = 0; i < bankData.length; i++) {
        const expectedBank = bankData[i]
        if (expectedBank.name == selectedBank.name &&
            expectedBank.clients == selectedBank.clients && 
            expectedBank.loans == selectedBank.loans) 
            {
                return expectedBank.id;
        }
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

    saveEditButton.addEventListener("click", () => {
        const editedName = document.getElementById("edit-name").value;
        const editedClients = parseInt(document.getElementById("edit-clients").value);
        const editedLoans = parseInt(document.getElementById("edit-loans").value);
        if (editedName && editedClients > 0 && editedLoans > 0) {
            const id = findIdOfRow();
            editBank(id, {
                name: editedName,
                clients: editedClients,
                loans: editedLoans,
            }).then(response => response.json())
            .then(data => {
                bankData = data;
                sort(sortSelect.value, bankData);
            });
        } else {
            alert("Incorrect data");
        }
    });

    deleteEditButton.addEventListener("click", () => {
        const id = findIdOfRow();
        deleteBank(id)
        .then(response => response.json())
        .then(data => {
            bankData = data;
            sort(sortSelect.value, bankData);
        });
    });

    cancelEditButton.addEventListener("click", () => {
        sort(sortSelect.value, bankData);
    });

    return editRow;
}
