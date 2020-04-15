from .auth import LoginApi, SignupApi

def initialize_routes(api):
  api.add_resource(SignupApi, '/api/auth/create')
  api.add_resource(LoginApi, '/api/auth/login')
  