import requests
response = requests.post("http://localhost:3000/mess", data={"text":"something"})