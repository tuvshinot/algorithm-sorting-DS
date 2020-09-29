

def task(s: str) -> tuple:
	"""

	S contains: alphanumeric characters, alphabetical characters, 
	digits, lowercase and uppercase characters. 

	Return :
	In the first line, print True if S has any alphanumeric characters. Otherwise, print False.
	In the second line, print True if S has any alphabetical characters. Otherwise, print False.
	In the third line, print True if S has any digits. Otherwise, print False.
	In the fourth line, print True if S has any lowercase characters. Otherwise, print False.
	In the fifth line, print True if S has any uppercase characters. Otherwise, print False.

	"""
	has_alphanumberic = False
	has_alpha = False
	has_digit = False
	has_lower_case = False
	has_upper_case = False

	for ltr in s:
		if ltr.isalnum():
			has_alphanumberic = True
		
		if ltr.isalpha():
			has_alpha = True
		
		if ltr.isdigit():
			has_digit = True
		
		if ltr.lower():
			has_lower_case = True
		
		if ltr.upper():
			has_upper_case = True

	return has_alphanumberic, has_alpha, has_digit, has_lower_case, has_upper_case


def main():
	print("Write string : ")
	s = input()
	# t = task(s)

	print(any(c.isalnum()  for c in s))
	print(str(any(c.isalpha() for c in s)))
	print(str(any(c.isdigit() for c in s)))
	print(str(any(c.islower() for c in s)))
	print(str(any(c.isupper() for c in s)))

if __name__ == '__main__':
	main()