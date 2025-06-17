import os
import PIL.Image
import google.generativeai as genai
from google.api_core.exceptions import NotFound
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Read the API key from the environment variable
api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    raise EnvironmentError("Missing environment variable: GOOGLE_API_KEY")

# Configure the API with the key
genai.configure(api_key=api_key)

# Load the image
img = PIL.Image.open('foto1.jpg')

# Use the new model
model = genai.GenerativeModel('gemini-1.5-flash')

# Generate content
try:
    response = model.generate_content(img)
    print(response.text)
except NotFound as e:
    print("Model not found:", e)
except Exception as e:
    print("An error occurred:", e)
