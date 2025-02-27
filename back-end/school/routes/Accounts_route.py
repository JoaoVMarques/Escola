from school.services.accounts_service import Accounts_service
from flask import jsonify, request, json
from flask_cors import cross_origin

class Accounts_route:
  def __init__(self, app) -> None:
    self.app = app
    self.routes()

  def routes(self):
    @self.app.route('/account/login', methods=['POST'])
    async def login():
      data = request.json
      service = Accounts_service(data)
      response = await service.login_account()
      return jsonify({ "message": response['message']}), response['statusCode']
