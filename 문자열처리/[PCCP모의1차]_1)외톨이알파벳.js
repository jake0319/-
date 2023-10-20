//정규표현식 , string.replace(rgx,newstring)
function solution(input_string) {
  var answer = '';
  const newstr = input_string.replace(/([a-z])\1+/g,'$1')
  // regex에서 \1은 그룹을 백레퍼런스하는 기호 (replacement에서는 $ )
  console.log(newstr)
  const tempoSet = new Set()
  const ansSet = new Set()
  
  for (const a of newstr){
      if(!tempoSet.has(a)){
          tempoSet.add(a) //없으면 추가
      }
      else{//있으면 ansSet에 추가 
          ansSet.add(a)
      }
  }
  return ansSet.size ? [...ansSet].sort().join('') : 'N'
}
// set은 중복을 제거하므로 리스트로 구현시 오답이 됨.
//     const tempoSet = []
//     const ansSet = []
//     for (let a of newstr){
//         if (!tempoSet.includes(a)){
//             tempoSet.push(a) //확인배열에 없으면 정답에 추가
//         }
//         else{ //확인배열에 있으면
//             ansSet.push(a)
//         }
//     }
//     return ansSet.length ? ansSet.sort().join('') : 'N'
// }
