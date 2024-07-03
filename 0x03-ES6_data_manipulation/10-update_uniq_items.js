export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) throw new Error('Cannot process');
    for (const [i, j] of map.entries()) {
        if (i === 1) map.set(i, 100); // Use `i` as the key and update its value
    }
    return map;
}
