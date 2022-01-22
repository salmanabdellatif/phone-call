function minutes(min1, min2_10, min11, S) {
  if (S < 2) return 0;

  if (min1 < S) {
    tCost = min1;
    for (i = 2; i <= 10 && tCost + min2_10 <= S; i++) tCost += min2_10;
    tMinutes = i - 1;
  }
  if (tCost < S) {
    for (i = 11; tCost + min11 <= S; i++) {
      tCost += min11;
    }
    tMinutes = i - 1;
    return tMinutes;
  }
}
console.log(minutes(3, 1, 2, 20)); // ==> expected output: 14
