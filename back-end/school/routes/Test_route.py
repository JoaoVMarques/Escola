from flask import jsonify

class Test_Routes:
  def __init__(self, app):
    self.app = app
    self.routes()

  def routes(self):
    @self.app.route('/test', methods=['GET'])
    def hello_world():
      return jsonify({ "message": "Hello world" })