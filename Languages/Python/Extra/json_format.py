import json
myprod = {
	"Product":"Mobile",
	"Model": "XUT",
	"Units": 120,
	"Available": "Yes"
}

class myfunc(dict):
	def __str__(self):
		return json.dumps(self);

myJSON = myfunc(myprod)
print("\nJSON format = ",myJSON);


#----------------------------------------

arr = [ {'key' : k, 'value' : myprod[k]} for k in myprod]

print("\nJSON format = ",json.dumps(arr));



#----------------------------------------

json_string = json.dumps(myprod, indent=2)

print(json_string)
#----------------------------------------

# Your dictionary
my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}

# Convert dictionary to JSON-formatted string
json_string = json.dumps(my_dict, indent=4)

# Print the JSON-formatted string
print(json_string)