def merge_the_tools(string_input, k):
    output = ''
    for counter, ltr in enumerate(string_input, start=1):
        if ltr not in output:
            output += ltr

        if counter % k == 0:
            print(output)
            output = ''
