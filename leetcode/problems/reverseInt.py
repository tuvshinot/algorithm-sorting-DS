
def int_reverser(x : int) -> int:
    """ Reversing int using pop push 
    algorithm run time 12ms"""
    rev = 0
    minus = 1
    if x < 0:
        minus = -1
        x = x * minus
    while x != 0:
        pop = x % 10
        x = int(x / 10)
        rev = rev * 10 + pop
        if rev < -2**31 or rev > 2**31:
            return 0
    return rev * minus
