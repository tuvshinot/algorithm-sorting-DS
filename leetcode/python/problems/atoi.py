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

def ignore_exception(IgnoreException=Exception, DefaultVal=None):
    """ Decorator for ignoring exception from a function
    e.g.   @ignore_exception(DivideByZero)
    e.g.2. ignore_exception(DivideByZero)(Divide)(2/0)
    """
    def dec(function):
        def _dec(*args, **kwargs):
            try:
                return function(*args, **kwargs)
            except IgnoreException:
                return DefaultVal
        return _dec
    return dec


@ignore_exception(ValueError)
def try_parse_int(str_in):
    return int(str_in)


def atoi(str_in):
    """ C/C++ like atoi func """
    str_no_space = ''
    for ltr in str_in:
        if ltr is not ' ':
            str_no_space += ltr

    if ltr[0] is not '-' and try_parse_int(ltr[0]) is None:
        return None

    for idx, ltr in enumerate(str_no_space):
        if try_parse_int(ltr) is not None and ltr is '-':
            tmp = ltr + str_no_space[idx + 1]
            if try_parse_int(tmp) is not None:
