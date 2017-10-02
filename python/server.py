from flask import Flask, jsonify, abort, request

app = Flask(__name__)

tasks = [
    {
        "title": "do laundry",
        "time": 1,
        "time_type": "hour"
    },
    {
        "title": "send emails",
        "time": 30,
        "time_type": "minutes" 
    }
]

@app.route('/api/tasks',  methods=['GET'])
def get_tasks():
    return jsonify(tasks)

@app.route('/api/tasks', methods=['POST'])
def add_task():
    if not request.json or not 'title' in request.json:
        abort(400)
    task = {
        'title': request.json['title'],
        'time': request.json['time'],
        'time_type': request.json['time_type']
    }
    print request.json
    tasks.append(task)
    return jsonify({ 'tasks': tasks }), 201