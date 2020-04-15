from .db import db
from flask_bcrypt import generate_password_hash, check_password_hash

class User(db.Document):
  name = db.StringField(required=True, min_length=3)
  email = db.EmailField(required=True, unique=True)
  password = db.StringField(required=True, min_length=6)
  
  def hash_password(self):
    self.password = generate_password_hash(self.password).decode('utf-8')

  def check_password(self, password):
    return check_password_hash(self.password, password)

class Log(db.Document):
  date = db.DateTimeField(required=True)
  user = db.ReferenceField('User')
  action = db.StringField(required=True)
