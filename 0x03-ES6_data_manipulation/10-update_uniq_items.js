export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) throw new Error('Cannot process');
    for (const [i, j] of map.entries()) {
      if (i === 1) map.set(j, 100);
    }
    return map;
  }