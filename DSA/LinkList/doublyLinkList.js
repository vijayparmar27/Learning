class Node {
    constructor(value) {
        this.nodeObj = {
            value: value,
            previous: null,
            next: null
        }
    }
}

class DoublyLinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value).nodeObj;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this.head
    }

    prepend(value) {
        const newNode = new Node(value).nodeObj;
        this.head.previous = newNode
        newNode.next = this.head
        this.head = newNode;
        this.length++;
    }

    printList() {
        let currentNode = this.head;
        const array = [];
        while (currentNode) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(`------ printList :: array ::`, array)
    }

    insert(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index > this.length - 1) {
            this.push(value);
            return;
        }

        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode) {
            if (index === currentIndex) {
                console.log(`---- currentNode :: `, currentNode)
                const newNode = new Node(value).nodeObj;

                newNode.next = currentNode;
                newNode.previous = currentNode.previous

                currentNode.previous.next = newNode;
                this.length++;
                break;

            }
            currentIndex++;
            currentNode = currentNode.next;

        }

    }

}

const doublyLinkList = new DoublyLinkList();

// console.log("------- doublyLinkList ::  ", JSON.stringify(doublyLinkList))

doublyLinkList.push(1)
doublyLinkList.push(2)
doublyLinkList.push(3)
doublyLinkList.prepend(4)
doublyLinkList.insert(12, 4)
doublyLinkList.printList()
