export default function cleanSet(xSet, xStartString) {
    if (!xSet || !xStartString || !(xSet instanceof Set) || typeof xStartString !== 'string') {
      return '';
    }
    return Array.from(xSet)
      .filter((elem) => elem && elem.startsWith(xStartString))
      .map((elem) => elem.replace(xStartString, ''))
      .join('-');
  }