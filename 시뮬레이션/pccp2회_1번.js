// https://school.programmers.co.kr/learn/courses/15009/lessons/121687
function solution(command) {
  var answer = [];
  let d = 0 //초기값
  let dG = [[0,1],[1,0],[0,-1],[-1,0]] // 북0 동1 남2 서3 => 평면좌표계
  let dB = [[0,-1],[-1,0],[0,1],[1,0]] // 북0 동1 남2 서3 => 평면좌표계
  let [x,y] = [0, 0]
  
   function progress(type){
      switch (type){
          case 'R':
              d+=1 
              d = d>=4 ? d%4 : d //d갱신
              break;
          case 'L':
              d-=1
              d = d<0 ? d+4 : d // -1 => 3 -2 => 2 
              break;
          case 'G':
              let [dx,dy] = dG[d] //현재방향에서의 G동작 이후의 방향벡터
              x = x+dx
              y = y+dy
              break;
          case 'B':
              let [ddx,ddy] = dB[d] //현재방향에서의 G동작 이후의 방향벡터
              x = x+ddx
              y = y+ddy
              break;
          }
      }
      for(let i=0;i<command.length;i++){
          progress(command[i])
      }
      return [x,y]
}
// 시뮬레이션 유형
// 특이하게 G,B에 따른 방향벡터가 별도 4쌍씩 총 8쌍 구현되어야함 
// switch case로 로직 설계 switch (type){ case type:}