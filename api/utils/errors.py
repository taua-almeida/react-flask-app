class Errors:
  def __init__(self, error, field=None):
    self.error = error
    self.field = field

  def notunique(self):
    return {
      "UniqueKeyError": {
        "field": self.field,
        "msg" : self.error,
        "status": 400
      }
    }

  def unauthorized(self):
    return {
      "UnauthorizedError": {
        "msg": self.error,
        "status": 400
      }
    }
  