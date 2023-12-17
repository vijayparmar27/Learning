# ======================= Control Flow =======================

# ---------------- For Loop ----------------

# for number in range(3):
#     print("number :: ", number + 1, (number + 1 ) * ".")

# for number in range(1,3):
#     print("number :: ", number + 1, (number + 1 ) * ".")

# ---------------- For Else Loop ----------------

successful = False

# for number in range(5):
#     print(number, "Attempt")
#     if number == 2:
#         successful = True
#     if successful:
#         print("---- successful ----")
#         break
# else:                                  # this condition work when for loop not break
#     print("All Attempt Try.....")

# ---------------- Nested Loops ----------------

# for x in range(3):
#     for y in range(3):
#         print(f" x : {x}, y : {y} ")

# ---------------- Iterable ----------------

# print(type(2))        # int
# print(type(range(2))) # range

# for num in [10,20,30]:
#     print(num)

# ---------------- while loop ----------------

number = 100

# while number > 0:
#     print(number)
#     number //= 2

# ---------------- Infinite loop ----------------

# while True:
#     condition = input("command : ")
#     print("ECHO : ",condition)
#     if condition == "exit":
#         break
