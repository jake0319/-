# 외톨이 알파벳 = count 2회이상 && 검색그룹간 1칸 이상 떨어진 경우
# 1) Python defaultdict   2)JS정규표현식 풀이(그룹캡쳐,백레퍼런싱,) 
from collections import defaultdict
def solution(input_string):
    answer=[]
    count_table = defaultdict(list) # 딕셔너리 참조 기본값을 []로 설정
    for i,v in enumerate(input_string):
        count_table[v].append(i) # 알파벳별로 검색되는 idx를 추가;
    for key,lists in count_table.items():
        if len(lists)>=2: #2번이상 검색되는 요소만
            for i in range(len(lists)-1):
                if lists[i+1]-lists[i]>=2:
                    if key not in answer:
                        answer.append(key)
    if len(answer) == 0:
        return 'N'
    answer.sort()
    return ''.join(answer)