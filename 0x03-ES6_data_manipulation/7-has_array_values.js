export default function hasValuesFromArray(Set, Array) {
    return Array.every((elem) => Set.has(elem));
  }