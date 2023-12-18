# ======================= Data Structor =======================

# ---------------- List [] ----------------

from sys import getsizeof
from array import array
from collections import deque
letters = ["a", "b", "c"]

letters.append("d")
letters[0] = "A"
# print(letters[0] * 10)
dublicat = [0] * 3
# print(dublicat)
combined = dublicat + letters
# print(letters)
# print(combined)

numbers = list(range(20))

# print(numbers)
# print(len(numbers))

char = "Python Developer"

# print(char)
# print(len(char))

# ---------------- Accessing Items ----------------

letters = ["a", "b", "c", "d"]

# print(letters[0])
# print(letters[-1])
# print(letters[0:2])
# print(letters[:2])
# print(letters[0:])
# print(letters[:])

letters[0] = "A"

# print(letters[::3])
# print(letters[::-1]) #revers list
# print(letters)

# ---------------- List Unpacking ----------------

numbers = [1, 2, 3, 4, 5]

# first, second, third = numbers
first, second, *third = numbers

# print(first)
# print(second)
# print(third)
# print(numbers)

# ---------------- Looping Over Lists ----------------

letters = ["a", "b", "c"]

# for letter in letters:
#     print(letter)

# for index, letter in enumerate(letters):
# print(f"index :: {index} - value : {letter}")


# ---------------- Adding Or Removing Items ----------------

letters = ["a", "b", "c"]

# letters.append("d")
# letters.insert(1, "A")  # (index,value)
# letters.pop()    # remove last element
# letters.pop(1)  # remove given index
# letters.remove("b")

# if "a" in letters:
#     letters.remove("a")

# del letters[0]
# del letters[0:2] # delete given index element

# letters.clear() # remove all object from list

# print(letters)

# ---------------- Finding Items In List ----------------

letters = ["a", "b", "c"]

# print(letters.index("a"))

# if "o" in letters:
#     print(letters.index("o"))


# print(letters.count("a")) # give count of "a"


# ---------------- Sorting List ----------------

numbers = [3, 8, 51, 27, 2, 6]

# numbers.sort() #sort number list with original list

# numbers.sort(reverse=True)

# print(numbers)

# print(sorted(numbers))
# print(sorted(numbers, reverse=True))

items = [
    ("P1", 10),
    ("P2", 8),
    ("P3", 30)
]


def sort_items(item):
    return item[1]


# items.sort(key=sort_items)

items.sort(key=sort_items, reverse=True)

# print(items)

# ---------------- Lambda Function ----------------


items.sort(key=lambda item: item[1])
# print(items)

# ---------------- Map Function ----------------

items = [
    ("P1", 10),
    ("P2", 8),
    ("P3", 30)
]

price = []

# for item in items:
#     price.append(item[1])

# print(price)

x = map(lambda item: item[1], items)
# print(list(x))

# ---------------- Filter Function ----------------

items = [
    ("P1", 10),
    ("P2", 8),
    ("P3", 30)
]


x = list(filter(lambda item: item[1] >= 10, items))
# print(x)

# ---------------- List Comprehensions ----------------

# working like map loop
p = [item[1] for item in items]

# working like filter
p = [item for item in items if item[1] >= 10]

# print(p)

# ---------------- Zip Fuction ----------------

list1 = [1, 2, 3]
list2 = [10, 20, 30]


# print(list(zip(list1, list2)))
# print(list(zip(list1, list2,["a","b"])))


# ---------------- Stacks [LIFO] ----------------

# last in first out (LIFO)

browsing_session = []

browsing_session.append(1)
browsing_session.append(2)
browsing_session.append(3)

browsing_session.pop()

# print("redirect :: ",browsing_session[-1])


# ---------------- Queues [FIFO] ----------------

# first in first our [FIFO]


queue = deque([])

queue.append(1)
queue.append(2)
queue.append(3)

queue.popleft()

# if not queue:
#     print("Emety Queue ----")
# else:
#     print(queue)


# ---------------- Tuples ----------------

# point = (1, 2)

point = 1, 2

# print(point, type(point))

point1 = [1, 2]

# print(tuple(point1), type(tuple(point1)))

point = (1, 2) + ("a", "b")  # (1, 2, 'a', 'b')

point = (1, 2) * 2  # (1, 2, 1, 2)
# print(point[0:2])
# print(point[:2])
# print(point[0:])
# print(point[:])
# print(point)

# if 1 in point:
#     print("exists")

x, y, *z = point

# print(x)
# print(y)
# print(z)


# ---------------- Swapping Variable ----------------

x = 1
y = 2

y, x = x, y

# print(y)
# print(x)


# ---------------- Arrays ----------------

x = array("i", [1, 2, 3])

x.append(4)
# print(list(x))


# ---------------- Sets ----------------

numbers = [1, 1, 4, 5, 3, 4]

unique = set(numbers)
unique.add("5")
unique.remove(5)

if 10 in unique:
    unique.remove(10)

# print(unique)

first = {1, 4}
second = {2, 3, 1}

# print(first | second)
# print(first & second)
# print(first ^ second)
# print(first - second)

# if 1 in first:
#     print("yes")


# ---------------- Dictionaries ----------------


point = {"x": 1, "y": 2}

point = dict(x=1, y=2)

point["x"] = 10

# if "a" in point:
#     print(print["a"])

# print(point.get("a")) # if not exits than retun None
# print(point.get("a",0)) # if not exits than retun default

# del point["x"]
# print(point)

# for key in point:
#     print(f"key : {key} , value : {point[key]}")

# for keyValue in point.items():
#     print(f"keyValue : {keyValue}")

# for key, value in point.items():
#     print(f"key : {key} , value : {value}")

# ---------------- Dictionaries Comprehesion ----------------

values = []

for x in range(5):
    values.append(x*2)

val = [x*2 for x in range(5)]

values = {}

for x in range(3):
    values[x] = x*2

val = {x: x*2 for x in range(3)}

# print(values)
# print(val)

# ---------------- Generator ----------------

val = [x*2 for x in range(5)]  # list
value = (x*2 for x in range(5))  # generator

# print(value)
# print(val)
# print(getsizeof(val))
# print(getsizeof(value))

# for x in value:
#     print(x)

# ---------------- Unpacking Operator ----------------

numbers = [1, 2, 3]

# print(*numbers)

value = [*range(5), "a", *numbers]


first = [1, 2]
second = [3]

value = [*first, *second]

# print(value)

first = {"x": 1}
second = {"x": 10, "y": 20}

combined = {**first, **second}

print(combined)