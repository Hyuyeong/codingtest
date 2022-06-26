// var addTwoNumbers = function (l1, l2) {
//   console.log(l1.reverse());

//   const r1 = l1.join("");

//   console.log(r1);
//   const r2 = l2.reverse().join("");

//   const r3 = +r1;
//   const r4 = +r2;

//   const result = (r3 + r4)
//     .toString()
//     .split("")
//     .map((str) => Number(str))
//     .reverse();

//   // console.log(arr);

//   console.log(result);
//   return result;
// };

// addTwoNumbers([9, 9, 9, 9, 9, 9, 8], [9, 9, 9, 9]);
/*
var isPalindrome = function (x) {
  let output;
  if (x < 0) {
    output = "false";
  } else if (x > 0) {
    const y = x
      .toString()
      .split("")
      .map((str) => Number(str));

    for (let i = 0; i < (y.length - 1) / 2; i++) {
      if (y[i] === y[y.length - 1 - i]) {
        output = "true";
      }

      // console.log(y);
      // if (y.length % 2 === 0) {
      //   output = "false";
      // } else {
      //   for (let i = 0; i < (y.length - 1) / 2; i++) {
      //     if (y[0] === y[4]) {
      //       console.log("true");
      //       output = "true";
      //     }
      //   }
      // }
    }
  }
  console.log(output);
};

isPalindrome(12165);

*/

// var isPalindrome = function (x) {
//   let output;

//   if (x < 0) {
//     return false;
//   }

//   const y = x
//     .toString()
//     .split("")
//     .map((str) => Number(str));

//   if (y.length === 1) {
//     output = "true";
//   }

//   if (y.length % 2 === 0) {
//     output = "false";
//   }
//   console.log(y);

//   if (y.length % 2 === 1) {
//     for (let i = 0; i < (y.length - 1) / 2; i++) {
//       if (y[i] === y[y.length - 1 - i]) {
//         output = "true";
//       } else {
//         output = "false";
//       }
//     }
//   }
//   console.log(output);
//   return output;
// };
// isPalindrome(10);

// var plusOne = function (digits) {
//   for (var i = digits.length - 1; i >= 0; i--) {
//     digits[i]++;
//     if (digits[i] > 9) {
//       digits[i] = 0;
//     } else {
//       return digits;
//     }
//   }
//   digits.unshift(1);

//   return digits;
// };
// plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);

// console.log([1, 3, 4].map((item) => String(item) + item));

// var romanToInt = function (s) {
//   const sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;

//   for (i = 0; i < s.length; i++) {
//     const cur = sym[s[i]];
//     const next = sym[s[i + 1]];

//     if (cur < next) {
//       result += next - cur; // IV -> 5 - 1 = 4
//       i++;
//     } else {
//       result += cur;
//     }
//   }
//   return result;
// };
// romanToInt("MCMXCIV");

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let profit = 0;
//   let min = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//     if (min >= prices[i]) {
//       min = prices[i];
//     } else {
//       if (prices[i] - min > profit) profit = prices[i] - min;
//     }
//   }

//   console.log(profit);
//   return profit;
// };

// maxProfit([7, 7, 4, 9, 1]);

// function combinationSum(candidates, target) {
//   const result = [];

//   const dfs = (i = 0, sum = 0, currentArr = []) => {
//     if (sum > target) return;

//     if (sum === target) {
//       result.push([...currentArr]);
//       return;
//     }

//     for (let j = i; j < candidates.length; j++) {
//       currentArr.push(candidates[j]);

//       dfs(j, sum + candidates[j], currentArr);
//       currentArr.pop();
//     }
//   };
//   dfs();
//   console.log(result);
//   return result;
// }

// combinationSum([2, 3, 5], 7);

// var sortedSquares = function (nums) {
//   const arr = nums.map((item) => item * item);

//   const rearr = arr.sort((a, b) => a - b);

//   return rearr;
// };

