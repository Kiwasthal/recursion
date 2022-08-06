const mergeSort = (
  arraytosort = Array.from({ length: 10000 }, () =>
    Math.floor(Math.random() * 1000)
  )
) => {
  if (arraytosort.length > 1) {
    let mid = Math.floor(arraytosort.length / 2),
      b = mergeSort(arraytosort.slice(mid)),
      c = mergeSort(arraytosort.slice(0, mid));

    (a = []), (pointerB = 0), (pointerC = 0);
    while (pointerB < b.length && pointerC < c.length) {
      if (b[pointerB] < c[pointerC]) a.push(b[pointerB++]);
      else a.push(c[pointerC++]);
    }
    res = a.concat(b.slice(pointerB)).concat(c.slice(pointerC));

    res.unshift(0, arraytosort.length);
    arraytosort.splice.apply(arraytosort, res);
    return arraytosort;
  }
  return arraytosort;
};
