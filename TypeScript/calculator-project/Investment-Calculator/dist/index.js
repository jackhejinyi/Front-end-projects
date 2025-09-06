// data
// initialAmount: number
// yearlyContribution: number
// expectedReturn: number
// duration: number
function calculateInvestment(data) {
    const { initialAmount, yearlyContribution, expectedReturn, duration } = data;
    if (initialAmount <= 0) {
        return "Initial amount must be at least zero.";
    }
    if (yearlyContribution < 0) {
        return "Yearly contribution must be greater than zero.";
    }
    if (expectedReturn <= 0) {
        return "Expected return must be at least zero.";
    }
    if (duration < 0) {
        return "Duration must be greater than zero.";
    }
    const results = [];
    let totalAmount = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    for (let i = 0; i < duration; i++) {
        totalContribution += yearlyContribution;
        totalAmount += totalAmount * expectedReturn + yearlyContribution;
        totalInterestEarned = totalAmount - initialAmount - totalContribution;
        results.push({
            year: `${i + 1}`,
            totalAmount,
            totalContribution,
            totalInterestEarned: totalInterestEarned
        });
    }
    return results;
}
// function printResults(results: CalculateResult) {
//     if (typeof results === "string") {
//         console.log(results);
//         return;
//     }
//     for (const result of results) {
//         console.log(`Year ${result.year}`);
//         console.log(`Total Amount: $${result.totalAmount.toFixed(2)}`);
//         console.log(`Total Contribution: $${result.totalContribution.toFixed(2)}`);
//         console.log(`Total Interest Earned: $${result.totalInterestEarned.toFixed(2)}`);
//         console.log("---------------------------------------------------------");
//     }
// }
const initialAmountEl = document.querySelector("#initial-amount");
const yearlyContributionEl = document.querySelector("#yearly-contribution");
const expectedReturnEl = document.querySelector("#expected-return");
const durationEl = document.querySelector("#duration");
const form = document.querySelector("form");
const appDiv = document.getElementById("app");
function renderResults(results) {
    // Remove previous results
    let old = document.getElementById("results");
    if (old)
        old.remove();
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    if (typeof results === "string") {
        resultsDiv.textContent = results;
    }
    else {
        const table = document.createElement("table");
        table.innerHTML = `<tr><th>Year</th><th>Total Amount</th><th>Total Contribution</th><th>Total Interest Earned</th></tr>`;
        for (const result of results) {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${result.year}</td><td>$${result.totalAmount.toFixed(2)}</td><td>$${result.totalContribution.toFixed(2)}</td><td>$${result.totalInterestEarned.toFixed(2)}</td>`;
            table.appendChild(row);
        }
        resultsDiv.appendChild(table);
    }
    appDiv === null || appDiv === void 0 ? void 0 : appDiv.appendChild(resultsDiv);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    const myInvestmentData = {
        initialAmount: Number(initialAmountEl.value),
        yearlyContribution: Number(yearlyContributionEl.value),
        expectedReturn: Number(expectedReturnEl.value), // convert percent to decimal
        duration: Number(durationEl.value)
    };
    const myResults = calculateInvestment(myInvestmentData);
    renderResults(myResults);
});
export {};
//# sourceMappingURL=index.js.map