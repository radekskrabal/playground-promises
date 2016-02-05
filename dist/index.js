define(["require", "exports", "./Person"], function (require, exports, Person_1) {
    "use strict";
    $(document).ready(function () {
        let worker = new Person_1.Person('Long Running Pal');
        worker.doSomething()
            .then(() => worker.doSomethingElse())
            .then(() => worker.doSomethingDifferent())
            .then(() => worker.doSomethingWhichFails())
            .catch(() => worker.saySorry());
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFQSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2QsSUFBSSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsV0FBVyxFQUFFO2FBQ2YsSUFBSSxDQUFDLE1BQU0sTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3BDLElBQUksQ0FBQyxNQUFNLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxNQUFNLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2FBQzFDLEtBQUssQ0FBQyxNQUFNLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDIn0=