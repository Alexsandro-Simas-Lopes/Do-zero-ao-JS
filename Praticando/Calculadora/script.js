const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor (previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    //adiciona digito para calcular screen
    addDigit(digit) {
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return //Evita adicionar mais de um ponto      
        }
        this.currentOperation = digit;
        this.updateScreen();
    }
    //Processo de calcular operações
    processOperation(operation) {
        //Checar se o current é empty
        if(this.currentOperationText.innerText === "" && operation !== "C") {
            // Change operation
            if(this.previousOperationText.innerText !== "") {//change operation
            this.changeOperation(operation);
            }return;
        }

        //Operações matemáticas
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+"://Somar
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "-"://Subtrair
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/"://Dividir
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*"://Multiplicar
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "DEL"://Deletar valor da operação
                this.processDelOperator();
                break;
            case "CE"://Limpar operação atual
                this.processClearCurrentOperation();
                break;
            case "C"://Limpar toda operação
                this.processClearOperation();
                break;
            case "="://Butão de igual
                this.processEqualOperator();
                break;
            default:
            return;
        }
    }

    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null
    )
    {
        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // Check if value is zero, if it is just add current value 
            if(previous === 0) {
                operationValue = current
            }
            // Add current value toem previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }

    //  Change math operation
    changeOperation(operation) {
        const mathOperation = ["+", "-", "/", "*"]
        if(!mathOperation.includes(operation)) {
            return
        }
        
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;

    }
    //Delete the last digit
    processDelOperator() {
       this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1); 
    }

    //Clear current operation
    processClearCurrentOperation() {
        this.currentOperationText.innerText = "";
    }

    //Clear all operations
    processClearOperation() {
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";
    }
    //Process an operation
    processEqualOperator() {
        const operation = previousOperationText.innerText.split(" ")[1];
        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if (+value >=0 || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
})