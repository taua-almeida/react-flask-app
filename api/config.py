# Import dependencies
import os
from os import environ

class Config:
  # Enable protection agains *Cross-site Request Forgery (CSRF)*
  CSRF_ENABLED = True

  # Use a secure, unique and absolutely secret key for
  # signing the data.
  CSRF_SESSION_KEY = os.urandom(24)

  # JWT_SECRET_KEY
  JWT_SECRET_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzb21lIjoicGF5bG9hZCJ9.Joh1R2dYzkRvDkqv3sygm5YyK8Gi4ShZqbhK2gxcs2U'

  # Set the session cookie to be secure
  SESSION_COOKIE_SECURE = True

  # Set the secret key to a sufficiently random value
  SECRET_KEY = os.urandom(24)

class ProdConfig(Config):
  DEBUG = False
  TESTING = False
  DATABASE_URI = os.environ.get('PROD_DATABASE_URI')


class DevConfig(Config):
  DEBUG = True
  TESTING = True
  MONGODB_SETTINGS = {
    'db': 'reactflask',
    'host': 'mongodb://localhost:27017/reactflask'
  }

