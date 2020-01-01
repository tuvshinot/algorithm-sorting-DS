def count_substring(string, sub_string):
    count = 0

    for idx in range(len(string) - len(sub_string) + 1):
        sl = string[idx:len(sub_string) + idx]
        if sl == sub_string:
            count += 1
    return count


count_substring('ABCDCDC', 'CDC')