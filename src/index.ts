import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

/* const numbersCollection = new NumbersCollection([100, 32, -5, 40]);
numbersCollection.sort();
console.log(numbersCollection.data); */


/* const charactersCollection = new CharactersCollection('Xaaybz');
charactersCollection.sort();
console.log(charactersCollection.data); */

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(54);

linkedList.sort();
linkedList.print(); 