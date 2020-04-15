from flask import Response, request
from flask_restful import Resource
from flask_jwt_extended import create_access_token
import datetime

from database.models import User, Log
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist
from utils.errors import Errors
from utils.logger import Logger

class SignupApi(Resource):
  def post(self):
    try:
      body = request.get_json()
      user = User(**body)
      user.hash_password()
      user.save()
      return 'User created!', 201
    except FieldDoesNotExist:
      raise SchemaValidationError
    except NotUniqueError:
      error = Errors("Given e-mail already in use", "email")
      return error.notunique()
    except Exception as e:
      raise InternalServerError

class LoginApi(Resource):
  def post(self):
    try:
      body = request.get_json()
      user = User.objects.get(email=body.get('email'))
      authorized = user.check_password(body.get('password'))

      if not authorized:
        error = Errors("Invalid e-mail or password")
        return error.unauthorized()

      expires = datetime.timedelta(hours=8)
      access_token = create_access_token(identity=str(user.id), expires_delta=expires)
      logger = Logger().log_loggin()
      l = Log(**logger, user=user)
      l.save()
      return {'token': access_token, 'Authorized': True}, 200

    except DoesNotExist:
      error = Errors("Invalid e-mail or password")
      return error.unauthorized()
