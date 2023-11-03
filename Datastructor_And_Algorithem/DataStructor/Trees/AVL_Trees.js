class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.duplicateCount = 1;

        // this.leftLength = null;
        // this.rightLength = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
        this.leftNodeLength = 0;
        this.rightNodeLength = 0;
    }
    // let currentNode = this.root
    // while () {

    // }

    insert(value) {
        let currentNode = this.root
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        while (currentNode) {
            if (currentNode.value < value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    this.rightNodeLength++;
                    break;
                }
                currentNode = currentNode.right;
                continue;
            } else if (currentNode.value > value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    this.leftNodeLength++;
                    break;
                }
                currentNode = currentNode.left;
                continue;
            } else if (currentNode.value === value) {
                currentNode.duplicateCount += 1;
                break;
            }
        }

        const data = this._lengthDiff(this.root);

        if (data) {
            // console.log(`----- data :: `, data)
            console.dir(data, { depth: 10 });

            const { side, node } = data
            if (side < 0) {
                // right weight
                if (node.right.right === null && node.right.left) {
                    const temp = node.right.left.value;
                    // const newNode = new Node(node.right.value);
                    // newNode.
                    node.right.right = new Node(node.right.value);
                    node.right.right.left = node.right.left.right
                    node.right.value = temp;
                    node.right.left = null;
                    console.log(`--------`)
                }
                console.dir(data, { depth: 10 });

                console.dir(data, { depth: 10 });
                const temp = node.value

                const newNode = new Node(temp);
                newNode.left = node.left
                newNode.right = node.right.left
                node.right.left = null;

                node.value = node.right.value;
                node.right = node.right.right;
                node.left = newNode;


                console.dir(data, { depth: 10 });


            } else {
                // left weight
            }

        }


    }

    _checkLength(node) {
        // console.log(`--------- node :: 1 ::`, node)
        // console.dir(node, { depth: 10 });

        if (node === null) {
            return 0;
        }

        if (node && node.left === null && node.right === null) {

            return 1;
        }

        let leftNode = 1 + this._checkLength(node.left)
        let rightNode = 1 + this._checkLength(node.right)

        return leftNode > rightNode ? leftNode : rightNode
    }

    _lengthDiff(node) {
        const left = this._checkLength(node && node.left ? node.left : null);
        const right = this._checkLength(node && node.right ? node.right : null);

        if (Math.abs(left - right) > 1) {

            return { node, side: left - right };
        }

        let leftNode = node && node.left ? node.left : null;
        let rightNode = node && node.right ? node.right : null;

        if (leftNode || rightNode) {
            if (leftNode) {
                node = this._lengthDiff(leftNode);
            }
            if (rightNode) {
                node = this._lengthDiff(rightNode);
            }
            return node
        }

    }


}

const avlTree = new AVLTree();


// avlTree.insert(10);
// avlTree.insert(5);
// avlTree.insert(12);
// avlTree.insert(11);
// avlTree.insert(13);
// avlTree.insert(14);
// avlTree.insert(20);

avlTree.insert(30);
avlTree.insert(20);
// avlTree.insert(21);
// // avlTree.insert(10);
// avlTree.insert(34);
avlTree.insert(40);
avlTree.insert(35);
avlTree.insert(34);
avlTree.insert(36);
// avlTree.insert(45);

// const val = avlTree.lengthDiff(avlTree.root)
// const val = avlTree.checkLength(avlTree.root)


// console.log("---- val :: ", val)
console.dir(avlTree, { depth: 10 });