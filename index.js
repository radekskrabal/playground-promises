"use strict";

class Timer {
    // private id = null;
    // private duration = null;

    constructor() {
        this.id = new Date().getTime().toString();
    }

    // public
    start() {
        performance.mark(this.getStartMarkName());
    }

    // public
    end() {
        performance.mark(this.getEndMarkName());
        this.calculateDuration();

        performance.clearMarks(this.getStartMarkName());
        performance.clearMarks(this.getEndMarkName());
        performance.clearMeasures(this.getMeasureName());
    }

    // public
    getDuration(trunc) {
        if (trunc !== false) {
            return Math.trunc(this.duration);
        }

        return this.duration;
    }

    // private
    getStartMarkName() {
        return `start-${this.id}`;
    }

    // private
    getEndMarkName() {
        return `end-${this.id}`;
    }

    // private
    getMeasureName() {
        return `duration-${this.id}`;
    }

    // private
    calculateDuration() {
        performance.measure(this.getMeasureName(), this.getStartMarkName(), this.getEndMarkName());

        let measure = performance.getEntriesByType('measure')[0];
        this.duration = measure.duration;
    }
}

class Person {
    constructor(name) {
        this.name = name;
    }

    doSomething() {
        let iterations = 100000,
            timer = new Timer(); // 100k

        timer.start();
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
        timer.end();
        console.info(`doSomething took ${timer.getDuration()} ms`);
    }

    doSomethingElse() {
        let iterations = 1000000,  // 1M
            timer = new Timer();

        timer.start();
        for (let i = 0; i < iterations; i++) {
            let el = $('#text')[0];
            if (i % 2 === 0) {
                el.classList.add('somecls');
            } else {
                el.classList.remove('somecls');
            }
        }
        timer.end();
        console.info(`doSomethingElse took ${timer.getDuration()} ms`);
    }
}

$(document).ready(function() {
    let worker = new Person('Long Running Worker');
    worker.doSomething();
    worker.doSomethingElse();
});