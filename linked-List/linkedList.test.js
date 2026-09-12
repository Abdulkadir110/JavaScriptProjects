
const {LinkedList} = require('./linkedList');

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
       list = new LinkedList();
    });
    test('test that a linked list created is empty', () => {
        expect(list.head).toBeNull();
        expect(list.size).toEqual(0);
    });
    test('that a node can be added to the linked list', () => {
        //When
        list.append(10);
        //assert that
        expect(list.size).toEqual(1);
    });
    test('that a node can be prepend to the linked list', () => {
        //When
        list.append(10);
        list.append(7);
        list.prepend(5);
        //assert that
        // expect(list.size).toEqual(3);
        expect(list.head.data).toEqual(5);
    })
    test('that a node can be inserted at an index to the linked list', () => {
        //When
        list.append(10);
        list.append(5);
        list.append(7);
        list.insertAt(8, 1);
        //assert that
        expect(list.size).toEqual(4);
    })
    test('that a node can be inserted at an index to the linked list and the head remains', () => {
        //When
        list.append(10);
        list.append(5);
        list.append(7);
        list.insertAt(8, 1);
        //assert that
        expect(list.head.data).toEqual(10);
        expect(list.size).toEqual(4);
    })
    test('that a node can be inserted at zero to the linked list', () => {
        //When
        list.append(10);
        list.append(5);
        list.append(7);
        list.insertAt(8, 0);
        //assert that
        expect(list.head.data).toEqual(8);
        expect(list.size).toEqual(4);
    })
    test('that i insert node at an index below zero and above size, exception was thrown', () => {
        //When
        list.append(10);
        list.append(5);
        list.append(7);
        expect(() => list.insertAt(5,-1)).toThrow();
        expect(() => list.insertAt(5,4)).toThrow();

    })
    test('that a node can be popped from the linked list', () => {
        //When
        list.append(10);
        list.append(5);
        list.append(7);
        list.pop();
        //assert that
        expect(list.size).toEqual(2);
    })
    test('that a head can be popped from the linked list', () => {
        //When
        list.append(10);
        list.append(5);
        list.append(7);
        list.popFirst();
        //assert that
        expect(list.size).toEqual(2);
        expect(list.head.data).toEqual(5)
    });
    test('that i popped a node at a particular index', () => {
        //When
        list.append(10);
        list.append(5);
        list.append(7);
        list.append(9);
        list.append(5);
        list.popAt(2)
        //assert that
        expect(list.size).toEqual(4);
        list.popAt(2);
        expect(list.size).toEqual(3)
        list.popAt(0)
        expect(list.head.data).toEqual(5)
    })
    test('that i checked the data of a node at a particular index', () => {
        //When
        list.append(10);
        list.append(5);
        list.append(7);
        list.append(9);
        list.append(5);

        //assert
        expect(list.peekAt(2)).toEqual(7)
        expect(list.peekAt(1)).toEqual(5)
    })
    test('that i checked the data of a node at an index below zero, throws exception', () => {
        //When
        list.append(10);
        list.append(5);
        list.append(7);
        list.append(9);
        list.append(5);

        //assert
        expect(() => list.peekAt(-1)).toThrow()
    })
});
