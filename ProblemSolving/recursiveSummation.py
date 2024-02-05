def recursive_summation(targetNumber):
    if targetNumber == 1:
        return 1
    else:
        return targetNumber + recursive_summation(targetNumber - 1)
    
print(recursive_summation(5))