function* myGeneratorCreator() {
    yield 'string one';
    yield 'string two';

    return 'string three';
}

function f() {
    const myGenerator = myGeneratorCreator();

    console.log(myGenerator.next()); // { value: 'string one', done: false }
    console.log(myGenerator.next()); // { value: 'string two', done: false }
    console.log(myGenerator.next()); // { value: 'string three', done: true }
}

f();

