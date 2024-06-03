import { useEffect } from "react";

const TargetSum = () => {
  const twoSum = (numbers, target) => {
    if (!Array.isArray(numbers)) {
      return;
    }
    let result = [];

    numbers.forEach((number, index) => {
      const leftOver = target - number;
      if (result.length < 1 && numbers.includes(leftOver)) {
        result = [index + 1, numbers.indexOf(leftOver) + 1];
      }
    });
    return result;
  };

  useEffect(() => {
    console.log("Output 1 ::", twoSum([4, 11, 17, 25], 21));
    console.log("Output 2 ::", twoSum([0, 1, 2, 2, 3, 5], 4));
    console.log("Output 3 ::", twoSum([-1, 0], -1));
  }, []);

  return <p>Open console to see the output</p>;
};

export default TargetSum;
