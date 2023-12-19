# ======================= Classes =======================

# class : blueprint for creating object

# object : instane of a class

from collections import namedtuple
from abc import ABC, abstractmethod


class Point:
    def draw(self):
        print("drawing Point")


point = Point()
# point.draw()

# print(isinstance(point, Point))

# ----------------------------------------------


class Point:
    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def draw(self):
        print(f"point : x : {self.x} , y : {self.y} ")


point = Point(1, 2)

# point.draw()

# ----------------------------------------------


class Point:
    default_color = "red"

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def draw(self):
        print(f"point : x : {self.x} , y : {self.y} ")


point = Point(2, 3)
# print(point.default_color)

Point.default_color = "black"  # we can change class globle variables
# print(point.default_color)

# ---------------- Class Vs Instance Method ----------------

# factory method


class Point:

    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    @classmethod
    def zero(cls):
        return cls(0, 0)

    def draw(self):
        print(f"point : x : {self.x} , y : {self.y} ")


point = Point.zero()

# point.draw()

# ---------------- Magic Method ----------------


class Point:
    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __str__(self) -> str:           # for class object string reprasentaion
        return f"point : x : {self.x} , y : {self.y} "


point = Point(4, 5)

# print(point) # for class object string reprasentaion

# ---------------- Comparing Object ----------------


class Point:
    def __init__(self, x, y) -> None:
        self.x = x
        self.y = y

    def __eq__(self, other: object) -> bool:           # for comaring class objecets
        return self.x == other.x and self.y == other.y

    def __str__(self) -> str:           # for class object string reprasentaion
        return f"point : x : {self.x} , y : {self.y} "


point1 = Point(1, 2)
point2 = Point(1, 2)

# print("point1 == point2 ::", point1 == point2) # # for comaring class objecets

# ---------------- Performing Arithmetic Operator ----------------


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):                 # add class object instance
        return Point(self.x + other.x, self.y + other.y)

    def __str__(self) -> str:           # for class object string reprasentaion
        return f"point : x : {self.x} , y : {self.y} "


point1 = Point(1, 2)
point2 = Point(2, 4)

point3 = point1 + point2

# print(point3)

# ---------------- Making Custom Container ----------------


class TagCloud:
    def __init__(self) -> None:
        self.tags = {}

    def add(self, tag):
        self.tags[tag.lower()] = self.tags.get(tag.lower(), 0) + 1

    def __getitem__(self, tag):
        return self.tags.get(tag.lower(), 0)

    def __setitem__(self, tag, count):
        self.tags[tag.lower()] = count

    def __len__(self):
        return len(self.tags)

    def __iter__(self):  # Implmenting a magic method to make our object iterable
        return iter(self.tags)


cloud = TagCloud()
# print(cloud)
# print(cloud.tags)

cloud.add("python")
cloud.add("python")
cloud.add("JavaScript")
# print(cloud.tags)

cloud.add("python")
cloud.add("JavaScript")
# print(cloud.tags)

cloud["Java"] = 5  # use __setitem__
cloud["C++"] = 2   # use __setitem__
# print(cloud.tags)

# print(cloud["javascript"])  # use __getitem__

# print(len(cloud)) # use __len__


# for tag in cloud:  # use __iter__
#     print(tag)

# for tag, count in cloud.tags.items():
#     print(tag, count)

# for tag in cloud:
#     print(tag, cloud[tag])

# ---------------- Private Member ----------------

class TagCloud:
    def __init__(self) -> None:
        self.__tage = {}        # private member


cloud = TagCloud()

# print(cloud.__tage) # error


# ---------------- Properties ----------------

class Product_3:
    def __init__(self, price):
        self.price = price

    @property
    def price(self):
        return self.__price

    @price.setter
    def price(self, value):
        if value < 0:
            raise ValueError("Price can not be negative")
        else:
            self.__price = value


product = Product_3(50)
# print(product.price)
product.price = 1
# print(product.price)

# ---------------- Multi-level Inheritance ----------------


class Animal:
    def __init__(self, age) -> None:
        self.age = age

    def eat(self):
        print("eat")


