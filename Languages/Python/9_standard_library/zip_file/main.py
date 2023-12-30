from pathlib import Path
from zipfile import ZipFile

# write zipfile
# with ZipFile("test.zip",mode = "w") as zip:
#     path = Path("./.env")
#     zip.write(path)

# read zip file
with ZipFile("./test.zip","r") as zip:
     print(zip.namelist())
     info = zip.getinfo('.env') # This returns a info object.
     print(info)
     #  print(zip)
     print(info.file_size) # To get the file size
     print(info.compress_size) # to get the compress file size
     zip.extractall("extract") # To extract all the file in the zip file to a directory, in our case we created the directory "extract"