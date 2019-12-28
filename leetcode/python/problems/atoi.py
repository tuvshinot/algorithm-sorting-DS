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

