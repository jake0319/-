import re 
import math
def solution(str1, str2):
    p = re.compile('[a-z]{2}') # isalpha()로 대체 가능
    def makeMulti(str):
        multiSet = []
        str = str.lower()
        for i in range(len(str)-1):
            word = str[i:i+2]
            if p.search(word) and p.match(word).group() :
                multiSet.append(word)
        return multiSet
    multi1 = makeMulti(str1)
    multi2 = makeMulti(str2)
    def jakardCalculation(mulit1=multi1,multi2=multi2):
        inter = []
        multi2_copy = multi2.copy() # 원본은 그대로 남겨둬야함 
        for word in mulit1:
            if word in multi2_copy:
                inter.append(word)
                multi2_copy.remove(word) # 교집합을 구하며 처리한 요소는 삭제필요
        len_inter = len(inter)
        len_union = len(multi1+multi2) - len(inter)
        if len_inter == 0 and len_union ==0:
            return 1
        else:
            return len_inter / len_union
    return math.floor(jakardCalculation()*65536) # int()로 대체 가능 
                
        
  