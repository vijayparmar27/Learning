// function maxProfit(prices: number[]): number {
//     let sellStockPrize: number = 0;
//     const values: number[] = [...prices];
//     for (let i = 0; i < prices.length; i++) {
//         values.splice(0, 1)
//         const maxValue = Math.max(...values)
//         if (
//             prices[i] < maxValue  &&
//             sellStockPrize < maxValue - prices[i] 
//         ){
//             sellStockPrize = maxValue - prices[i];
//         }

//     }
//     return sellStockPrize
// };

// function maxProfit(prices: number[]): number {
//     let max = 0
//     let buy = prices[0];
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < buy) {
//             buy = prices[i];
//         }
//         else {

//             max = Math.max(prices[i] - buy, max);
//         }
//     }
//     return max;
// };

// function maxProfit(prices: number[]): number {

//     let maxSell = 0;
//     let minBuy = prices[0];

//     for (let i = 1; i < prices.length; i++) {
//         minBuy = Math.min(minBuy, prices[i]);
//         maxSell = Math.max(prices[i] - minBuy, maxSell)
//     }
//     return maxSell;
// }


// function maxProfit(prices: number[]): number {
//     let maxSell = 0;
//     let minBuy = prices[0];

//     for (let i = 1; i < prices.length; i++) {
//         minBuy = minBuy > prices[i] ? prices[i] : minBuy;
//         maxSell = maxSell > prices[i] - minBuy ? maxSell : prices[i] - minBuy;
//     }
//     return maxSell;
// }
function maxProfit(prices: number[]): number {
    let maxSell = 0;
    let minBuy = prices[0];

    for (let i = 1; i < prices.length; i++) {

        if (minBuy > prices[i]) {
            minBuy = prices[i]
        } else {
            maxSell = maxSell > prices[i] - minBuy ? maxSell : prices[i] - minBuy;
        }

    }
    return maxSell;
}



console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([5, 50, 1, 7]))