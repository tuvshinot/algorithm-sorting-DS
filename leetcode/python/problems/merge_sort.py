
def merge_sort(sorted_l1, sorted_l2):
    """ Merge sorting two sorted array """
    result = []
    i = 0
    j = 0

    while i < len(sorted_l1) and j < len(sorted_l2):
        if sorted_l1[i] < sorted_l2[j]:
            result.append(sorted_l1[i])
            i += 1
        else:
            result.append(sorted_l2[j])
            j += 1

    while i < len(sorted_l1):
        result.append(sorted_l1[i])
        i += 1

    while j < len(sorted_l2):
        result.append(sorted_l2[j])
        j += 1

    return result


print(f'Merge Sort : {merge_sort([1,3,5], [2,4,6, 100, 1001])}')

# Big O notation O(n)
