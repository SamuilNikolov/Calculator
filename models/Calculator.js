function Calculator(leftOperand, operator, rightOperand) {
    this.leftOperand = leftOperand;
    this.operator = operator;
    this.right = leftOperand;
    this.calculate = function () {
        let result = 0;
        switch (this.operator){
            case '+':
                result = leftOperand + rightOperand;
                break;
            case '-':
                result = leftOperand - rightOperand;
                break;case '*':
            result = leftOperand * rightOperand;
            break;case '/':
            result = leftOperand / rightOperand;
            break;
            default: break;
        }
        return result;
    }
}
module.exports = Calculator;
