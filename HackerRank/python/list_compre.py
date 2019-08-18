x = 2 
y = 2
n = 2


# ar = [] 
# p = 0 
# for i in range ( x + 1 ) : 
#     for j in range( y + 1): 
#         if i+j != n: 
#             ar.append([]) 
#             ar[p] = [ i , j ] 
#             p+=1 
# print(ar)

x = 2 
y = 2
z = 2
n = 2

lst = [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n]

print(lst)