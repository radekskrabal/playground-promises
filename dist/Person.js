define(["require", "exports", "./Timer"], function (require, exports, Timer_1) {
    "use strict";
    class Person {
        constructor(name) {
            this.name = name;
        }
        doSomething() {
            return new Promise((resolve, reject) => {
                let iterations = 10000, // 10k
                timer = new Timer_1.Timer();
                timer.start();
                let el = this.getTextEl();
                for (let i = 0; i < iterations; i++) {
                    let content, text = new Date().getTime().toString();
                    if (i % 3 === 0) {
                        content = `<b>${text}</b>`;
                    }
                    else if (i % 3 === 1) {
                        content = `<abbr>${text}</abbr>`;
                    }
                    else {
                        content = `<i>${text}</i>`;
                    }
                    el.html(content);
                }
                timer.end();
                // update UI
                this.createEl('p', '#first-result', `doSomething took ${timer.formatDuration(true /* truncate */)} ms`);
                resolve();
            });
        }
        doSomethingElse() {
            return new Promise((resolve, reject) => {
                let iterations = 100000, // 100k
                timer = new Timer_1.Timer();
                timer.start();
                let el = this.getTextEl()[0];
                for (let i = 0; i < iterations; i++) {
                    if (i % 2 === 0) {
                        el.classList.add('somecls');
                    }
                    else {
                        el.classList.remove('somecls');
                    }
                }
                timer.end();
                // update UI
                this.createEl('p', '#second-result', `doSomethingElse took ${timer.formatDuration(true /* truncate */)} ms`);
                resolve();
            });
        }
        doSomethingDifferent() {
            return new Promise((resolve, reject) => {
                let iterations = 100000, // 100k
                timer = new Timer_1.Timer();
                timer.start();
                let el = this.getTextEl()[0];
                for (let i = 0; i < iterations; i++) {
                    if (i % 2 === 0) {
                        el.style.height = '10em';
                    }
                    else {
                        el.style.height = '20em';
                    }
                }
                timer.end();
                // update UI
                this.createEl('p', '#third-result', `doSomethingDifferent took ${timer.formatDuration(true /* truncate */)} ms`);
                resolve();
            });
        }
        doSomethingWhichFails() {
            return new Promise((resolve, reject) => {
                reject();
            });
        }
        saySorry() {
            // update UI
            this.createEl('p', '#sorry', 'Sorry to see you go!');
        }
        createEl(tag, id, text) {
            return $('body').append(`<${tag} id="${id}">${text}</${tag}>`);
        }
        getTextEl() {
            return $('#text');
        }
    }
    exports.Person = Person;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc29uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1BlcnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUVBO1FBR0ksWUFBbUIsSUFBWTtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBRU0sV0FBVztZQUNkLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQWlCLEVBQUUsTUFBZ0I7Z0JBQ25ELElBQUksVUFBVSxHQUFHLEtBQUssRUFBRSxNQUFNO2dCQUMxQixLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztnQkFFeEIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNkLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDMUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDbEMsSUFBSSxPQUFPLEVBQ1AsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxPQUFPLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQztvQkFDL0IsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixPQUFPLEdBQUcsU0FBUyxJQUFJLFNBQVMsQ0FBQztvQkFDckMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixPQUFPLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQztvQkFDL0IsQ0FBQztvQkFFRCxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNy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