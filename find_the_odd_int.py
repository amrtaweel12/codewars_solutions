

def find_it(seq):
    orderd_seq = asy_ordering(seq)
    temp = orderd_seq[0]
    count = 1
    i = 1
    while i < len(orderd_seq):
        if temp == orderd_seq[i]:
            count = count + 1
        else:
            if count % 2 == 1:
                return temp
            else:
                temp = orderd_seq[i] 
                count = 1        
        i = i + 1           

    return temp

def asy_ordering(seq):
    i = 0
    x = 0
    while i < len(seq):
        x = i
        while x < len(seq):
            if(seq[i] > seq[x]):
                temp = seq[x]
                seq[x] = seq[i]
                seq[i] = temp
                i = i - 1
                break
            else:
                x = x + 1
        i = i + 1               
    return seq
print(find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))