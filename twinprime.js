// To check Prime number
function checkPrime(num, n) {
  for (let j = 2; j <= Math.sqrt(num); j++) {
    if (num != j && num % j == 0) {
      isPrime = false;
      return false;
    }
  }
  return true;
}

// returns Number of pairs of two primes possible till n
function NoOfTwinPrime(n) {
  let ctr = 0;
  let isPrime = true;
  var lastprime = 2;
  if (n == 1) {
    return ctr;
  } else {
    for (let i = 2; i <= n; i++) {
      isPrime = checkPrime(i, n);
      if (isPrime) {
        if (i - lastprime == 2) {
          //   console.log("I and LastPrime is ", i, lastprime);
          ctr++;
        }
        lastprime = i;
      }
      isPrime = true;
    }    // end of loop
  }
  return ctr;
}

console.log(NoOfTwinPrime(10));
