 export const codeExamples = {
    "constant": `def get_first_element(arr):
    return arr[0]

numbers = [10, 20, 30, 40]
print("First element:", get_first_element(numbers))`,

    "logarithmic": `def is_power_of_two(n):
    if n <= 0:
        return False
    while n > 1:
        if n % 2 != 0:
            return False
        n = n // 2
    return True

print(is_power_of_two(16))  # True
print(is_power_of_two(18))  # False`,

    "linear": `def find_max(arr):
    max_val = arr[0]
    for num in arr:
        if num > max_val:
            max_val = num
    return max_val

nums = [1, 3, 5, 2, 9, 7]
print("Max value:", find_max(nums))`,

    "logLinear": `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i = j = k = 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
    return arr

nums = [5, 2, 9, 1, 5, 6]
print("Sorted:", merge_sort(nums))`,

    "quadratic": `def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

nums = [64, 25, 12, 22, 11]
print("Sorted:", selection_sort(nums))`,

    "exponential": `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(5))  # 5
print(fibonacci(6))  # 8`,

    "factorial": `def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)

print(factorial(5))  # 120
print(factorial(6))  # 720`
}
