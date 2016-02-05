define(["require", "exports"], function (require, exports) {
    "use strict";
    class Timer {
        constructor() {
            this.id = new Date().getTime().toString();
        }
        start() {
            performance.mark(this.getStartMarkName());
        }
        end() {
            performance.mark(this.getEndMarkName());
            this.calculateDuration();
            performance.clearMarks(this.getStartMarkName());
            performance.clearMarks(this.getEndMarkName());
            performance.clearMeasures(this.getMeasureName());
        }
        formatDuration(trunc) {
            if (trunc === true) {
                // return Math.trunc(this.duration).toString();
                return Math.floor(this.duration).toString();
            }
            return this.duration.toString();
        }
        getStartMarkName() {
            return `start-${this.id}`;
        }
        getEndMarkName() {
            return `end-${this.id}`;
        }
        getMeasureName() {
            return `duration-${this.id}`;
        }
        calculateDuration() {
            performance.measure(this.getMeasureName(), this.getStartMarkName(), this.getEndMarkName());
            let measure = performance.getEntriesByType('measure')[0];
            this.duration = measure.duration;
        }
    }
    exports.Timer = Timer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVGltZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFBQTtRQUlJO1lBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlDLENBQUM7UUFFTSxLQUFLO1lBQ1IsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFTSxHQUFHO1lBQ04sV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUV6QixXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7WUFDaEQsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUM5QyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFTSxjQUFjLENBQUMsS0FBYztZQUNoQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakIsK0NBQStDO2dCQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEQsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLENBQUM7UUFFTyxnQkFBZ0I7WUFDcEIsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFFTyxjQUFjO1lBQ2xCLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBRU8sY0FBYztZQUNsQixNQUFNLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUVPLGlCQUFpQjtZQUNyQixXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUUzRixJQUFJLE9BQU8sR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBaERZLGFBQUssUUFnRGpCLENBQUEifQ==