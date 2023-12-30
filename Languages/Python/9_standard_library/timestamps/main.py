import time 
from time import ctime


# To work with time stamps import the tim emodule
# This time module as a method called ".time()" that returns the current day time as a timestamp.

#print(time.time()) # This return a time stamp in seconds. Counting from the beginning of time in computers the epoch time.

# In ths example we difine a function to send emails, 1000000 e-mails
# With the code bellow we can measure how long it take to run


def send_emails():
    for _ in range(100000):
        pass

start = time.time()
send_emails()
end = time.time()

duration = end - start
print(duration)
print(time.time())
print(ctime(time.time()))