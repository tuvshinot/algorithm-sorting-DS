if __name__ == '__main__':
    import math
    n = int(input())
    res = 1
    for i in range(1, n + 1):
        if i != 1:
            z = int(math.log10(i)) + 1
            res = res * 10**z + i
    print(res)

# not using string method