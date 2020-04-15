import datetime

class Logger:
  def __init__(self, date=None):
    self.date = datetime.datetime.now()

  def log_loggin(self):
    return {
      "date": self.date,
      "action": "loggin"
    }