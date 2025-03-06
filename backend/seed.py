from app import db, NewsItem, Event, Newsletter, SuccessStory, TechnicalResource

# Clear existing data
db.session.query(NewsItem).delete()
db.session.query(Event).delete()
db.session.query(Newsletter).delete()
db.session.query(SuccessStory).delete()
db.session.query(TechnicalResource).delete()
db.session.commit()

# Seed News Items
news_items = [
    NewsItem(
        title="CA Hub Kenya Hosts Successful Symposium",
        date="March 15, 2023",
        excerpt="Over 100 stakeholders gathered to discuss the future of Conservation Agriculture in Kenya."
    ),
    NewsItem(
        title="New Research Shows CA Benefits for Small-Scale Farmers",
        date="February 3, 2023",
        excerpt="Recent study demonstrates significant yield improvements for farmers implementing CA practices."
    ),
    NewsItem(
        title="Government Endorses CA Practices in New Agricultural Policy",
        date="January 20, 2023",
        excerpt="Ministry of Agriculture includes Conservation Agriculture as a key strategy in climate adaptation."
    )
]

# Seed Events
events = [
    Event(
        title="Conservation Agriculture Field Day",
        date="June 15, 2023",
        location="Nakuru County",
        description="Practical demonstrations of CA techniques for farmers and extension officers."
    ),
    Event(
        title="CA Training Workshop for Extension Officers",
        date="July 10-12, 2023",
        location="KALRO Kabete, Nairobi",
        description="Three-day intensive training on CA principles and implementation strategies."
    ),
    Event(
        title="Regional CA Network Meeting",
        date="August 5, 2023",
        location="Virtual",
        description="Connecting CA practitioners across East Africa to share experiences and best practices."
    )
]

# Seed Newsletters
newsletters = [
    Newsletter(
        title="CA Hub Kenya Newsletter - Q1 2023",
        date="March 2023",
        description="Featuring updates on CA adoption rates, success stories from Nakuru County, and upcoming events.",
        file_url="/newsletters/q1-2023.pdf"
    ),
    Newsletter(
        title="CA Hub Kenya Newsletter - Q4 2022",
        date="December 2022",
        description="Year-end review of CA Hub activities, policy developments, and plans for 2023.",
        file_url="/newsletters/q4-2022.pdf"
    ),
    Newsletter(
        title="CA Hub Kenya Newsletter - Q3 2022",
        date="September 2022",
        description="Special focus on CA mechanization options for small-scale farmers and training opportunities.",
        file_url="/newsletters/q3-2022.pdf"
    ),
    Newsletter(
        title="CA Hub Kenya Newsletter - Q2 2022",
        date="June 2022",
        description="Highlighting research findings on CA benefits for soil health and climate resilience.",
        file_url="/newsletters/q2-2022.pdf"
    )
]

# Seed Success Stories
success_stories = [
    SuccessStory(
        title="Transforming Farming in Machakos County",
        farmer="John Mwangi",
        location="Machakos County",
        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80",
        summary="After adopting CA practices, John has seen his maize yields increase by 40% while reducing his input costs by 25%. He now serves as a CA champion in his community."
    ),
    SuccessStory(
        title="Women's Group Embraces Conservation Agriculture",
        farmer="Mwihaki Women's Group",
        location="Muranga County",
        image="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=800&q=80",
        summary="A group of 15 women farmers have collectively implemented CA on their farms, sharing equipment and knowledge. They report improved soil health and water retention during dry seasons."
    ),
    SuccessStory(
        title="From Skeptic to Advocate",
        farmer="David Kiprop",
        location="Uasin Gishu County",
        image="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&q=80",
        summary="Initially skeptical about minimum tillage, David now practices full CA on his 10-acre farm. He has documented significant improvements in soil structure and biodiversity."
    )
]

# Seed Technical Resources
technical_resources = [
    TechnicalResource(
        title="Building networks and partnerships for effective knowledge sharing and promotion of Conservation Agriculture – The case of CA Hub-Kenya",
        type="Paper",
        date="June 2023",
        location="Presented at 3ACCA in Rabat Morocco",
        downloadable=True,
        file_url="/resources/ca-hub-networks-paper.pdf",
        external_url="https://example.com/ca-hub-networks"
    ),
    TechnicalResource(
        title="Adoption and Practice of Conservation Agriculture (CA) and CA-Based Mechanization in Selected Counties in Kenya",
        type="Research Paper",
        date="June 2023",
        location="Presented at 3ACCA in Rabat Morocco",
        downloadable=True,
        file_url="/resources/ca-adoption-paper.pdf",
        external_url="https://example.com/ca-adoption"
    ),
    TechnicalResource(
        title="CA Hub-Kenya Strategic Plan 2023-2026",
        type="Strategic Document",
        date="January 2023",
        downloadable=True,
        file_url="/resources/ca-hub-strategic-plan.pdf"
    ),
    TechnicalResource(
        title="Conservation Agriculture: A Manual for Farmers and Extension Workers in Africa",
        type="Manual",
        date="2018",
        downloadable=True,
        file_url="/resources/ca-manual.pdf",
        external_url="https://example.com/ca-manual"
    ),
    TechnicalResource(
        title="CA Hub-Kenya Consortium Agreement",
        type="Agreement Document",
        date="2021",
        downloadable=True,
        file_url="/resources/ca-hub-agreement.pdf"
    )
]

# Add all data to the session
for item in news_items:
    db.session.add(item)

for event in events:
    db.session.add(event)

for newsletter in newsletters:
    db.session.add(newsletter)

for story in success_stories:
    db.session.add(story)

for resource in technical_resources:
    db.session.add(resource)

# Commit the session to save the data to the database
db.session.commit()

print("Database seeded successfully!")
