class NodeList<T> {
    next?: NodeList<T>;

    constructor(public value: T) {}
}

class LinkedList<T> {
    private root?: NodeList<T>;
    private tail?: NodeList<T>;
    private length = 0;

    add(value: T) {
        const node = new NodeList(value);

        if(!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        } else {
            this.tail.next = node; // Link the new node
            this.tail = node; // Update the tail to the new node
        }
        this.length++;
    }

    insertAt (value: T, index: number) {
        
    }

    getNumberOfNodes() {
        return this.length;
    }

    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

const numbs = new LinkedList<number>();
numbs.add(1);
numbs.add(3);
numbs.add(5);
numbs.print();