class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.duplicateCount = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

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
                    break;
                }
                currentNode = currentNode.right;
                continue;
            } else if (currentNode.value > value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
                continue;
            } else if (currentNode.value === value) {
                currentNode.duplicateCount += 1;
                break;
            }
        }

        this._balanceTree();

    }

    _rightWeightTres(node) {

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

    }

    _leftWeightTres(node) {
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

    _balanceTree() {
        const data = this._unbalanceNode(this.root);

        if (data && data.length > 0) {
            const { side, node } = data[0]

            if (side < 0) {
                this._rightWeightTres(node);
            } else {
                this._leftWeightTres(node);
            }
        }
    }

    _checkLength(node) {
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

    _unbalanceNode(node) {

        let leftNode = node && node.left ? node.left : null;
        let rightNode = node && node.right ? node.right : null;

        const left = this._checkLength(node && node.left ? node.left : null);
        const right = this._checkLength(node && node.right ? node.right : null);

        if (Math.abs(left - right) > 1) {
            if (leftNode) {
                leftNode = this._unbalanceNode(leftNode)
            }
            if (rightNode) {
                rightNode = this._unbalanceNode(rightNode)
            }

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