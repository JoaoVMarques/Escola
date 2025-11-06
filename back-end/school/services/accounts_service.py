from flask import request, Response, json
from flask_jwt_extended import create_access_token, create_refresh_token
from school.models.account_models import Accounts_model

class Accounts_service:
  def __init__(self, account) -> None:
    self.account = account

  async def login_account(self) -> None:
    account = self.account
    model = Accounts_model(account)
    existing_account = await model.findByEmail(account['email'])

    if existing_account and existing_account['password'] == account['password']:
      acess_token = create_access_token(identity=account['password'])
      refresh_token = create_refresh_token(identity=account['password'])
      
      return {
        "content": {
          "message": "acesso autorizado.",
          "tokens": {
            "acess": acess_token,
            "refresh": refresh_token
          },
        },
        "statusCode": 200
      }
    else:
      return { "message": "email ou senha incorreta", "statusCode": 401 }