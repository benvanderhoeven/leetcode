function maxProfit(prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            maxProfit += prices[i + 1] - prices[i];
        }
    }

    return maxProfit;
}

// Testing the function with an example
let testPrices = [7, 1, 5, 3, 6, 4];
let profit = maxProfit(testPrices);
console.log(profit); // Displaying the maximum profit