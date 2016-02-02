"use strict";

class Person {
    constructor(name) {
        this.name = name;
    }

    doSomething() {
        let iterations = 1000000; // 1M

        performance.mark('start');
        for (let i = 0; i < iterations; i++) {
            let content,
                text = new Date().getTime().toString();
            if (i % 3 === 0) {
                content = `<b>${text}</b>`;
            } else if (i % 3 === 1) {
                content = `<u>${text}</u>`;
            } else {
                content = `<i>${text}</i>`;
            }

            $('#text').html(content);
        }
        performance.mark('end');
        performance.measure('duration', 'start', 'end');
        let measure = performance.getEntriesByType('measure')[0],
            duration = measure.duration;
        console.info(`Do something took ${duration} ms`);

        performance.clearMarks();
        performance.clearMeasures();
    }
}

$(document).ready(function() {
    let worker = new Person('Long Running Worker');
    worker.doSomething();
});