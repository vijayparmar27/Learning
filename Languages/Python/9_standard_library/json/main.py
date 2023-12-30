import json
from pathlib import Path

movies_write = [
    {"id": 1, "title": "Terminator", "year": 1989},
    {"id": 2, "title": "Kindergarten Cop", "year": 1990}]

# With the ".dumps()" method form the "json" module. We convert our object to a string formated as JSON.
data_write = (json.dumps(movies_write))
# Because we are worjing with Python it will look the same as the syntax we wrote in our "movies" variable.
# print(data_write)

# Path("./movies.json").write_text(data_write)

data_read = Path("./movies.json").read_text()
print(data_read)

movies_read = json.loads(data_read)
print(movies_read)
print(movies_read[0])