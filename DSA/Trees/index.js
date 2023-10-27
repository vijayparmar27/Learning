class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.duplicateCount = 1;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let treesInsert = this.root;

        while (treesInsert) {

            if (treesInsert.value < value) {
                if (treesInsert.right === null) {
                    treesInsert.right = newNode;
                    break;
                }
                treesInsert = treesInsert.right;
                continue;
            } else if (treesInsert.value > value) {
                if (treesInsert.left === null) {
                    treesInsert.left = newNode;
                    break;
                }
                treesInsert = treesInsert.left;
                continue;
            } else if (treesInsert.value === value) {
                treesInsert.duplicateCount += 1;
                break;
            }

        }

        // console.log(`------- this :: this.root :: `,this.root)

    }

    lookup(value) {
        let currentNode = this.root;
        while (currentNode) {
            console.log(`-------->> currentNode :: `, currentNode)
            if (currentNode.value === value) {
                return currentNode;
            } else {
                currentNode.value > value ?
                    currentNode = currentNode.left : currentNode = currentNode.right
            }
        }
        return false;
    }

    remove(){
        
    }


}


const binnary = new BinarySearchTree();
binnary.insert(30);
binnary.insert(20);
binnary.insert(40);
// binnary.insert(50);
// binnary.insert(45);
// binnary.insert(10);
// binnary.insert(35);
binnary.insert(40);
binnary.insert(40);
console.log("-------->> binnary : ", JSON.stringify(binnary))
const res = binnary.lookup(40);
console.log("-------->> res : ", JSON.stringify(res))
