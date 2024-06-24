export default function appendToEachArrayValue(array, appendString) {
const Array2 = [];
for (const idx in array) {
    Array2[Array2.length] = `${appendString}${idx}`;
}

  return Array2;
}
