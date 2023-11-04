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
    count = 0;
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

        console.log(`========================================= `, value)
        const data = this._lengthDiff(this.root);

        // console.log(`----- data :: `, data)
        if (data && data.length > 0) {
            console.log(`---------------------------------------`)
            console.dir(data[0], { depth: 10 });
            console.log(`---------------------------------------`)

            const { side, node } = data[0]
            if (side < 0) {
                // right weight
                if (node && node?.right?.left?.right || node?.right?.left?.left) {

                    const newNode = new Node(node.right.value);
                    newNode.right = node.right.right
                    newNode.left = node.right.left.right ? node.right.left.right : null;

                    node.right.value = node.right.left.value;
                    node.right.left = node.right.left.left ? node.right.left.left : null;
                    node.right.right = newNode;
                }

                const newNode = new Node(node.value);
                newNode.left = node.left;
                newNode.right = node.right.left;

                node.value = node.right.value;
                node.left = newNode;
                node.right = node.right.right


            } else {
                // left weight

                if (node && node?.left?.right?.left || node?.left?.right?.right) {
                    const newNode = new Node(node.left.value);
                    newNode.left = node.left.left
                    newNode.right = node.left.right.left ? node.left.right.left : null

                    node.left.value = node.left.right.value;
                    node.left.right = node.left.right.right ? node.left.right.right : null;
                    node.left.left = newNode
                }

                const newNode = new Node(node.value);
                newNode.right = node.right
                newNode.left = node.left.right
                node.value = node.left.value
                node.right = newNode;
                node.left = node.left.left;
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
        this.count++;

        // console.log(`----- count :: `, this.count)
        // console.log(`----- node :: `, node)

        let leftNode = node && node.left ? node.left : null;
        let rightNode = node && node.right ? node.right : null;

        const left = this._checkLength(node && node.left ? node.left : null);
        const right = this._checkLength(node && node.right ? node.right : null);

        // console.log(`----- left :: `, left)
        // console.log(`----- right :: `, right)


        if (Math.abs(left - right) > 1) {
            if (leftNode) {
                leftNode = this._lengthDiff(leftNode)
            }
            if (rightNode) {
                rightNode = this._lengthDiff(rightNode)
            }

            // return { node, side: left - right };
            leftNode = leftNode ? leftNode : []
            rightNode = rightNode ? rightNode : []
            return [...leftNode, ...rightNode, { node, side: left - right }];
        }

        if (!leftNode && !rightNode) {
            return null;
        }


    }


}

const avlTree = new AVLTree();


avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(60);
// avlTree.insert(20);
// avlTree.insert(35);
// avlTree.insert(34);
// avlTree.insert(25);
// avlTree.insert(26);

// const val = avlTree.lengthDiff(avlTree.root)
// const val = avlTree.checkLength(avlTree.root)


// console.log("---- val :: ", val)
console.dir(avlTree, { depth: 10 });