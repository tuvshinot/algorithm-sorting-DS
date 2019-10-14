def convert(s:str, numRows:int) -> str:
    if numRows == 1: 
        return s

    rows = ['']*(min(numRows, len(s)))
    curRow = 0
    goindDown = False

    for c in s:
        rows[curRow] += c
        if curRow == 0 or curRow == numRows - 1:
            goindDown = (not goindDown)
        curRow += 1 if goindDown else -1
    
    result = ''
    for row in rows:
        result += row
    
    return result


ret = convert('PAYPALISHIRING', 4)
if ret == 'PINALSIGYAHRPI':
    print('Hey you got this')
else:
    # print(ret)
    # print('PAHNAPLSIIGYIR')
    print('No')