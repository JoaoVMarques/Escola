import os
from dotenv import load_dotenv
from pymongo import MongoClient
  
load_dotenv()
class Config:
    MONGO_DBNAME = 'school'
    MONGO_URI = os.getenv("MONGO_URI")
    JWT_SECRET_KEY = os.getenv("FLASK_JWT_SECRET")