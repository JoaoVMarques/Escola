from school.routes.Test_route import Test_Routes
from school.routes.Accounts_route import Accounts_route

class Routes:
  def Tests(app):
    Test_Routes(app)

  def Acccount(app):
    Accounts_route(app)