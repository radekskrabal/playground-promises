export class Timer {
    private id:string;
    private duration:number;

    public constructor() {
        this.id = new Date().getTime().toString();
    }

    public start():void {
        performance.mark(this.getStartMarkName());
    }

    public end():void {
        performance.mark(this.getEndMarkName());
        this.calculateDuration();

        performance.clearMarks(this.getStartMarkName());
        performance.clearMarks(this.getEndMarkName());
        performance.clearMeasures(this.getMeasureName());
    }

    public formatDuration(trunc:boolean = true):string {
        if (trunc === true) {
            // return Math.trunc(this.duration).toString();
            return Math.floor(this.duration).toString();
        }

        return this.duration.toString();
    }

    private getStartMarkName():string {
        return `start-${this.id}`;
    }

    private getEndMarkName():string {
        return `end-${this.id}`;
    }

    private getMeasureName():string {
        return `duration-${this.id}`;
    }

    private calculateDuration():void {
        performance.measure(this.getMeasureName(), this.getStartMarkName(), this.getEndMarkName());

        let measure = performance.getEntriesByType('measure')[0];
        this.duration = measure.duration;
    }
}