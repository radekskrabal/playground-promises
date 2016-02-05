import {Person} from "./Person";

$(document).ready(function () {
    let worker = new Person('Long Running Pal');
    worker.doSomething()
        .then(() => worker.doSomethingElse())
        .then(() => worker.doSomethingDifferent())
        .then(() => worker.doSomethingWhichFails())
        .catch(() => worker.saySorry());
});

