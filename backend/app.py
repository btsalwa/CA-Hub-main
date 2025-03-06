from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
import os
from datetime import datetime, timedelta
from dotenv import load_dotenv
from werkzeug.security import generate_password_hash, check_password_hash

load_dotenv()

app = Flask(__name__)
CORS(app)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'postgresql://postgres:postgres@localhost:5432/cahub')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# JWT configuration
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'super-secret-key-change-in-production')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)

# Models
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    is_admin = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
        
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

class NewsItem(db.Model):
    __tablename__ = 'news_items'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    excerpt = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Event(db.Model):
    __tablename__ = 'events'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Newsletter(db.Model):
    __tablename__ = 'newsletters'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    file_url = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class SuccessStory(db.Model):
    __tablename__ = 'success_stories'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    farmer = db.Column(db.String(255), nullable=False)
    location = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String(255), nullable=False)
    summary = db.Column(db.Text, nullable=False)
    full_story = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class TechnicalResource(db.Model):
    __tablename__ = 'technical_resources'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    type = db.Column(db.String(100), nullable=False)
    date = db.Column(db.String(50), nullable=False)
    location = db.Column(db.String(255))
    downloadable = db.Column(db.Boolean, default=True)
    file_url = db.Column(db.String(255))
    external_url = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

# Authentication routes
@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.json
    
    # Check if username or email already exists
    if User.query.filter_by(username=data['username']).first():
        return jsonify({'message': 'Username already exists'}), 400
    
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'message': 'Email already exists'}), 400
    
    # Create new user
    user = User(
        username=data['username'],
        email=data['email'],
        is_admin=data.get('is_admin', False)
    )
    user.set_password(data['password'])
    
    db.session.add(user)
    db.session.commit()
    
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    
    if not user or not user.check_password(data['password']):
        return jsonify({'message': 'Invalid username or password'}), 401
    
    # Create access token
    access_token = create_access_token(identity={
        'user_id': user.id,
        'username': user.username,
        'is_admin': user.is_admin
    })
    
    return jsonify({
        'access_token': access_token,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'is_admin': user.is_admin
        }
    })

# Routes for NewsItems
@app.route('/api/news', methods=['GET'])
def get_news_items():
    news_items = NewsItem.query.order_by(NewsItem.date.desc()).all()
    result = []
    for item in news_items:
        result.append({
            'id': item.id,
            'title': item.title,
            'date': item.date,
            'excerpt': item.excerpt
        })
    return jsonify(result)

@app.route('/api/news/<int:id>', methods=['GET'])
def get_news_item(id):
    item = NewsItem.query.get_or_404(id)
    return jsonify({
        'id': item.id,
        'title': item.title,
        'date': item.date,
        'excerpt': item.excerpt
    })

@app.route('/api/news', methods=['POST'])
@jwt_required()
def create_news_item():
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    data = request.json
    news_item = NewsItem(
        title=data['title'],
        date=data['date'],
        excerpt=data['excerpt']
    )
    db.session.add(news_item)
    db.session.commit()
    return jsonify({
        'id': news_item.id,
        'title': news_item.title,
        'date': news_item.date,
        'excerpt': news_item.excerpt
    }), 201

