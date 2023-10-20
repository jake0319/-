function solution(str1, str2) {
  var answer = 0;
  const multiSet1 = makeMultiSet(str1)
  const multiSet2 = makeMultiSet(str2) //다중집합 1,2
  const inter = []
  let multiSet2_copy = [...multiSet2]  //[...multiSet2] 
  multiSet1.forEach((word)=>{
      if(multiSet2_copy.includes(word)){
          inter.push(word)        
          multiSet2_copy.splice(multiSet2_copy.indexOf(word),1)
          // 원본에서 해당 인덱스의 문자 하나 지우고기
          // 틀린코드 : multiSet2_copy = multiSet2_copy.filter((x)=>x!==word)
          //filter는 원본을 직접 변경하지도 않고, 중복제거가 이뤄지지 않은 채 새로운 배열을 반환함 따라서 원본변경 메서드인 splice로 직접 제거해야함!
      }
  }) // 교집합 forEach는 배열에 어떤 로직을 수행만 할때
  let len_inter = inter.length
  let len_union = multiSet2.length + multiSet1.length - inter.length
  console.log(len_inter,len_union)
  // 중복포함 다중집합이어도 합집합의 갯수는 일반집합의 공식과 같다.
  if (len_inter === 0 && len_union ===0){
      return 1 * 65536
  }
  else{
      return Math.floor((len_inter / len_union)*65536)
  }
}
function makeMultiSet(str){
      str = str.toLowerCase()
      let multiSet = []
      for (let i = 0; i<str.length-1; i++){
          let tempo = str.slice(i,i+2)
          if ( /[a-z]{2}/.test(tempo) ){
              multiSet.push(tempo)//2개
      }
  }
  return multiSet
}