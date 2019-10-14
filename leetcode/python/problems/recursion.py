def power_num(base, expo):
    """ recursively calculates power """
    if expo == 0:
        return 1
    return base * power_num(base, expo - 1)


print(f'Power : {power_num(2, 2)}')


def factorial(num):
    """ finding recursively factorial """
    if num == 1:
        return 1
    return num * factorial(num - 1)


print(f'Factorial : {factorial(5)}')


def product_arr(arr):
    """ Returns product of array """
    if len(arr) == 0:
        return 1
    return arr[0] * product_arr(arr[1:])


print(f'Product of arr : {product_arr([1,2,3,4,5])}')


def reverse_str(str):
    """ Returns reversed str """
    if len(str) == 1:
        return str
    return str[-1] + reverse_str(str[:-1])


print(f'Reversed str : {reverse_str("abcd")}')


def is_palindrome(str):
    """ Returns is str palindrome or not """
    if len(str) == 1:
        return True
    if len(str) == 2:
        return str[0] == str[1]
    if str[0] == str[-1]:
        return is_palindrome(str[1:-1])
    return False


print(f'Is Palindrome : {is_palindrome("cabac")}')

