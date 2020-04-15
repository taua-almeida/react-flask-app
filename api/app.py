from flask import Flask
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

from database.db import initialize_db
from flask_restful import Api

app = Flask(__name__)
app.config.from_object('config.DevConfig')
CORS(app)

from resources.routes import initialize_routes

api = Api(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

initialize_db(app)
initialize_routes(api)
