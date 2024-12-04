from src import db, app
from src.models import Products

def add_products():
    sample_products = [
        {
            "name": "Laptop",
            "description": "High-performance laptop with 16GB RAM.",
            "price": 1200.50,
            "stock": 10
        },
        {
            "name": "Smartphone",
            "description": "Latest 5G-enabled smartphone.",
            "price": 699.99,
            "stock": 25
        },
        {
            "name": "Wireless Headphones",
            "description": "Noise-canceling over-ear headphones.",
            "price": 149.99,
            "stock": 15
        },
        {
            "name": "Gaming Chair",
            "description": "Ergonomic chair for gamers.",
            "price": 249.99,
            "stock": 5
        }
    ]

    with app.app_context():
        for product in sample_products:
            new_product = Products(
                name=product["name"],
                description=product["description"],
                price=product["price"],
                stock=product["stock"]
            )
            db.session.add(new_product)
        
        db.session.commit()
        print("Sample products added successfully.")

if __name__ == "__main__":
    add_products()
