from pathlib import Path
from time import ctime
import shutil

path = Path("./dev.txt");

# print(path)
# print(path.exists())
# path.rename("development.txt")

# if Path("./new.txt").exists():
#     Path("./new.txt").unlink()

# To print the human readable time we need to import the "ctime" function from the "time" module
# print(ctime(path.stat().st_ctime)) # Sat Dec 30 11:44:46 2023

# data = path.read_bytes() # which return the content of a file as a bytes object for reprersenting binary data
# print(data)

#------------------------------------------------------------------
# print(path.read_text()) # Which return the content of the file as a string. Using this method it is easier to read a file that the built-in "open()" function.

# file = open("./dev.txt")
# print(file.read())
# file.close()

# with open("./dev.txt") as file:
#     print(file.read())

#------------------------------------------------------------------

target_path = ""

shutil.copy(path, target_path) # for copy file

target_path.unlink() # To delete a file