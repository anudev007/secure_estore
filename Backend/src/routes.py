from flask import Flask, request, jsonify, make_response
from src import app, db
from src.models import User, Products, Cart

@app.route("/register", methods=['POST'])
def register():
    data = request.json
    if not data or not all(k in data for k in ("lastname", "firstname", "email", "password")):
        return jsonify({"error": "Missing required fields"}), 400

    user = User(
        lastname=data["lastname"],
        firstname=data["firstname"],
        email=data["email"],
        password=data['password'],
        user_type='consumer'
    )
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "Account created successfully"}), 201