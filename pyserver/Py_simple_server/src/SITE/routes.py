from flask import Blueprint

mod = Blueprint('site', __name__)

# name of decorator is the name of the blueprint
@mod.route('/index')
def index():
    return 'You are in the index'
