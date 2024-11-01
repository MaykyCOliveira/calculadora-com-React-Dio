// src/utils/calculate.js
export function calculate(expression) {
    try {
        return eval(expression);  // Para simplificação, usamos eval
    } catch {
        return "Erro";
    }
}
