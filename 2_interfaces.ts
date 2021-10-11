interface Rect {
    readonly id: string
    color?: string 
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '123',
    size: {
        width:20,
        height:30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '1234',
    size: {
        width:10,
        height:20
    },
    // NO COLOR !!
}

rect2.color = 'black';

const rect3 = {} as Rect;
// OR
const rect4 = <Rect>{};

// ==================    VERERBUNG der Interfaces    hi the oop

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '13asd',
    size: {
        width:10,
        height:20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ================