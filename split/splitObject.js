function splitObejct(obj, numObjects = 3) {
  const splitted = [...Array(numObjects)].map((_) => ({}));

  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      const chunkSize = value.length / numObjects;
      for (let i = 0; i < numObjects - 1; i++) {
        splitted[i][key] = value.slice(chunkSize * i, chunkSize * (i + 1));
      }
      splitted[numObjects - 1][key] = value.slice(chunkSize * (numObjects - 1));
    }
  });
  return splitted;
}
