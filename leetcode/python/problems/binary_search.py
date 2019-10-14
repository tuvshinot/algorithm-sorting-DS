from math import ceil, floor


def binary_search(sorted_list, element_looking_for):
    """ Binary search implementation """
    start = 0
    end = len(sorted_list) - 1
    mid = floor(len(sorted_list) / 2)

    while element_looking_for != sorted_list[mid] and start <= end:
        if element_looking_for < sorted_list[mid] : end = mid - 1
        else: start = mid + 1
        mid = floor((start + end) / 2)
    
    return sorted_list[mid] if sorted_list[mid] == element_looking_for else -1


print(f'Binary Search : {binary_search([2,5,6,9,13,15,28,30], 13)}')
