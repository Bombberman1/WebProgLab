package bank.service;

import bank.models.Bank;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

@Service
public class BankService {
    private Map<Integer, Bank> banks = new HashMap<>();
    private int nextAvailableId = 1;

    public LinkedList<Bank> getBanks() {
        return new LinkedList<>(banks.values());
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
