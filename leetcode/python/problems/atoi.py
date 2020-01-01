""" Algorithm for atoi in c languages """


def atoi(input_str: str) -> int:
    """ Atoi func for converting str to number """
    is_minus = False
    res = 0
    str_cleaned = input_str.lstrip()
    int_max = 2**31
    int_min = -2**31

    if not str_cleaned:
        return 0

    if str_cleaned[0] == '-':
        is_minus = True
        str_cleaned = str_cleaned.strip('-')

    if str_cleaned[0] == '+':
        str_cleaned = str_cleaned.strip('+')

    if 48 <= ord(str_cleaned[0]) <= 57:
        for let in str_cleaned:
            if 48 <= ord(let) <= 57:
                res = res * 10 + ord(let) - 48
            else:
                break
    else:
        return 0

    res = res if not is_minus else res * (-1)

    if res > int_max:
        return int_max

    if res < int_min:
        return int_min

    return res
