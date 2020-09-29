def minion_game(word):
    vowels = 'AEIOU'
    stuart_score = 0
    kevin_score = 0

    for counter, ltr in enumerate(word):
        if ltr in vowels:
            kevin_score += len(word) - counter
        else:
            stuart_score += len(word) - counter

    if kevin_score > stuart_score:
        print("Kevin {}".format(kevin_score))
    elif kevin_score < stuart_score:
        print("Stuart {}".format(stuart_score))
    else:
        print("Draw")


minion_game('BANANA')
