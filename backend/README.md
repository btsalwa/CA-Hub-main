# CA Hub Kenya Backend

This is the Flask backend for the CA Hub Kenya website. It provides a RESTful API for managing content including news, events, newsletters, success stories, and technical resources.

## Setup

### Prerequisites

- Python 3.8 or higher
- PostgreSQL

### Installation

1. Create a virtual environment:
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS/Linux: `source venv/bin/activate`

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Create a PostgreSQL database:
   ```
   createdb cahub
   ```

5. Initialize the database:
   ```
   flask db init
   flask db migrate -m "Initial migration"
   flask db upgrade
   ```

6. Seed the database with sample data:
   ```
   python seed.py
   ```

7. Start the development server:
   ```
   flask run
   ```

## API Endpoints

### News Items
- `GET /api/news` - Get all news items
- `GET /api/news/<id>` - Get a specific news item
- `POST /api/news` - Create a new news item
- `PUT /api/news/<id>` - Update a news item
- `DELETE /api/news/<id>` - Delete a news item

### Events
- `GET /api/events` - Get all events
- `GET /api/events/<id>` - Get a specific event
- `POST /api/events` - Create a new event
- `PUT /api/events/<id>` - Update an event
- `DELETE /api/events/<id>` - Delete an event

### Newsletters
- `GET /api/newsletters` - Get all newsletters
- `GET /api/newsletters/<id>` - Get a specific newsletter
- `POST /api/newsletters` - Create a new newsletter
- `PUT /api/newsletters/<id>` - Update a newsletter
- `DELETE /api/newsletters/<id>` - Delete a newsletter

### Success Stories
- `GET /api/success-stories` - Get all success stories
- `GET /api/success-stories/<id>` - Get a specific success story
- `POST /api/success-stories` - Create a new success story
- `PUT /api/success-stories/<id>` - Update a success story
- `DELETE /api/success-stories/<id>` - Delete a success story

### Technical Resources
- `GET /api/technical-resources` - Get all technical resources
- `GET /api/technical-resources/<id>` - Get a specific technical resource
- `POST /api/technical-resources` - Create a new technical resource
- `PUT /api/technical-resources/<id>` - Update a technical resource
- `DELETE /api/technical-resources/<id>` - Delete a technical resource
