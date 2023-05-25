//-> Define a generic class, List, which holds an array of generic type T
class List<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    get(index: number): T {
        return this.items[index];
    }

    getAll(): T[] {
        return this.items;
    }
}

//-> Define a generic interface, Comparator
// defines what every comparator needs. -> interface
interface Comparator<T> {
    compare(a: T, b: T): number;
}

//-> Define a generic class, Sorter, with two generic types, T and K
class Sorter<T, K extends Comparator<T>> {
    constructor(private comparator: K) {}

    sort(data: T[]): T[] {
        return data.sort(this.comparator.compare);
    }
}

//-> Define a class, NumberComparator, which implements the Comparator interface for numbers
class NumberComparator implements Comparator<number> {
    compare(a: number, b: number): number {
        return a - b;
    }
}

//-> Define a class, StringComparator, which implements the Comparator interface for strings
class StringComparator implements Comparator<string> {
    compare(a: string, b: string): number {
        return a.localeCompare(b);
    }
}

//-> Let's test our classes
let numberList = new List<number>();

numberList.add(5);
numberList.add(2);
numberList.add(9);

console.log(numberList.getAll());  // Output: [5, 2, 9]

let stringList = new List<string>();

stringList.add('c');
stringList.add('a');
stringList.add('b');

console.log(stringList.getAll());  // Output: ['c', 'a', 'b']

let numberSorter = new Sorter(new NumberComparator());
let sortedNumbers = numberSorter.sort(numberList.getAll());

console.log(sortedNumbers);  // Output: [2, 5, 9]

let stringSorter = new Sorter(new StringComparator());
let sortedStrings = stringSorter.sort(stringList.getAll());

console.log(sortedStrings);  // Output: ['a', 'b', 'c']
