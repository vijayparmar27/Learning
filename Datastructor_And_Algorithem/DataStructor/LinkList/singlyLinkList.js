class Node {
    nodeObj = {}
    constructor(value) {
        this.nodeObj = {
            value: value,
            next: null
        }
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value).nodeObj;
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    get() {

        const arraay = [];
        let arr = this.head;

        while (arr) {
            arraay.push(arr.value);
            arr = arr.next
        }

        console.log("------->> printValue :: arraay :: ", arraay)
    }

    getByIndex(index) {

        let key = this.head
        let indexCount = 0;

        if (index < 0 || index > this.length) return null;

        while (key) {
            if (index === indexCount) {
                break;
            }
            indexCount++;
            key = key.next
        }


        return key.value

    }

    prepend(value) {
        const newNode = new Node(value).nodeObj;
        newNode.next = this.head
        this.head = newNode;
        this.length++;
    }

    insert(value, index) {

        let key = this.head
        let indexCount = 0;

        if (index === 0) {
            return this.prepend(value)
        }

        if (index > this.length - 1) {
            return this.push(value);
        }

        while (key) {

            if (index - 1 === indexCount) {
                const newNode = new Node(value).nodeObj;
                newNode.next = key.next
                key.next = newNode;
                break;
            }

            indexCount++;
            key = key.next
        }

        this.length++;

    }

    remove(index) {

        let data = this.head;
        let indexCount = 0;
        console.log("------- data ", data)

        if (index > this.length - 1 || index < 0) {
            console.log(`---- index not exists.....`)
            return;
        }

        while (data) {

            if (index - 1 === indexCount || index === 0) {

                console.log("------- indexCount ", indexCount)
                console.log("------- data ", data)

                const newData = index === 0 ?
                    this.head.next : data.next.next

                console.log("------- newData ", newData)

                index === 0 ?
                    this.head = newData : data.next = newData

                break;

            }

            indexCount++;
            data = data.next

        }

    }

    // reverse() {
    //     if (!this.head.next) {
    //         return this.head;
    //     }
    //     let first = this.head;
    //     this.tail = this.head;
    //     let second = first.next;
    //     while (second) {
    //         const temp = second.next;
    //         second.next = first;
    //         first = second;
    //         second = temp;
    //     }
    //     this.head.next = null;
    //     this.head = first;
    //     return this.get();
    // }

    reverse() {

        if (!this.head.next) {
            return;
        }

        let currentNode = this.head.next

        // this.tail = this.head
        // this.tail.next = null;

        let object = this.head;

        while (currentNode) {

            const newNode = new Node(currentNode.value).nodeObj;
            newNode.next = object;
            object = newNode
            currentNode = currentNode.next;

        }
        console.log("---- this.object :: ", object)

        // this.head = object;
        console.log("---- this.head :: ", this.head)
        console.log("---- this.tail :: ", this.tail)

    }

}

// const nodeValue = new Node("123");
// console.log("nodeValue: " , nodeValue.nodeObj)

const linkList = new LinkList();
linkList.push(1)
linkList.push(2)
linkList.push(3)
// linkList.push(4)
// linkList.insert(23, 5);
// linkList.prepend(4)
// linkList.remove(1)
// linkList.getByIndex(0);
linkList.reverse();
linkList.push(4)
linkList.prepend(10)

linkList.get();



// console.log("linkList: ", JSON.stringify(linkList))


