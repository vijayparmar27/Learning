from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
import smtplib
from pathlib import Path
from string import Template 

template = Template(Path("./template.html").read_text()) 

from_mail = "dev.v.test.27@gmail.com"
passw = "prck hoxs udzw cbcj" 
port = 587
# port = 465

message = MIMEMultipart() 
message["from"] = from_mail
message["to"] = "vijayparmar0027@gmail.com"

message["subject"] = "Python email!"
email_body = template.substitute({"first_name": "Vijay", "last_name": "Parmar"})  
message.attach(MIMEText(email_body, "html"))
message.attach(MIMEImage(Path("./mahadev.jpg").read_bytes()))


with smtplib.SMTP(host="smtp.gmail.com", port=port) as smtp: 
    smtp.ehlo() 
    smtp.starttls() 
    smtp.login(from_mail, passw)
    smtp.send_message(message)
    print("Sent...")