class Mammul(Animal):

    def __init__(self, age, type) -> None:
        super().__init__(age)
        self.type = type

    def walk(self):
        print("walk")


class Fish(Mammul):
    def __init__(self, age, type) -> None:
        super().__init__(age, type)

    def swim(self):
        print("swim")


mammul = Mammul(10, "newtype")
# mammul.walk()

fish = Fish(10, "catfish")
# fish.swim()

# print(isinstance(fish,Animal))

# ---------------- Multiple Inheritance ----------------


class Employ:
    def greet(self):
        print("Employ Greeting")


class Person:
    def greet(self):
        print("Person Greeting")


class Manager(Employ, Person):
    pass


manager = Manager()

# manager.greet()


# --------------------------------------------------------


class InvalidOperationError(Exception):
    pass


class Stream:
    def __init__(self) -> None:
        self.opend = False

    def open(self):
        if self.opend:
            raise InvalidOperationError("already open...")
        self.opend = True

    def close(self):
        if self.opend:
            raise InvalidOperationError("already close...")
        self.opend = False


class FileStream(Stream):
    def read(self):
        print("reading....")


class NetworkStream(Stream):
    def read(self):
        print("reading....")


# --------------- Abstact Base Class ----------------

class Stream(ABC):
    @abstractmethod
    def read(self):
        pass


class memoryStream(Stream):
    def __init__(self) -> None:
        super().__init__()

    def read(self):
        print("  -----  ")


steam = memoryStream()

# --------------- Polymorphism ----------------


class UIControl(ABC):
    @abstractmethod
    def draw(self):
        pass


class TextBox(UIControl):
    def draw(self):
        print("TextBox")


class DropDownList(UIControl):
    def draw(self):
        print("DropDownList")


ddl = DropDownList()
# print(isinstance(ddl, UIControl))

tb = TextBox()
# print(isinstance(tb, UIControl))


def draw(controls):
    for control in controls:
        control.draw()


# draw([ddl, tb])

# ---------------  Duck Typing ----------------

# With the example from the last class.
# Because Python is a dynamic typed language, we do not necessarily the UIContorl class

# class UIControl(ABC):
#     @abstractmethod
#     def draw(self):
#         pass

class TextBox():
    def draw(self):
        print("TextBox")


class DropDownList():
    def draw(self):
        print("DropDownList")


def draw(controls):
    for control in controls:
        control.draw()

# --------------- Built-in Types ----------------

# In Python can also use inheritance with the built-in types.


class Text(str):
    def duplicate(self):
        return self + self


text = Text("Python")
print(text.duplicate())


class TackableList(list):
    def append(self, object):
        print("Append called")
        super().append(object)


object_list = TackableList()
object_list.append(1)
print(object_list)

# --------------- Built-in Types ----------------


# We use classes to bundle data and functionalatie into one unit.
# In some cases we may come across with classes that don't have any behavior like functions. And only have data

class Point:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

# With this we can create point objects


p1 = Point(1, 2, 3)
p2 = Point(1, 2, 3)
# print(p1 == p2) # But when using this, it will return False, because the two objects are stored in diferent locations of the memory
# print(id(p1)) # To see where they are stored in memory use the "id()" funtions that returns memory address.
# print(id(p2)) # To solve this issue we must implement a magic method like the ones seen on leson 08 Performing Arithmetic Operations.


# When dealing with classes that have no behavior, and just have data, whe can use namedtuple instead.
# Importing form the "collection" module the "namedtuple()" function

# The first argument we specify the label for the the new type we want to create. The second argument we pass an array of field names or atribute names.

Point_t = namedtuple("Point", ['x', "y", "z"])
p4 = Point_t(x=1, y=2, z=3)
p5 = Point_t(x=1, y=2, z=3)
# print(p4 == p5)
# print(p4)
# print(p4.x)

# If working with classes, that only contain data it is usual better to use "nametuple()"
# Our code is more clear and less ambigues
# And also that we do not ness to create a magic method to compare two objects.
