//https://school.programmers.co.kr/learn/courses/15008/lessons/121685

function solution(queries) {
  var answer = [];
  const table = ['RR','Rr','Rr','rr']
  function query(gen,index){ //호출하면 재귀연산으로 "형질"이 나와야함
      if (gen === 1){
          return 'Rr'
      }
      if (gen === 2){
          return table[index%4]
      }
      let parentGene = query(gen-1, parseInt(index/4)) //Rr이 부모인 경우 idx%4한 값이 부모가됨.

      if (parentGene === 'Rr'){ //부모가 하프면 idx%4에 따라 의존 
          return table[index%4] 
      }
      else if (parentGene === 'RR'){
          return 'RR'
      }
      else{
          return 'rr'
      }        
  }
  queries.map((list)=>{
      let [gen,index] = list
      answer.push(query(gen,index-1)) //주어진 queries의 index는 배열index가 아니므로 -1해주어야
  })
  return answer;
}
// 아이디어: 재귀함수 ,백트래킹 , basecase 
// 0~3 => 0 RR  // 4~7 => 1 Rr
// 8~11 => 2 Rr // 12~15 =>3 rr   
// 즉 index%4가 아닌 parseInt(index/4) 가 정답이 되어야함.