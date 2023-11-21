class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x},${this.y})`;
    }
}

class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    toString() {
        return `${this.start.toString()}->${this.end.toString()}`;
    }

}


class VectorObject extends Array { };

class VectorRectangle extends VectorObject {

    constructor(x, y, width, height) {
        super();

        this.push(new Line(new Point(x, y), new Point(x + width, y)));
        this.push(new Line(new Point(x + width, y), new Point(x + width, y + height)));
        this.push(new Line(new Point(x, y), new Point(x, y + height)));
        this.push(new Line(new Point(x, y + height), new Point(x + width, y + height)));

        // console.log(`----- VectorRectangle :: this ::`, this);

    }

}

let vectorObjects = [
    new VectorRectangle(1, 1, 10, 10),
    new VectorRectangle(3, 3, 6, 6)
];

let drawPoint = function (point) {
    process.stdout.write('.');
};

class LineToPointAdapter extends Array {

    constructor(line) {
        super();
        console.log(`--- LineToPointAdapter :: line :: `, line);
        console.log(`${LineToPointAdapter.count++}: Generating ` +
            `points for line ${line.toString()} (no caching)`);

        let left = Math.min(line.start.x, line.end.x);
        let right = Math.max(line.start.x, line.end.x);
        let top = Math.min(line.start.y, line.end.y);
        let bottom = Math.max(line.start.y, line.end.y);

        // console.log(`--- LineToPointAdapter :: left :: `, left);
        // console.log(`--- LineToPointAdapter :: right :: `, right);
        // console.log(`--- LineToPointAdapter :: top :: `, top);
        // console.log(`--- LineToPointAdapter :: bottom :: `, bottom);
        
        if (right - left === 0) {
            for (let y = top; y <= bottom; ++y) {
                this.push(new Point(left, y));
            }
        }
        else if (line.end.y - line.start.y === 0) {
            for (let x = left; x <= right; ++x) {
                this.push(new Point(x, top));
            }
        }



    }

}
LineToPointAdapter.count = 0;


const drawPoints = () => {
    for (let vo of vectorObjects) {
        for (let line of vo) {
            let adapter = new LineToPointAdapter(line);
            // console.log(`---------- adapter :: `, adapter);
            adapter.forEach(drawPoint);
        }
    }
}
drawPoints()
// console.log(`----- vectorObjects ::`, vectorObjects);
// const value = new Line(1,2);

// console.log(`--- value: ${value.toString()}`)