from pathlib import Path
import subprocess

# completed = subprocess.run(["ls","-l"],shell=True,capture_output=True)
completed = subprocess.run(["cd", "..", "&&", "ls"],shell=True,capture_output=True,text=True)
# completed = subprocess.run(["ls", "-l"], shell=True,
#                            capture_output=True, text=True,  check=True)

# print(completed)
print("Standard output", completed.stdout)
# print(completed.args)
