/**
 * if S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program
 * Because Square is a type of Rectangle , it should be able to replace Rectangle objects without causing any issues.
 */

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() { return this._width; };
    get height() { return this._height; };

    set width(value) { this._width = value; };
    set height(value) { this._height = value; };

    get area() {
        const area = this._height * this._width;
        // console.log(`---- rectangle :: area ::  `, area);
        return area;
    }

    toString() {
        console.log(`${this._width}*${this._height}`)
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }

    set width(value) { this._width = this._height = value; };

    set height(value) { this._width = this._height = value; };

    get width() { return this._width; };
    get height() { return this._height; };
}

const useIt = (rc) => {

    const width = rc.width;
    rc.height = 10;

    console.log(
        `-- Expected area Of ${10 * width}`,
        `--- got ${rc.area}`,
    )
}

let rc = new Rectangle(2, 3);

// console.log(`------ rc :`,rc.width)
// rc.toString();
useIt(rc)

let sq = new Square(5);
useIt(sq)

// sq.toString();

// sq.width = 10;
// sq.toString();
