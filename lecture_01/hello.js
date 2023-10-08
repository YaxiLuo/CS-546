// console.log()
// Approach 1 to print "Hello, World!"
// let message = 'Hello, World!';
// console.log(message);
// Approach 2
// console.log('Hello, World!');

// prompt
// import prompt from "prompt";
// prompt("Is this your first time to code?", "Welcome to JavaScript!");

// alert("Hello, World!");
/* Uncaught Reference Error: alert 是浏览器环境中的全局方法，如果你在非浏览器环境，
例如 Node.js 中尝试使用 alert，你会得到一个 undefined 的错误，
因为 Node.js 环境没有提供 alert 方法。*/

// Q3
export const questionThree = (arrs) => {
    const result3 = {};
    let pAndArea = [];
    // for each triangle
    arrs.foreach((arr) => {
      // calcultate the perimeter
      let perimeter = arr[0] + arr[1] + arr[2];    
      pAndArea.push(perimeter);
  
      // calculate the area
      let s = perimeter / 2
      let area = Math.sqrt(s * (s - arr[0]) * (s - arr[1]) * (s - arr[2]));
      
      // round to 2 decimal
      let areaRound2 = area.toFixed(2);
  
      // 
      pAndArea.push(areaRound2);
      
    });
  
    return result3; //return result
  };

  console.log(questionThree([[3,3,3], [4,4,4]]));