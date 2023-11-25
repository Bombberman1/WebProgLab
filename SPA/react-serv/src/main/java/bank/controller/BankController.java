package bank.controller;

import bank.models.Bank;
import bank.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

@RestController
@RequestMapping("/api/banks")
public class BankController {
    @Autowired
    private BankService bankService;

    @GetMapping
    public LinkedList<Bank> get() {
        return bankService.getBanks();
    }

    @GetMapping(path = "/filter")
    public ResponseEntity<LinkedList<Bank>> getSortedWithFilter(@RequestParam(name = "filter", defaultValue = "") String filterName,
                                                                @RequestParam(name = "search", defaultValue = "") String search) {
        LinkedList<Bank> sorted = bankService.sortBanksWithFilter(filterName, search);
        return new ResponseEntity<>(sorted, HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Bank> getById(@PathVariable("id") Integer bankId) {
        if (bankService.getBankById(bankId) != null) {
            return new ResponseEntity<>(
                    bankService.getBankById(bankId), HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping
    public LinkedList<Bank> create(@RequestBody Bank bank) {
        return bankService.addBank(bank);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<LinkedList<Bank>>
    delete(@PathVariable("id") Integer bankId) {
        return bankService.deleteBankById(bankId) == null
                ? new ResponseEntity<>(bankService.getBanks(), HttpStatus.OK)
                : ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<LinkedList<Bank>>
    update(@PathVariable("id") Integer bankId, @RequestBody Bank bank) {
        if (bankService.updateBankById(bankId, bank) != null) {
            return new ResponseEntity<>(
                    bankService.getBanks(), HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
