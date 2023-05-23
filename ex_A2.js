function alternatingSum(inputArr){
  const Ans =[];
  let sumT1, sumT2
   for (let i = 0; i < inputArr.length; i++) {
     if i%2 == 0{
       sumT1 += inputArr[i]
     }
      if i%2 != 0{
       sumT2 += inputArr[i]
     }
   }
    Ans.push(sumT2, sumT1);
}
const inputArr = [60, 40, 55, 75, 64];
const result = alternatingSum(inputArr);
console.log(result);