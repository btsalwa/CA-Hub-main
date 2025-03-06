from app import db, User

# Create a default admin user
def create_admin_user():
    # Check if admin already exists
    admin = User.query.filter_by(username='admin').first()
    if admin:
        print("Admin user already exists.")
        return
    
    # Create new admin user
    admin = User(
        username='admin',
        email='admin@cahub.org',
        is_admin=True
    )
    admin.set_password('admin123')
    
    db.session.add(admin)
    db.session.commit()
    print("Admin user created successfully!")
    print("Username: admin")
    print("Password: admin123")

if __name__ == '__main__':
    create_admin_user()
