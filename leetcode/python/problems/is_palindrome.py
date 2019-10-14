
def is_palindrome(word):
    word = word.lower().replace(" ", "")
    is_palindrome = True
    i = 0
    j = len(word) - 1
    while i < j:
        if word[i] != word[j]:
            is_palindrome = False
            break
        i += 1
        j -= 1
        
    return is_palindrome

def simple_one(word):
    word = word.lower().replace(" ", "")
    return word == word[::-1]

