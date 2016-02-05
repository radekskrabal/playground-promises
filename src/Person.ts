import {Timer} from "./Timer";

export class Person {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public doSomething(): Promise<Function> {
        return new Promise((resolve: Function, reject: Function):void => {
            let iterations = 10000, // 10k
                timer = new Timer();

            timer.start();
            let el = this.getTextEl();
            for (let i = 0; i < iterations; i++) {
                let content,
                    text = new Date().getTime().toString();
                if (i % 3 === 0) {
                    content = `<b>${text}</b>`;
                } else if (i % 3 === 1) {
                    content = `<abbr>${text}</abbr>`;
                } else {
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

    public doSomethingElse(): Promise<Function> {
        return new Promise((resolve: Function, reject: Function): void => {
            let iterations = 100000,  // 100k
                timer = new Timer();

            timer.start();
            let el = this.getTextEl()[0];
            for (let i = 0; i < iterations; i++) {
                if (i % 2 === 0) {
                    el.classList.add('somecls');
                } else {
                    el.classList.remove('somecls');
                }
            }
            timer.end();

            // update UI
            this.createEl('p', '#second-result', `doSomethingElse took ${timer.formatDuration(true /* truncate */)} ms`);

            resolve();
        });
    }

    public doSomethingDifferent(): Promise<Function> {
        return new Promise((resolve: Function, reject: Function): void => {
            let iterations = 100000,  // 100k
                timer = new Timer();

            timer.start();
            let el = this.getTextEl()[0];
            for (let i = 0; i < iterations; i++) {
                if (i % 2 === 0) {
                    el.style.height = '10em';
                } else {
                    el.style.height = '20em';
                }
            }
            timer.end();

            // update UI
            this.createEl('p', '#third-result', `doSomethingDifferent took ${timer.formatDuration(true /* truncate */)} ms`);

            resolve();
        });
    }

    public doSomethingWhichFails(): Promise<Function> {
        return new Promise((resolve: Function, reject: Function): void => {
            reject();
        });
    }

    public saySorry(): void {
        // update UI
        this.createEl('p', '#sorry', 'Sorry to see you go!');
    }

    private createEl(tag: string, id: string, text: string): any {
        return $('body').append(`<${tag} id="${id}">${text}</${tag}>`);
    }

    private getTextEl(): any {
        return $('#text');
    }
}