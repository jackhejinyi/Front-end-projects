// data:
// initial amount
// annual contribution
// expected return
// duration

type InvestmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
}

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContribution: number;
    totalInterestEarned: number;
}

type calculatorResult = InvestmentResult[] | string;

function calculatorInvestment(data: InvestmentData): calculatorResult {
    // Destructure the input data using javaScript destructuring
    let {initialAmount, annualContribution, expectedReturn, duration} = data;

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
    let totalAmount = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    let annualResult: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {

        totalAmount += totalAmount * expectedReturn + annualContribution; // Compound interest
        totalContribution += annualContribution; // Add annual contribution
        totalInterestEarned = totalAmount - initialAmount - totalContribution; // Calculate interest earned

        // Store the result for the year
        annualResult.push({
            year: `Year ${i + 1}`,
            totalAmount: totalAmount,
            totalContribution: totalContribution,
            totalInterestEarned: totalInterestEarned
        });
    }

    return annualResult;
}

function printResults(results: calculatorResult) {
    // print (output) the result data
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    
    for (let i = 0; i < results.length; i++){
        console.log(
            `${results[i]?.year}: 
            Total Amount: $${results[i]?.totalAmount.toFixed(2)}, 
            Total Contribution: $${results[i]?.totalContribution.toFixed(2)},
            Total Interest Earned: $${results[i]?.totalInterestEarned.toFixed(2)}`);
    }
}

const myInvestmentData: InvestmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10
}

const myResults = calculatorInvestment(myInvestmentData);

printResults(myResults);