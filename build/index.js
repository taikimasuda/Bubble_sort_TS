"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
/* const numbersCollection = new NumbersCollection([100, 32, -5, 40]);
numbersCollection.sort();
console.log(numbersCollection.data); */
/* const charactersCollection = new CharactersCollection('Xaaybz');
charactersCollection.sort();
console.log(charactersCollection.data); */
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(54);
linkedList.sort();
linkedList.print();
