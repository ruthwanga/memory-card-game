function ageTest() {
    event.preventDefault();
    var currDate = new Date();
    // gets the current date
    console.log('Current Date is: ' + currDate);

    var dob = document.getElementById('dob').value;
    // dob is a string

    console.log(dob);
    var currMonth = currDate.getMonth() + 1;
    // current month ** add 1; months are 0-based by UTC
    
    var currDay = currDate.getDate();
		console.log('The current day is: ', currDay);
    
    var currYear = currDate.getFullYear();
    
    var birthYear = parseInt(dob.slice(0, 4));
		console.log(`The birth year is ${birthYear}`);
    var birthMonth = parseInt(dob.slice(5, 7));
		console.log(`The birth month is ${birthMonth}`);
    var birthDay = parseInt(dob.slice(8,10));
		console.log(`The birth day is ${birthDay}`)
		console.log(dob);
    
    var yearTest = currYear - birthYear;
    var monthTest = currMonth - birthMonth;
    var dayTest = currDay - birthDay;

    console.log(monthTest);
    console.log(dayTest);


    var output = document.getElementById('output');
    var granted = "Access Granted";
    var denied = "Access Denied!";

	const accessGranted = ()=> {
        document.getElementById("output").classList.remove('denied');
        document.getElementById("output").classList.add('granted');
    }
	
    var validate = document.getElementById('checked');
    if (validate.checked) {

        if(yearTest > 18) {
            output.innerText = granted;
						accessGranted();
            location.href="index.html"
        } else if (yearTest === 18) {
            if (monthTest > 0) {
                output.innerText = granted;
								accessGranted();
                location.href="index.html"
            } else if (monthTest === 0) {
                if(dayTest >= 0) {
                    output.innerText = granted;
										accessGranted();
                    location.href="index.html"
                } else {
                    output.innerText = denied;
										output.addClass = "denied"
                }
            } else {
                output.innerText = denied;
								output.addClass = "denied"
            }
        } else {
            output.innerText = denied;
						output.addClass = "denied"
        }
    } else {
        output.innerText = "Please check box!"
    }
}