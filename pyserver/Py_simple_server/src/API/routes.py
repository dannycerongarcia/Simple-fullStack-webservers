from flask import Blueprint

mod = Blueprint('Ilist', __name__)

# name of decorator is the name of the blueprint
@mod.route('')
def getStuff():
    return '{"list":[{"id":1,"name":"cars"},{"id":2,"name":"boats"}, {"id":3,"name":"Bikes"}]}'
