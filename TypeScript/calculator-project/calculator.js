// data:
// initial amount
// annual contribution
// expected return
// duration
function calculatorInvestment(data) {
    // Destructure the input data using javaScript destructuring
    var initialAmount = data.initialAmount, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration;
    // Validate the input data
    if (initialAmount <= 0) {
        return "Initial amount must be greater than zero.";
    }
    if (annualContribution < 0) {
        return "Annual contribution must be at least zero.";
    }
    if (expectedReturn <= 0) {
        return "Expected return must be greater than zero.";
    }
    // Calculate investment in year 0
    var totalAmount = initialAmount;
    var totalContribution = 0;
    var totalInterestEarned = 0;
    var annualResult = [];
    for (var i = 0; i < duration; i++) {
        totalAmount += totalAmount * expectedReturn + annualContribution; // Compound interest
        totalContribution += annualContribution; // Add annual contribution
        totalInterestEarned = totalAmount - initialAmount - totalContribution; // Calculate interest earned
        // Store the result for the year
        annualResult.push({
            year: "Year ".concat(i + 1),
            totalAmount: totalAmount,
            totalContribution: totalContribution,
            totalInterestEarned: totalInterestEarned
        });
    }
    return annualResult;
}
function printResults(results) {
    var _a, _b, _c, _d;
    // print (output) the result data
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (var i = 0; i < results.length; i++) {
        console.log("".concat((_a = results[i]) === null || _a === void 0 ? void 0 : _a.year, ": \n            Total Amount: $").concat((_b = results[i]) === null || _b === void 0 ? void 0 : _b.totalAmount.toFixed(2), ", \n            Total Contribution: $").concat((_c = results[i]) === null || _c === void 0 ? void 0 : _c.totalContribution.toFixed(2), ",\n            Total Interest Earned: $").concat((_d = results[i]) === null || _d === void 0 ? void 0 : _d.totalInterestEarned.toFixed(2)));
    }
}
var myInvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
};
var myResults = calculatorInvestment(myInvestmentData);
printResults(myResults);
