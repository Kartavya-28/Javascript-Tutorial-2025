// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = (birthYear) => 2037 - birthYear;

// console.log(calcAge(1925));
// console.log(x);
// // const x = 23;

//console.log('x', 'asasssaddadsaaa');
// learn to code and be a problem solver videos done
//  BUG
// Steps
// 1 get clear picutre of the whole problem
// 2 break problem into multiple smaller problems
// 3 try to solve sub problem and if not, research if unable to solve the sub problem
// 4 for bigger problem, write a pseudo code before actual codes

// Problem 1 - So let's say that we work for a company that builds

// a smart home thermometer and our most recent task is this.

// So given an array of temperatures of one day,

// calculate the temperature amplitude and keep in mind

// that sometimes there might be a sensor error.

// And they give us this array of data.

// const tempSet1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const tempSet2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 50];

// temp altiitude is the difference in the highest and the lowest temperature

// ignore error
//find the highest - create a comparator using loop. and store the compairson value at the end of the loop run in  a variable

// find the lowest

// cal the difference

// const calTempAltitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);

//   return max - min;
// };

// const amplitude = calTempAltitude(tempSet1, tempSet2);

// console.log(amplitude);

// // problem 2 - should take 2 arrays as input

// // do we need to do 2 times the calcukagtion? - no just meage the array

// // how to merger the arrays - search on google
// // const z = [111, 222, 333];
// // const x = [1, 2, 3]; // const y = [11, 22, 33];
// // const a = x.concat(y, z);
// // console.log(a);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: Number(prompt('Enter temp in celsius:')),
//     value: 10,
//   };

//   //b. find
//   //   console.log(measurement);
//   //   console.table(measurement);
//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   console.log(kelvin);
//   return kelvin;
// };

// console.log(measureKelvin());
// // // a identify

// // sing a debugger
// const calTempAltitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);

//   return max - min;
// };

// const amplitude = calTempAltitudeBug([3, 5, 1], [9, 4, 5]);

// console.log(amplitude);

// break point can be introduced by using debugger; in the code.

// Challenge

// const tempSet = [12, 5, -5, 0, 4];
// const printforecast = function (arr) {
//   let z = '';
//   for (let i = 0; i < arr.length; i++) {
//     const x = ` ...Day ${i + 1} temp is ${arr[i]}`;
//     z = z + x;
//   }
//   return z + '...';
// };

// //   const temps = t1.concat(t2);
// console.log(printforecast(tempSet));
// this  challenge was about making a fucntion that can extract each element of an array and using it, it can create a string where all the array elements are concatenated.

// const Data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

// const Total = function (arr) {
//   let sum = 0;
//   let count = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     const check = arr[i] == 0 ? count++ : count;
//     const maxCheck = arr[i] > max ? (max = i) : (max = max);
//   }

//   console.log(
//     `Total work hours = ${sum}, Average daily hors = ${
//       sum / arr.length
//     },The day with most worked hours is day ${max + 1},No. of days worked is ${
//       arr.length - count
//     }`
//   );
//   const weekCheck =
//     Total > arr.length * 5
//       ? console.log('It was a full time week')
//       : console.log('It wwas not');
// };

// console.log(Total(Data));
// I wrote this code but in this section the code wAas written by chatgpt which was also easily writeable.

//HTML AND CSS




const calctempamp (arrays)
{
    let max = arrays[0];
    for(let i=0;i<arrays.length;i++)
    {
        if(arrays[i] > max) max = arrays[i];
        
    }
    console.log(max);
}