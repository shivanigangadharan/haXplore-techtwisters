import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
import pyotp


pyotp.random_base32()
totp = pyotp.TOTP("base32secret3232")
print (totp.now())

message = Mail(
    from_email='parulagg27@gmail.com',
    to_emails='parulaggarwal272@gmail.com',
    subject='Bank Statement Access Request: OTP verrification',
    html_content='Hello! An NBFC requested to get bank narrations for your account no: XXXXX8086. \nPlease kindly verify.\
    			Your OTP is: {}'.format(totp.now()))

sg = SendGridAPIClient(os.environ.get('TWILIO_ACCOUNT_ID'))
response = sg.send(message)
print(response.status_code, response.body, response.headers)
