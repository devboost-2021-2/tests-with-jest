export const permutations = (str) => {
  if (typeof str !== "string") throw new Error("invalid parameter type");
  if (str.length === 0) return [];
  if (str.length === 1) return [str];

  const length = str.length;
  const lastChar = str.charAt(length - 1);
  const subAnswer = permutations(str.slice(0, length - 1));
  const answer = [];

  subAnswer.forEach((subPerm) => {
    for (let i = 0; i < subPerm.length + 1; i++) {
      const perm = subPerm.slice(0, i) + lastChar + subPerm.slice(i);
      answer.push(perm);
    }
  });

  return answer;
};

// permutations("a") = ["a"]
// permutations("ab") = ["ab", "ba"]
// permutations("abc") = ["abc", "acb", "bac", "bca", "cab", "cba"]
// ["cab", "acb", "abc", "cba", "bca", "bac"];
