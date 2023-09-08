/* Your Code Here */
function createEmployeeRecord([a, b, c, d]) {
    const array = [a, b, c, d];
    const [firstName, familyName, title, payPerHour] = array;
    const employeeRecord = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []

    }
    return employeeRecord;
}

function createEmployeeRecords(records) {
    const employeeRecordsArray = [];
    records.map(record => employeeRecordsArray.push(createEmployeeRecord(record)));
    return employeeRecordsArray;

}


function createTimeInEvent(dateStamp) {

    const dateTime = dateStamp.split(" ");
    const date = dateTime[0];
    const time = parseInt(dateTime[1]);

    this.timeInEvents.push({ type: "TimeIn", hour: time, date: date });
    return this;

}


function createTimeOutEvent(dateStamp) {

    const dateTime = dateStamp.split(" ");
    const date = dateTime[0];
    const time = parseInt(dateTime[1]);

    this.timeOutEvents.push({ type: "TimeOut", hour: time, date: date });
    return this;

}



function hoursWorkedOnDate(dateStamp) {
    const inWork = this.timeInEvents.find(employeeRecord => employeeRecord.date === dateStamp);
    const outWork = this.timeOutEvents.find(employeeRecord => employeeRecord.date === dateStamp);
    const hoursOfWork = (outWork.hour - inWork.hour) * 0.01;
    return hoursOfWork;

}


function wagesEarnedOnDate(dateStamp) {
    const hours = hoursWorkedOnDate.call(this, dateStamp);
    return hours * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(employeeRecord => employeeRecord.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    const payrolls = employeeRecords.map(employeeRecord => allWagesFor.call(employeeRecord));
    const sum = payrolls.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

