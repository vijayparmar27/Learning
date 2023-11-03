class Tree {
    constructor() {
        this.root = undefined;
    }

    rotateLeft(node) {
        const root = node.right;

        const left = node;
        left.right = root.left;
        root.left = left;

        left.fixHeight();
        root.fixHeight();

        return root;
    }

    rotateRight(node) {
        const root = node.left;

        const right = node;
        right.left = root.right;
        root.right = right;

        right.fixHeight();
        root.fixHeight();

        return root;
    }

    balance(node) {
        node.fixHeight();

        if (node.getBalanceFactor() === 2 ) {
            if (node.right.getBalanceFactor() < 0) {
                node.right = this.rotateRight(node.right);
            }
            return this.rotateLeft(node);
        }

        if (node.getBalanceFactor() === -2) {
            if (node.left.getBalanceFactor() > 0) {
                node.left = this.rotateLeft(node.left);
            }
            return this.rotateRight(node);
        }

        return node;
    }

    insert(node) {
        if (!this.root) {
            this.root = node;
            return;
        }
        this.root = this._insert(this.root, node);
    }

    _insert(vertex, node) {
        if (node.key === vertex.key) {
            return vertex;
        }
        if (node.key < vertex.key) {
            if (! vertex.left) {
                vertex.left = node;
            } else {
                vertex.left = this._insert(vertex.left, node);
            }
        } else {
            if (! vertex.right) {
                vertex.right = node;
            } else {
                vertex.right = this._insert(vertex.right, node);
            }
        }

        return this.balance(vertex);
    }

    findMin(node) {
        return node.left ? this.findMin(node.left) : node;
    }

    removeMin(node) {
        if (! node.left) {
            return node.right;
        }
        node.left = this.removeMin(node.left);
        return this.balance(node);
    }

    remove(k) {
        this.root = this._remove(this.root, k);
        return this.root;
    }

    _remove(node, k) {
        if (! node) {
            return;
        }

        if (k < node.key) {
            node.left = this._remove(node.left, k);
        } else if (k > node.key) {
            node.right = this._remove(node.right, k);
        } else {
            const left = node.left;
            const right = node.right;

            if (! right) {
                return left;
            }

            const min = this.findMin(right);
            min.left = left;
            min.right = this.removeMin(right);

            node = this.balance(min);
        }

        return node;
    }

    find(k, node) {
        if (! node) {
            node = this.root;
        }

        if (k === node.key) {
            return node;
        } else if (k < node.key) {
            if (! node.left) {
                return;
            }
            return this.find(k, node.left);
        } else if (k > node.key) {
            if (! node.right) {
                return;
            }
            return this.find(k, node.right);
        }
    }
}

const binnay = new Tree();

binnay.insert(10)
binnay.insert(5)
binnay.insert(12)
binnay.insert(11)
binnay.insert(13)
binnay.insert(14)
console.dir(binnay, { depth: 10 })
