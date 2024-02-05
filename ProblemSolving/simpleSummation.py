def simple_summation(targetNumber):
    total = 0
    for i in range(1, targetNumber + 1):
        total += i
    return total


print(simple_summation(5))