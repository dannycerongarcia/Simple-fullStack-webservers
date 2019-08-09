from flask import Flask
from src import SITE, API
app = Flask(__name__)

from src.API.routes import mod
from src.SITE.routes import mod

app.register_blueprint(SITE.routes.mod)
app.register_blueprint(API.routes.mod,url_prefix = '/Ilist')