@app.route('/api/news/<int:id>', methods=['PUT'])
@jwt_required()
def update_news_item(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    item = NewsItem.query.get_or_404(id)
    data = request.json
    item.title = data.get('title', item.title)
    item.date = data.get('date', item.date)
    item.excerpt = data.get('excerpt', item.excerpt)
    db.session.commit()
    return jsonify({
        'id': item.id,
        'title': item.title,
        'date': item.date,
        'excerpt': item.excerpt
    })

@app.route('/api/news/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_news_item(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    item = NewsItem.query.get_or_404(id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({'message': 'News item deleted successfully'})

# Routes for Events
@app.route('/api/events', methods=['GET'])
def get_events():
    events = Event.query.order_by(Event.date.desc()).all()
    result = []
    for event in events:
        result.append({
            'id': event.id,
            'title': event.title,
            'date': event.date,
            'location': event.location,
            'description': event.description
        })
    return jsonify(result)

@app.route('/api/events/<int:id>', methods=['GET'])
def get_event(id):
    event = Event.query.get_or_404(id)
    return jsonify({
        'id': event.id,
        'title': event.title,
        'date': event.date,
        'location': event.location,
        'description': event.description
    })

@app.route('/api/events', methods=['POST'])
@jwt_required()
def create_event():
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    data = request.json
    event = Event(
        title=data['title'],
        date=data['date'],
        location=data['location'],
        description=data['description']
    )
    db.session.add(event)
    db.session.commit()
    return jsonify({
        'id': event.id,
        'title': event.title,
        'date': event.date,
        'location': event.location,
        'description': event.description
    }), 201

@app.route('/api/events/<int:id>', methods=['PUT'])
@jwt_required()
def update_event(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    event = Event.query.get_or_404(id)
    data = request.json
    event.title = data.get('title', event.title)
    event.date = data.get('date', event.date)
    event.location = data.get('location', event.location)
    event.description = data.get('description', event.description)
    db.session.commit()
    return jsonify({
        'id': event.id,
        'title': event.title,
        'date': event.date,
        'location': event.location,
        'description': event.description
    })

@app.route('/api/events/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_event(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    event = Event.query.get_or_404(id)
    db.session.delete(event)
    db.session.commit()
    return jsonify({'message': 'Event deleted successfully'})

# Routes for Newsletters
@app.route('/api/newsletters', methods=['GET'])
def get_newsletters():
    newsletters = Newsletter.query.order_by(Newsletter.date.desc()).all()
    result = []
    for newsletter in newsletters:
        result.append({
            'id': newsletter.id,
            'title': newsletter.title,
            'date': newsletter.date,
            'description': newsletter.description,
            'fileUrl': newsletter.file_url
        })
    return jsonify(result)

@app.route('/api/newsletters/<int:id>', methods=['GET'])
def get_newsletter(id):
    newsletter = Newsletter.query.get_or_404(id)
    return jsonify({
        'id': newsletter.id,
        'title': newsletter.title,
        'date': newsletter.date,
        'description': newsletter.description,
        'fileUrl': newsletter.file_url
    })

@app.route('/api/newsletters', methods=['POST'])
@jwt_required()
def create_newsletter():
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    data = request.json
    newsletter = Newsletter(
        title=data['title'],
        date=data['date'],
        description=data['description'],
        file_url=data.get('fileUrl')
    )
    db.session.add(newsletter)
    db.session.commit()
    return jsonify({
        'id': newsletter.id,
        'title': newsletter.title,
        'date': newsletter.date,
        'description': newsletter.description,
        'fileUrl': newsletter.file_url
    }), 201

@app.route('/api/newsletters/<int:id>', methods=['PUT'])
@jwt_required()
def update_newsletter(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    newsletter = Newsletter.query.get_or_404(id)
    data = request.json
    newsletter.title = data.get('title', newsletter.title)
    newsletter.date = data.get('date', newsletter.date)
    newsletter.description = data.get('description', newsletter.description)
    newsletter.file_url = data.get('fileUrl', newsletter.file_url)
    db.session.commit()
    return jsonify({
        'id': newsletter.id,
        'title': newsletter.title,
        'date': newsletter.date,
        'description': newsletter.description,
        'fileUrl': newsletter.file_url
    })

@app.route('/api/newsletters/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_newsletter(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    newsletter = Newsletter.query.get_or_404(id)
    db.session.delete(newsletter)
    db.session.commit()
    return jsonify({'message': 'Newsletter deleted successfully'})

# Routes for Success Stories
@app.route('/api/success-stories', methods=['GET'])
def get_success_stories():
    stories = SuccessStory.query.all()
    result = []
    for story in stories:
        result.append({
            'id': story.id,
            'title': story.title,
            'farmer': story.farmer,
            'location': story.location,
            'image': story.image,
            'summary': story.summary,
            'fullStory': story.full_story
        })
    return jsonify(result)

@app.route('/api/success-stories/<int:id>', methods=['GET'])
def get_success_story(id):
    story = SuccessStory.query.get_or_404(id)
    return jsonify({
        'id': story.id,
        'title': story.title,
        'farmer': story.farmer,
        'location': story.location,
        'image': story.image,
        'summary': story.summary,
        'fullStory': story.full_story
    })

@app.route('/api/success-stories', methods=['POST'])
@jwt_required()
def create_success_story():
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    data = request.json
    story = SuccessStory(
        title=data['title'],
        farmer=data['farmer'],
        location=data['location'],
        image=data['image'],
        summary=data['summary'],
        full_story=data.get('fullStory')
    )
    db.session.add(story)
    db.session.commit()
    return jsonify({
        'id': story.id,
        'title': story.title,
        'farmer': story.farmer,
        'location': story.location,
        'image': story.image,
        'summary': story.summary,
        'fullStory': story.full_story
    }), 201

@app.route('/api/success-stories/<int:id>', methods=['PUT'])
@jwt_required()
def update_success_story(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    story = SuccessStory.query.get_or_404(id)
    data = request.json
    story.title = data.get('title', story.title)
    story.farmer = data.get('farmer', story.farmer)
    story.location = data.get('location', story.location)
    story.image = data.get('image', story.image)
    story.summary = data.get('summary', story.summary)
    story.full_story = data.get('fullStory', story.full_story)
    db.session.commit()
    return jsonify({
        'id': story.id,
        'title': story.title,
        'farmer': story.farmer,
        'location': story.location,
        'image': story.image,
        'summary': story.summary,
        'fullStory': story.full_story
    })

@app.route('/api/success-stories/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_success_story(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    story = SuccessStory.query.get_or_404(id)
    db.session.delete(story)
    db.session.commit()
    return jsonify({'message': 'Success story deleted successfully'})

# Routes for Technical Resources
@app.route('/api/technical-resources', methods=['GET'])
def get_technical_resources():
    resources = TechnicalResource.query.all()
    result = []
    for resource in resources:
        result.append({
            'id': resource.id,
            'title': resource.title,
            'type': resource.type,
            'date': resource.date,
            'location': resource.location,
            'downloadable': resource.downloadable,
            'fileUrl': resource.file_url,
            'externalUrl': resource.external_url
        })
    return jsonify(result)

@app.route('/api/technical-resources/<int:id>', methods=['GET'])
def get_technical_resource(id):
    resource = TechnicalResource.query.get_or_404(id)
    return jsonify({
        'id': resource.id,
        'title': resource.title,
        'type': resource.type,
        'date': resource.date,
        'location': resource.location,
        'downloadable': resource.downloadable,
        'fileUrl': resource.file_url,
        'externalUrl': resource.external_url
    })

@app.route('/api/technical-resources', methods=['POST'])
@jwt_required()
def create_technical_resource():
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    data = request.json
    resource = TechnicalResource(
        title=data['title'],
        type=data['type'],
        date=data['date'],
        location=data.get('location'),
        downloadable=data.get('downloadable', True),
        file_url=data.get('fileUrl'),
        external_url=data.get('externalUrl')
    )
    db.session.add(resource)
    db.session.commit()
    return jsonify({
        'id': resource.id,
        'title': resource.title,
        'type': resource.type,
        'date': resource.date,
        'location': resource.location,
        'downloadable': resource.downloadable,
        'fileUrl': resource.file_url,
        'externalUrl': resource.external_url
    }), 201

@app.route('/api/technical-resources/<int:id>', methods=['PUT'])
@jwt_required()
def update_technical_resource(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    resource = TechnicalResource.query.get_or_404(id)
    data = request.json
    resource.title = data.get('title', resource.title)
    resource.type = data.get('type', resource.type)
    resource.date = data.get('date', resource.date)
    resource.location = data.get('location', resource.location)
    resource.downloadable = data.get('downloadable', resource.downloadable)
    resource.file_url = data.get('fileUrl', resource.file_url)
    resource.external_url = data.get('externalUrl', resource.external_url)
    db.session.commit()
    return jsonify({
        'id': resource.id,
        'title': resource.title,
        'type': resource.type,
        'date': resource.date,
        'location': resource.location,
        'downloadable': resource.downloadable,
        'fileUrl': resource.file_url,
        'externalUrl': resource.external_url
    })

@app.route('/api/technical-resources/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_technical_resource(id):
    # Check if user is admin
    current_user = get_jwt_identity()
    if not current_user.get('is_admin', False):
        return jsonify({'message': 'Admin access required'}), 403
    resource = TechnicalResource.query.get_or_404(id)
    db.session.delete(resource)
    db.session.commit()
    return jsonify({'message': 'Technical resource deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True)