package bank.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Bank {
    private int id;
    private String name;
    private String description;
    private int clients;
    private int loans;
    private int price;
    public Bank(String name, String description, int clients, int loans, int price) {
        this.name = name;
        this.description = description;
        this.clients = clients;
        this.loans = loans;
        this.price = price;
    }
}
