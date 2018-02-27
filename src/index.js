module.exports = function makeExchange(currency) {
  let H = 0, Q = 0, D = 0, N = 0, P = 0;
  let remainingCurrency = currency; // we will subtract from this value coins until we reach 0
  let resCoinsObj = {};

  if(currency > 10000) {
    resCoinsObj["error"] = "You are rich, my friend! We don't have so much coins for exchange";
    return resCoinsObj;
  }

  if(currency <= 0) {
    return resCoinsObj;
  }

  while(remainingCurrency != 0) {
    if(remainingCurrency - 50 >= 0) {
      H++;
      remainingCurrency -= 50;
    } else if(remainingCurrency - 25 >= 0) {
      Q++;
      remainingCurrency -= 25;
    } else if(remainingCurrency - 10 >= 0) {
      D++;
      remainingCurrency -= 10;
    } else if(remainingCurrency - 5 >= 0) {
      N++;
      remainingCurrency -= 5;
    } else if(remainingCurrency - 1 >= 0) {
      P++;
      remainingCurrency -= 1;
    }
  }

  if(H) resCoinsObj["H"] = H;
  if(Q) resCoinsObj["Q"] = Q;
  if(D) resCoinsObj["D"] = D;
  if(N) resCoinsObj["N"] = N;
  if(P) resCoinsObj["P"] = P;

  return resCoinsObj;
}
