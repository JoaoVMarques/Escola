from school.routes.index import Routes
from school.config import Config
from school.extensions import mongo
from flask import Flask

class Server:
  def __init__(self) -> None:
    self.app = Flask('__name__')
    self.routes()
  
  def config_dataBase(self) -> None:
    self.app.config['MONGO_DBNAME'] = 'school'
    self.app.config.from_object(Config())
    mongo.init_app(self.app)

  def start(self) -> None:
    print('Servidor iniciado com sucesso!')
    self.config_dataBase()
    self.app.run()

  def routes(self) -> None:
    self.route = Routes.Tests(self.app)
    self.route = Routes.Acccount(self.app)


if __name__ == '__main__':
  server = Server()
  server.start()
