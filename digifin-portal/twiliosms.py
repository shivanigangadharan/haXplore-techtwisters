import os
from twilio.rest import Client


account_sid = os.environ.get('TWILIO_ACCOUNT_ID')
auth_token = os.environ.get('TWILIO_AUTH_TOKEN')

client = Client(account_sid, auth_token)

client.messages.create(from_='095996 90399',
                       to='+918448155020',
                       body='You just sent an SMS from Python using Twilio!')