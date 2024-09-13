// ---------------Assignment Problem: 1. Solved------------------

function calculateTax(income, expense) {
    if (income !== 'number' || expense !== 'number' ||
        income < 0 || expense < 0 || expense > income) {
        return "Invalid Input";
    }
    else {
        const profit = income - expense;
        const tax = 0.20 * profit;
        return tax;
    }
}

// ---------------Assignment Problem: 2. Solved------------------

function sendNotification(email) {
    const atIndex = email.indexOf('@');
    const parts = email.split('@');
    const username = parts[0];
    const domainName = parts[1];
    if (!username || !domainName || atIndex === -1 || 
        typeof email.indexOf('@', atIndex + 1) !== -1) {
        return "Invalid Email";
    }
    return username + " sent you an email from " + domainName;
}

// ---------------Assignment Problem: 3. Solved------------------

function checkDigitsInName(digit) {
    if (typeof digit !== 'string') {
        return 'Invalid Input';
    }
    const hasDigits = /\d/.test(digit);
    return hasDigits;
}

// ---------------Assignment Problem: 4. Solved------------------

function calculateFinalScore(score) {
    if (typeof score !== "object") {
    return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = score;
    if (typeof name !== 'string' || 
        typeof testScore !== 'number' || 
        typeof schoolGrade !== 'number' || 
        typeof isFFamily !== 'boolean') {
        return 'Invalid Input';
    }

    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }
    return finalScore >= 80;
}

// ---------------Assignment Problem: 5. Solved------------------

function waitingTime(interviewTimes, serialNumber) {
    if (!Array.isArray(interviewTimes) || 
    typeof serialNumber !== 'number') {
    return 'Invalid Input';
    }

    let totalTimes = 0;
    for (const interview of interviewTimes) {
    totalTimes += interview;
    }

    let mySeriaNumber = serialNumber - interviewTimes.length - 1 ;
    if( mySeriaNumber <= 0){
    return 0
    }  

    let avarageTime = totalTimes / interviewTimes.length;
    return mySeriaNumber * Math.round(avarageTime)
}