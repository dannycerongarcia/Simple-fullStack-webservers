from flask import Blueprint

mod = Blueprint('api', __name__)

# name of decorator is the name of the blueprint
@mod.route('/getStuff')
def getStuff():
    return '{"items":["cars","boats", "Bikes"]}'