// sortedSquares([-7, -3, 2, 3, 11]);

// var isPowerOfThree = function (n) {
//   while (n > 1) {
//     if (n % 3 === 0) n /= 3;
//     else break;
//   }
//   return n === 1;
// };

// isPowerOfThree(45);

// var removeDuplicates = function (nums) {
//   const set = new Set([...nums]);

//   const arr = Array.from(set).sort((a, b) => a - b);

//   for (i = 0; i < nums.length - arr.length; i++) {
//     arr.push(" ");
//   }
//   console.log(arr);
//   return arr;
// };
// removeDuplicates([0, 0, 1, 1, 1, 5, 2, 3, 3, 4]);

// var removeElement = function (nums, val) {
//   var zeroStartIdx = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[zeroStartIdx] = nums[i];
//       zeroStartIdx++;
//     }
//   }

//   console.log(zeroStartIdx);
//   return zeroStartIdx;
// };

// removeElement([0, 0, 1, 1, 1, 5, 2, 3, 1, 4], 1);

// var searchInsert = function (nums, target) {
//   let result = 0;

//   if (nums.indexOf(target) === 1) {
//     result = nums.indexOf(target);
//   } else {
//     const arr = [...nums, target];

//     const newArr = arr.sort((a, b) => a - b);

//     result = newArr.indexOf(target);
//   }

//   return result;
// };

// searchInsert([1, 3, 5], 2);

// var maxSubArray = function (nums) {
//   let max = nums[0];
//   let cur = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     cur = Math.max(cur + nums[i], nums[i]);
//     max = Math.max(max, cur);
//   }

//   return max;
// };

// var lengthOfLastWord = function (s) {
//   const newWord = s.trim().split(" ");

//   return newWord[newWord.length - 1].length;
// };

// lengthOfLastWord("   fly me   to   the moon  ");

// var singleNumber = function (nums) {
//   return nums.reduce((prev, curr) => prev ^ curr);
// };

// reduce;

// singleNumber([2, 2, 1]);

// var missingNumber = function (nums) {
//   const res = new Array(nums.length + 1).fill(-1);

//   console.log(res);

//   for (const num of nums) {
//     res[num] = num;
//   }

//   return res.indexOf(-1);
// };

// missingNumber([0, 2, 3]);

// var moveZeroes = function (nums) {
//   let j = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       [nums[j], nums[i]] = [nums[j], nums[i]];

//       j++;
//     }
//   }
//   console.log(nums);
// };

// moveZeroes([0, 1, 0, 3, 12]);

// var isAnagram = function (s, t) {
//   const arr1 = [...s].sort().join("");

//   const arr2 = [...t].sort().join("");

//   if (arr1 === arr2) {
//     return true;
//   } else {
//     return false;
//   }
// };

// isAnagram("rat", "car");

// const intersect = (nums1, nums2) => {
//   let result = [];

//   nums1.forEach((item) => {
//     if (nums2.includes(item)) {
//       result.push(item);
//       nums2.splice(nums2.indexOf(item), 1);
//     }
//   });
//   return result;
// };

// intersect([1, 2, 2, 1], [2, 2]);

// var majorityElement = function (nums) {
//   let majorityNumber = nums[0];
//   let count = 1;

//   for (let i = 1; i < nums.length; i++) {
//     if (count === 0) {
//       majorityNumber = nums[i];
//     }
//     count = nums[i] === majorityNumber ? count + 1 : count - 1;
//   }
//   console.log(majorityNumber);
//   return majorityNumber;
// };

// majorityElement([1, 1, 1, 3, 3, 3, 3, 3, 3]);

// function solution(numbers) {
//   var answer = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       let sum = numbers[i] + numbers[j];
//       answer.push(sum);

//       const set = [...new Set(answer)];

//       const sort = set.sort((a, b) => a - b);

//       answer = sort;
//     }
//   }

//   return answer;
// }

// solution([1, 3, 5, 2, 1, 10]);

