function matchChara(params, answer) {
  let score = 0;
  for(let n=0; n <= answer.length-1; n++){
    if(params[n] === answer[n]){
      score ++;
    }
  }  
  return score
}
module.exports = matchChara
// const a = "abcdefghijklmnOOp"
// const b = "abcdefghijklmnopq"

// const resutl = matchChara(a,b)
// console.log(resutl)