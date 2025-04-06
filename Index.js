import { Calculator, delayedMessage, showDelayedMessage, getCapitalMap} from './Tools.js';

// Class
const calc = new Calculator();
console.log('Add:', calc.add(10,5));
console.log('multiply:', calc.multiply(4,3));

// promise
delayedMessage('Hello, promise!', 1000). then(console.log);

// async
showDelayedMessage('Hello, async!', 1500).then(console.log);

// map
const capitalMap = getCapitalMap();
for (const [country, capital] of capitalMap) {
    console.log(`${country} => ${capital}`);
}