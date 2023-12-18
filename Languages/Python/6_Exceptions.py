# ======================= Exceptions =======================

# numbers = [1, 2]

# try:
#     age = int(input("age : "))
#     print("age :: ", age)
#     xfactor = 10/age
# except (ValueError, ZeroDivisionError) as error:
#     print("error :: ", error)
# else:
#     print("No exceptions")
# finally:
#     print("this call every time")


def calculate_xfactor(age):
    if (age <= 0):
        raise ValueError("not defiend facrot")
    return 10/age


try:
    calculate_xfactor(-1)
except ValueError as error:
    print("error :: ",error)
