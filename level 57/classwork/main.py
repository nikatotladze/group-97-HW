# 1

def divisors(n):
    count = 0

    for i in range(1, n + 1):
        if n % i == 0:
            count += 1

    return count


# 2

def first_non_repeating_letter(s):
    for char in s:
        if s.lower().count(char.lower()) == 1:
            return char

    return ""


# 3

def find_it(seq):
    for num in seq:
        if seq.count(num) % 2 != 0:
            return num


# 4

def duplicate_encode(word):
    word = word.lower()
    result = ""

    for char in word:
        if word.count(char) == 1:
            result += "("
        else:
            result += ")"

    return result