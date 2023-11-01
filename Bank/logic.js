const bankData = [];

const sortSelect = document.getElementById("sort-select");
const searchInput = document.getElementById("search-input");
const bankTableBody = document.getElementById("bank-table-body");
const totalClients = document.getElementById("total-clients");
const totalLoans = document.getElementById("total-loans");

function displayBankData(data) {
    bankTableBody.innerHTML = "";
    data.forEach((bank) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${bank.name}</td>
            <td>${bank.clients}</td>
            <td>${bank.loans}</td>
        `;
        bankTableBody.appendChild(row);
    });
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
});

function calculateTotal() {
    const totalClientsCount = bankData.reduce((acc, bank) => acc + bank.clients, 0);
    const totalLoansCount = bankData.reduce((acc, bank) => acc + bank.loans, 0);
    totalClients.textContent = totalClientsCount;
    totalLoans.textContent = totalLoansCount;
}

displayBankData(bankData);
calculateTotal();

const addBankForm = document.getElementById("add-bank-form");
const bankNameInput = document.getElementById("bank-name");
const bankClientsInput = document.getElementById("bank-clients");
const bankLoansInput = document.getElementById("bank-loans");
const addBankButton = document.getElementById("add-bank-button");

addBankButton.addEventListener("click", () => {
    const name = bankNameInput.value;
    const clients = parseInt(bankClientsInput.value);
    const loans = parseInt(bankLoansInput.value);

    if (name && !isNaN(clients) && !isNaN(loans)) {
        const newBank = { name, clients, loans };
        bankData.push(newBank);
        displayBankData(bankData);
        calculateTotal();
        sort(sortSelect.value);
        bankNameInput.value = "";
        bankClientsInput.value = "";
        bankLoansInput.value = "";
    }
});
