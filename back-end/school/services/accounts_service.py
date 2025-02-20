from flask import request, Response, json
from school.models.account_models import Accounts_model

class Accounts_service:
  def __init__(self, account) -> None:
    self.account = account

  async def login_account(self) -> None:
    model = Accounts_model(self.account)
    existing_account = await model.findByEmail(self.account['email'])

    if existing_account and existing_account['password'] == self.account['password']:
      return { "message": "acesso autorizado.", "statusCode": 200 }
    else:
      return { "message": "email ou senha incorreta", "statusCode": 401 }