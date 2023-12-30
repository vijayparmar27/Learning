from pathlib import Path

# path = Path("./dev");

# if not path.exists(): # if dev not exist than create
#     path.mkdir()

# path.rename("development")

# path = Path();
# for p in path.iterdir():
#     print(p)

# path1 = [p for p in path.iterdir()]
# path1 = [p for p in path.iterdir() if p.is_dir()]

# print(path1)

# -----------------------------------------------------

path = Path()

print(path.glob("*.py"))  # return generator

# print([p for p in path.glob("*.py")])
# print([p for p in path.glob("**/*.py")])

# we will get all the py files in this folder and sub folders.
print([p for p in path.rglob("*.py")])
