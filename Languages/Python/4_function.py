# ======================= Function =======================

# ---------------- For Loop ----------------

def greet():
    print("Hii there ...")

# greet()


def greet1(name):
    print(f"hii ... {name}")

# greet1("developer")

# default return None Data type

# ---------------- Keyword Arguments ----------------


def increament(number, by):
    return number + by


# print(increament(2, 3))
# print(increament(2, by = 3))  # default argument

def increament1(number, by=1):
    return number + by

# print(increament1(2))

# ---------------- xargs ----------------

# def mutiply(*number):
#     print(number)

# mutiply(1,2,3)


def mutiply1(*numbers):
    for number in numbers:
        print(number)

# mutiply1(1, 2, 3)

# ---------------- xxargs ----------------
        
# def save_user(**user):
#     print(user)

# save_user(id = 1, name = "dev", age = "unknow")
        
def save_user(**user):
    print(user["name"])

# save_user(id = 1, name = "dev", age = "unknow")
    
# ---------------- Scop ----------------

message = "a"   # message globle scop

# def func():
#     message = "b"  # this message variable is local scop

# func()

def func1():
    global message  # use globle variable
    message = "b"   # change globle variable value

# func1()  


def func2():
    print("message :: ",message)  # "a"

# func2()
    
# print(message)