// function solution(phone_number) {
//   const arr = new Array(...phone_number);

//   console.log(arr);
//   const slice = arr.slice(-4);
//   console.log(slice);

//   arr.fill("*", 0, phone_number.length - 4);

//   const answer = arr.join("");

//   console.log(answer);
//   return answer;
// }

// solution("01086028429");

// function solution(array, commands) {
//   var answer = [];

//   console.log(...commands.length);

//   const slice = array.slice(commands[0] - 1, commands[1]).sort((a, b) => a - b);

//   console.log(slice[commands[2] - 1]);

//   return answer;
// }

// solution(
//   [1, 5, 2, 6, 3, 7, 4],
//   [
//     [2, 5, 3],
//     [1, 2, 3],
//   ]
// );

// const convert = (s, numRows) => {
//   // 1. Make an array with the zigzag sequence
//   const zigzag = [...new Array(numRows).keys()];

//   zigzag.push(...zigzag.slice(1, -1).reverse());
//   console.log(zigzag);
//   // 2. Make an array with as many strings as we need rows
//   const rows = new Array(numRows).fill("");

//   console.log(rows);
//   // 3. Append the characters to the row strings in zigzag sequence
//   [...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c));
//   // 4. Join the row strings in the array together
//   return rows.join("");
// };

// convert("abcdef", 3);

// var maxArea = function (height) {
//   let result = [];

//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       if (height[i] < height[j]) {
//         multi = height[i] * (j - i);
//       } else {
//         multi = height[j] * (j - i);
//       }

//       result.push(multi);
//     }
//   }

//   console.log(Math.max(...result));

//   return Math.max(...result);
// };

// maxArea([
//   70, 12, 482, 639, 234, 726, 636, 144, 451, 430, 393, 855, 337, 628, 826, 116,
//   373, 80, 400, 843, 469, 794, 33, 868, 569, 195, 299, 234, 293, 258, 183, 715,
//   622, 17, 355, 856, 743, 991, 1, 546, 421, 394, 402, 110, 374, 228, 226, 748,
//   309, 979, 943, 130, 773, 976, 351, 695, 524, 2, 929, 817, 612, 465, 884, 235,
//   482, 239, 91, 226, 582, 92, 772, 4, 839, 526, 466, 213, 107, 45, 313, 768, 24,
//   256, 250, 149, 585, 601, 844, 109, 604, 774, 278, 216, 239, 162, 803, 73, 402,
//   895, 299, 984, 339, 424, 340, 178, 302, 159, 744, 409, 204, 57, 177, 228, 666,
//   428, 729, 251, 381, 574, 360, 985, 700, 990, 554, 291, 152, 357, 364, 906,
//   604, 16, 243, 944, 792, 583, 474, 94, 94, 570, 504, 298, 980, 33, 526, 646,
//   813, 608, 249, 195, 182, 961, 532, 882, 951, 438, 525, 103, 796, 889, 10, 752,
//   905, 253, 696, 49, 188, 523, 144, 635, 93, 0, 933, 425, 385, 812, 71, 551,
//   420, 320, 746, 602, 281, 630, 836, 584, 69, 361, 688, 217, 602, 50, 969, 860,
//   655, 18, 909, 195, 541, 405, 830, 986, 757, 764, 412, 143, 928, 835, 694, 348,
//   508, 792, 302, 141, 422, 490, 726, 491, 851, 766, 708, 805, 816, 30, 665, 823,
//   48, 927, 370, 941, 332, 201, 279, 90, 317, 43, 585, 245, 879, 279, 945, 387,
//   71, 247, 880, 845, 737, 606, 689, 940, 372, 749, 97, 540, 779, 115, 363, 179,
//   42, 86, 120, 374, 287, 400, 816, 956, 443, 401, 553, 674, 32, 498, 413, 455,
//   97, 294, 301, 186, 900, 990, 478, 625, 91, 575, 165, 871, 690, 881, 50, 732,
//   967, 523, 459, 606, 923, 627, 914, 718, 29, 467, 393, 413, 317, 158, 869, 766,
//   452,
// ]);

