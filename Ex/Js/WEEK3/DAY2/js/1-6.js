class A {
    constructor() {
        this.x = 100;
    }

    getX() {
        console.log(this.x);
    }
}

class B extends A {
    constructor() {
        super();//=>CALL继承
        this.y = 200;
    }

    getY() {
        console.log(this.y);
    }
}

var b = new B();