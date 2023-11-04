package bank.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Bank {
    private int id;
    private String name;
    private int clients;
    private int loans;
    public Bank(String name, int clients, int loans) {
        this.name = name;
        this.clients = clients;
        this.loans = loans;
    }
}
