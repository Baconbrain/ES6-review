// class
export class Calculator {
    constructor () {
        this.result = 0;
    }
    add(a, b){
        this.result = a + b;
        return this.result;
    }
    multiply(a, b){
        this.result = a * b;
        return this.result;
    }
}

// Promise
export const delayedMessage = (msg, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Delayed: ${msg}`);
        }, delay);
    });
};

// Async 
export async function showDelayedMessage(msg, delay) {
    const result = await delayedMessage(msg, delay);
    return result;
}

// Map
export const getCapitalMap = () => {
    const countryCapital = new Map();
    countryCapital.set("Nigeria", "Abuja");
    countryCapital.set("USA", "Washington D.C.");
    countryCapital.set("UK", "London");
    return countryCapital;
};