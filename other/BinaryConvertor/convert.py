from math import floor

def decimal_to_binary(num):
    acc = []
    remainder = 0;
    binary = ''

    while num > 0:
        remainder = num % 2
        acc.append(1) if remainder == 1 else acc.append(0)
        num = floor(num / 2)

    acc.reverse()
    binary = ''.join(str(el) for el in acc)
    return binary


print(decimal_to_binary(1995))
