from flask import Flask, request, jsonify, make_response
from src import app, db
from src.models import User, Products, Cart

def is_authenticated():
    username = request.cookies.get('email')
    print("Cookies received in the request:", request.cookies)
    print(request.cookies)
    if username:
        user = User.query.filter_by(email=username).first()
        if user:
            return True, user
    return False, None

@app.route("/")
def home():
    if is_authenticated():
        return jsonify({"message": f"Hello,{request.cookies.get('email')}"})
        
    return jsonify({"message": f"Not authenticated"}), 403

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

@app.route("/admin/load", methods=['GET'])
def load_admin():
    
    if not User.query.filter_by(email="admin@test.com").first():
        user = User(
            lastname='test',
            firstname='admin',
            email='admin@test.com',
            password='password',
            user_type='admin'
        )
        db.session.add(user)
        db.session.commit()

        
    return jsonify({"email":"admin@test.com", "password": "password"}), 201

@app.route("/login", methods=['POST'])
def login():
    data = request.json
    if not data or not all(k in data for k in ("email", "password")):
        return jsonify({"error": "Missing required fields"}), 400

    user = User.query.filter_by(email=data["email"], password=data["password"]).first()
    if user:
        response = make_response(jsonify({"message": "Login successful", "user": user.user_type, "name":user.firstname } ))
        response.set_cookie("email", user.email, httponly=False, secure=True, samesite='None')
        return response

    return jsonify({"error": "Invalid credentials"}), 401

@app.route("/logout", methods=["POST"])
def logout():
    response = make_response(jsonify({"message": "Logged out successfully"}))
    response.delete_cookie("username")
    return response

@app.route("/account", methods=["GET", "PUT"])
def account():
    authenticated, user = is_authenticated()
    if not authenticated:
        return jsonify({"error": "Unauthorized"}), 401

    if request.method == "GET":
        return jsonify({
            "lastname": user.lastname,
            "firstname": user.firstname,
            "email": user.email,
            "noOfItems": Cart.query.filter_by(user_id=user.id).count(),
        })

    # Update account
    data = request.json
    if "lastname" in data:
        user.lastname = data["lastname"]
    if "firstname" in data:
        user.firstname = data["firstname"]
    if "email" in data:
        user.email = data["email"]
    db.session.commit()
    return jsonify({"message": "Account updated successfully"})

