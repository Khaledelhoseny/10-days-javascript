function getMaxLessThanK(n, k) {
    let value = 0;
    for (let y = 1; y < n; y++) {
      for (let j = y + 1; j <= n; j++) {
        let result = y & j;
        if (result < k && result > value) {
          value = result;
        }
      }
    }
    return value;
  }

  