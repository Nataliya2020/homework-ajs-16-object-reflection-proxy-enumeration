export default function sortData(obj, sortingRules) {
  const firstSort = [];

  for (const item in obj) {
    if (sortingRules.includes(item)) {
      firstSort.push(item);
    }
  }

  let secondSort = [];

  for (const item in obj) {
    if (!sortingRules.includes(item)) {
      secondSort.push(item);
    }
  }

  secondSort = secondSort.sort();

  const sortArray = [...firstSort, ...secondSort];

  return sortArray.reduce((array, item) => {
    array.push(
      {
        key: item,
        value: obj[item],
      },
    );
    return array;
  }, []);
}
