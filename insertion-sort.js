const insertionSort = (coll) => {
  for (let i = 1; i < coll.length; i++) {
    let j = i - 1;
    let temp = coll[i];
    while (j >= 0 && coll[j] > temp) {
      coll[j + 1] = coll[j];
      j--;
    }
    coll[j + 1] = temp;
  }
  return coll;
};
