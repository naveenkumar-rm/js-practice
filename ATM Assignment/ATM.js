class ATM extends BankAccount {


    constructor(accountHolder,balance,pin,cardNumber){
        super(accountHolder,balance,pin,cardNumber);
    }


    authenticate(){
        let givenCard = document.getElementById("card").value;
        let givenPin = document.getElementById("pin").value;

        if(givenCard != this.cardNumber){
            return "Ivalid Card number";
        }
        if(givenPin != this.pin){
            return "incorrect pin";
        }
        return "Authenticated";
    }

    withdraw(){
        let auth = this.authenticate;

        if(auth != "Authenticated"){
            display(auth);
            return;
        }

        let amount =
    }

    function display(message) {
        document.getElementById("output").innerText = message;
    }
}