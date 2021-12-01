export const powerSet = (arr) => {
  if (!Array.isArray(arr)) throw new Error("invalid parameter type");

  if (arr.length === 0) return [[]];

  const length = arr.length;
  const lastElement = arr[length - 1];
  const subAnswer = powerSet(arr.slice(0, length - 1));

  return subAnswer.concat(
    [...subAnswer].map((subset) => [...subset, lastElement])
  );
};

// powerSet([]) = [[]]
// powerSet([1]) = [[], [1]]
// powerSet([1, 2]) = [[], [1], [2], [1, 2]]
// powerSet([1, 2, 3]) = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
