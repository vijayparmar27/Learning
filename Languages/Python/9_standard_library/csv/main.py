import csv

# with open("./test.csv","w",newline='') as csv_file:
#     writer = csv.writer(csv_file)
#     writer.writerow(["id","name","pass"])
#     writer.writerow([1,"dev","devv"])
#     writer.writerow([2,"dev1","devv1"])

with open("./test.csv","r") as csv_file:
    reader = csv.reader(csv_file)
    print(reader)

    for row in reader: # Because the "reader" is itable we can use a for loop over it.
        print(row)
