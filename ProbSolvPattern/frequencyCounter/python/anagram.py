
def valid_anagram(str1, str2):
    """ Checks if it is valid anagram pattern """
    # check if str1 and str2 are valid
    if len(str1) != len(str2):
        return False

    lookup = {}

    for item in str1:
        lookup[item] = str1.count(item)

    for item in str2:
        if item in lookup:
            lookup[item] -= 1
        else:
            return False

    return True


print(valid_anagram('anagram', 'adasdd'))
