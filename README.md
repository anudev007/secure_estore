

## **Secure E-Commerce Application**  
### **Overview**  
The Secure E-Commerce Application is a web-based platform that allows users to browse products and manage their carts. This project focuses on integrating modern web security best practices to protect against common vulnerabilities like **SQL injection**, **Cross-Site Scripting (XSS)**, and insecure session handling.  

---

### **Features and Security Objectives**  

#### **Features**:  
1. **User Authentication**:  
   - Secure registration and login functionality.  
   - Role-based access for administrators and customers.  

2. **Product Management**:  
   - **Admin**: CRUD operations for products.  
   - **Customer**: Browse and add products to the cart.  

3. **Cart and Checkout**:  
   - Manage cart items.   

4. **User Management**:  
   - **Admin**: View registered users.  

#### **Security Objectives**:  
- **SQL Injection Prevention**:  
   - Use of parameterized queries with SQLAlchemy.  

- **Cross-Site Scripting (XSS) Mitigation**:  
   - Input validation on the backend.  
   - Angular’s built-in sanitization.  

- **Session Management**:  
   - Secure cookies with HTTPOnly and Secure flags.  
   - CSRF protection using Flask-WTF.  

- **Input Validation**:  
   - Backend validation of user inputs to prevent malicious data.
- - **Role Base Acess Control**:  
   - User type validation on front end and back end  

---

### **Setup and Installation Instructions**  

#### **Prerequisites**:  
- Python 3
- Node.js and npm (for Angular frontend)  
- Flask installed  

#### **Steps for Front End**:  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/anudev007/secure_estore.git 
   cd secure_estore  
   ```  
2. Set up the Angular frontend:  
   ```bash  
   cd Frontend/secure-estore-fe
   npm install  
   ``` 
3. Launch the Angular frontend:  
   ```bash  
   cd frontend  
   ng serve  
   ```
#### **Steps for Bakend**:  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/anudev007/secure_estore.git 
   cd secure_estore/Backend 
   ```   
2. Install Requirements:  
   ```bash  
   pip3 install -r requirements.txt 
   ```  
3. Create and load databse with sample products:  
   ```bash  
   python3 create_db.py
   pyhton3 add_products.py
   ```
4. Run Server:
     ```bash  
   python3 app.py
     ```
5. Run this to add and get admin credenials:
   <local>/admin/load

---

### **Usage Guidelines**  

#### **Accessing the Application**:  
1. **Administrator**:  
   - Login to access product and user management tools.  
   - Add, update, or delete products through the admin dashboard.  

2. **Customer**:  
   - Register and login to browse products.  
   - Manage the shopping cart and place orders.  

#### **Important Notes**:  
- Ensure both the Flask backend and Angular frontend are running before interacting with the app.  
- Use only secure channels (HTTPS) in production environments.
Demonstration Purpose Route:
The route <local>/admin/load is included only for demonstration and testing purposes.
What it does: This route creates an admin user and displays their credentials in the response.
Warning:
This route is not secure and should never be deployed in production environments.
It bypasses standard security protocols such as hashed passwords and secure credential storage.
Action Required Before Deployment:
Ensure this route is removed or disabled in the production version of the application.
Replace this functionality with a secure admin creation process accessible only to authorized users, such as through a CLI or secure admin panel.
---

### **Security Improvements**  

#### **SQL Injection Prevention**:  
- All database interactions use SQLAlchemy with parameterized queries.  

#### **Cross-Site Scripting (XSS)**:  
- Implemented input validation on all user inputs.  
- Ensured Angular templates escape untrusted data.  

#### **Session Management**:  
- Secure cookies are used with the HTTPOnly and Secure flags.  
- CSRF tokens are validated on all sensitive operations.  

#### **Error Handling**:  
- Flask error pages mask internal information to prevent leakage of sensitive details.  

#### **Frontend Security**:  
- Angular handles client-side sanitization and disallows direct HTML injection unless explicitly trusted.  