// var combinationSum = function (candidates, target) {
//   const result = [];

//   function permute(arr = [], sum = 0, index = 0) {
//     if (sum > target) return;
//     if (sum === target) result.push(arr);

//     for (let i = index; i < candidates.length; i++) {
//       permute([...arr, candidates[i]], sum + candidates[i], i);
//     }
//   }

//   permute();
//   console.log(result);
//   return result;
// };

// combinationSum([1, 2, 3], 6);

// var uniquePaths = function (m, n) {
//   console.log(helper(m, m, 1, 1));
// };

// const helper = (m, n, row, col) => {
//   if (row === m && col === n) return 1;
//   if (row > m || col > n) return 0;

//   const pathsRight = helper(m, n, row, col + 1);
//   const pathsDown = helper(m, n, row + 1, col);

//   console.log(pathsRight + pathsDown);
//   return pathsRight + pathsDown;
// };
// uniquePaths(3, 7);

// function subsets(nums) {
//   const results = [];

//   powerSet([], 0);

//   function powerSet(path, index) {
//     results.push(path);

//     for (let i = index; i < nums.length; i++) {
//       powerSet([...path, nums[i]], i + 1);
//     }
//   }

//   console.log(results);
//   return results;
// }

// subsets([1, 2, 3, 4]);

// var largestNumber = function (nums) {
//   nums.sort((a, b) => {
//     return b + "" + a - (a + "" + b);
//   });

//   if (nums[0] === 0) {
//     return "0";
//   }

//   console.log(nums.join(""));
//   return nums.join("");
// };

// largestNumber([3, 30, 34, 5, 9]);

// var sortList = function (head) {
//   const result = head.sort((a, b) => a - b);

//   return result;
// };

// sortList([0, -1, 8, 5]);

// var strStr = function (haystack, needle) {
//   const arr = Array(...haystack);

//   const arr2 = Array(...needle);

//   // console.log(arr2);

//   let results = [];

//   powerSet([], 0);

//   function powerSet(path, index) {
//     results.push(path);
//     for (let i = index; i < arr.length; i++) powerSet([...path, arr[i]], i + 1);
//   }

//   console.log(results);

//   // console.log(...results.includes(["l"]));

//   console.log(typeof results[26], typeof arr2);

//   console.log(arr2 === results[26]);

//   for (let i = 0; i < results.length; i++) {
//     if (results[i] === arr2) {
//       console.log(arr2.length);
//       // } else {
//       //   return -1;
//       // }
//     }
//   }
// };

// var strStr = function (haystack, needle) {
//   if (haystack === needle || !needle) return 0;

//   const left = haystack.split(needle)[0];

//   console.log(left);
//   if (haystack === left) return -1;

//   return left.length;
// };

// strStr("hello", "el");

// var firstUniqChar = function (s) {
//   console.log(s.lastIndexOf(s[1]));

//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//       return i;
//     }
//   }
//   return -1;
// };

// firstUniqChar("loveletcode");

// var moveZeroes = function (nums) {
//   let j = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       // swap elements
//       [nums[j], nums[i]] = [nums[i], nums[j]];
//       j++;
//     }
//   }

//   console.log(nums);
// };

// moveZeroes([0, 1, 0, 3, 12]);

// console.log([0, 3, 7, 2, 5, 8, 4, 6, 0, 1].sort((a, b) => a - b));

var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const sort = nums.sort((a, b) => a - b);

  console.log(sort);

  let result = 0;
  let max = 0;

  for (let i = 0; i < sort.length; i++) {
    if (sort[i + 1] - sort[i] === 1) {
      result = result + 1;
      max = Math.max(max, result);
    } else if (sort[i + 1] === sort[i]) continue;
    else {
      result = 0;
    }
  }

  return max;

  console.log(max);
};

longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
