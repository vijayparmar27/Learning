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

    remove(value) {

        let currentNode = this.root;
        let parantNode = null;

        if (!currentNode) {
            return null;
        }

        while (currentNode) {

            if (currentNode.value === value) {

                console.log(`---------- currentNode :: `, currentNode);

                if (currentNode.right === null) {

                    if (!parantNode) {
                        this.root = currentNode.left;
                    } else {

                        if (currentNode.value < parantNode.value) {
                            parantNode.left = currentNode.left
                        } else if (currentNode.value > parantNode.value) {
                            parantNode.right = currentNode.left
                        }
                    }


                } else if (currentNode.right.left === null) {
                    if (!parantNode) {
                        this.root = currentNode.right;
                    } else {
                        if (currentNode.value < parantNode.value) {
                            parantNode.left = currentNode.right
                        } else if (currentNode.value > parantNode.value) {
                            parantNode.right = currentNode.right
                        }
                    }
                } else {

                    let leftCurrentNode = currentNode.right.left;
                    let leftParantNode = currentNode.right;
                    while (leftCurrentNode.left !== null) {

                        leftParantNode = leftParantNode.left;
                        leftCurrentNode = leftCurrentNode.left;
                    }

                    if (leftCurrentNode.right !== null) {
                        leftParantNode.left = leftCurrentNode.right;
                    } else {
                        leftParantNode.left = null;
                    }

                    currentNode.value = leftCurrentNode.value;

                }


                break;

            } else if (currentNode.value > value) {
                currentNode = currentNode.left
                parantNode = currentNode

            } else if (currentNode.value < value) {
                currentNode = currentNode.right
                parantNode = currentNode
            }
        }

    }


   

}


const binnary = new BinarySearchTree();
binnary.insert(5);
binnary.insert(4);
binnary.insert(10);
binnary.insert(7);
binnary.insert(20);
binnary.insert(15);
binnary.insert(16);
binnary.insert(30);
binnary.insert(31);
binnary.insert(29);


console.log("-------->> binnary : ", JSON.stringify(binnary))
// const res = binnary.lookup(40);
// console.log("-------->> res : ", JSON.stringify(res))
