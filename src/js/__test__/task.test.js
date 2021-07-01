import sortData from '../task';

test('checking the correctness of data sorting', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sort = ['name', 'level'];
  expect(sortData(obj, sort)).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('checking the sorting  sorting without sorting order data', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };
  const sort = [];
  expect(sortData(obj, sort)).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ]);
});

test('checking the sorting without object data', () => {
  const obj = {};
  const sort = ['name', 'level'];
  expect(sortData(obj, sort)).toEqual([]);
});
