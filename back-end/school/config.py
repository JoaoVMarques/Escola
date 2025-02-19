import os
from dotenv import load_dotenv
from pymongo import MongoClient
  
class Config:
  def __init__(self) -> None:
    load_dotenv()
    self.MONGO_URI = os.getenv("MONGO_URI")