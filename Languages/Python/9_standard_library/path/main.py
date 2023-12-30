from pathlib import Path
# 
path = Path("./config")
# path = Path(r"config\config.txt")
# path = Path().absolute() / "config"

path = Path("./config/config.txt")

print(path) 
print(path.absolute())  #To get the absolute path.
print("name ::",path.name)  # this return only the file name in this path.
print("stem ::",path.stem)       # config
print("suffix ::",path.suffix)   # .txt 
print("parent ::",path.parent)   # config
print("with_suffix ::",path.with_suffix(".text")) #config\config.text -- not change in original
print("is_file ::",path.is_file())
print("is_dir ::",path.is_dir())
# print(path) 
print("path exists....",path.exists())