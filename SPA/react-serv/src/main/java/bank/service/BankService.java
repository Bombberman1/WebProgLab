package bank.service;

import bank.models.Bank;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class BankService {
    private Map<Integer, Bank> banks = new HashMap<>() {{
        put(1, new Bank("Mono", "Mono is the best super mega ultra bank in Ukraine", 5000, 500, 8000){{setId(1);}});
        put(2, new Bank("Privat", "Privat can transfer money", 2000, 1000, 5000){{setId(2);}});
        put(3, new Bank("Raif", "Raif just works", 1500, 750, 2000){{setId(3);}});
        put(4, new Bank("Oschad", "Ukrainian bank", 1000, 300, 1000){{setId(4);}});
        put(5, new Bank("Aval", "Aval provides various financial services", 3000, 600, 7000){{setId(5);}});
        put(6, new Bank("Ukrgasbank", "Ukrgasbank focuses on supporting the energy sector", 1200, 400, 3000){{setId(6);}});
        put(7, new Bank("Credit Agricole", "Credit Agricole is a part of a global banking group", 1800, 900, 4000){{setId(7);}});
        put(8, new Bank("PUMB", "PUMB is known for innovative banking solutions", 2500, 800, 6000){{setId(8);}});
        put(9, new Bank("Kredobank", "Kredobank offers diverse financial products", 1600, 500, 4500){{setId(9);}});
        put(10, new Bank("Megabank", "Megabank is a leading financial institution", 3500, 700, 7500){{setId(10);}});
    }};

    private int nextAvailableId = 11;

    public LinkedList<Bank> getBanks() {
        return new LinkedList<>(banks.values());
    }

    public LinkedList<Bank> sortBanksWithFilter(String filterName) {
        switch (filterName){
            case "clients":
                return banks.values().stream()
                        .sorted(Comparator.comparingInt(Bank::getClients).reversed())
                        .collect(Collectors.toCollection(LinkedList::new));
            case "loans":
                return banks.values().stream()
                        .sorted(Comparator.comparingInt(Bank::getLoans).reversed())
                        .collect(Collectors.toCollection(LinkedList::new));
            case "price":
                return banks.values().stream()
                        .sorted(Comparator.comparingInt(Bank::getPrice).reversed())
                        .collect(Collectors.toCollection(LinkedList::new));
        } return null;
    }

    public Bank getBankById(Integer bankId) {
        return banks.get(bankId);
    }

    public LinkedList<Bank> addBank(Bank bank) {
        bank.setId(nextAvailableId++);
        banks.put(bank.getId(), bank);
        return new LinkedList<>(banks.values());
    }

    public LinkedList<Bank> deleteBankById(Integer bankId) {
        banks.remove(bankId);
        return new LinkedList<>(banks.values());
    }

    public LinkedList<Bank> updateBankById(Integer bankId, Bank bank) {
        bank.setId(bankId);
        if (banks.get(bankId) != null) {
            banks.put(bankId, bank);
            return new LinkedList<>(banks.values());
        } else {
            return null;
        }
    }
}
