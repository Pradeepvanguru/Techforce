import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Homepage.css';  // External CSS for additional styling
import { DndProvider } from 'react-dnd';  // Import DragDrop Context
import { HTML5Backend } from 'react-dnd-html5-backend';  // Use HTML5 backend for web-based drag/drop

function HomePage() {
    return (
        <Container className="mt-5 homepage-container p-3">
            {/* Welcome Section */}
            <Row className="mb-4 text-center">
                <Col>
                    <h2 className="display-4 font-weight-bold">Welcome to Our Website</h2>
                    <p className="lead">
                        Discover the power of managing your content with Contentstack, an advanced headless CMS.
                        We provide dynamic layouts, flexibility, and a seamless editing experience for your websites and applications.
                    </p>
                </Col>
            </Row>

            {/* About Section */}
            <Row className="mb-5 justify-content-center">
                <Col md={6}>
                    <Card className="shadow-lg border-0 rounded-3 hover-zoom">
                        <Card.Body>
                            <Card.Title className="text-center text-primary">About Contentstack</Card.Title>
                            <Card.Text className="text-center">
                                Contentstack is an API-first headless CMS that empowers developers and content teams to deliver content across channels, without restrictions. It's perfect for those who need flexibility, speed, and scalability in their content management systems.
                            </Card.Text>
                            <div className="text-center">
                                <Button variant="primary" className="btn-lg mt-3" as={Link} to="/about-us">
                                    Learn More About Us
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Services & Blog Section */}
            <Row>
                {/* Services Section */}
                <Col md={6} className="mb-4">
                    <Card className="shadow-lg border-0 rounded-3 hover-zoom">
                        <Card.Body>
                            <Card.Title className="text-center text-success">Our Services and Products</Card.Title>
                            <Card.Text className="text-center">
                                We provide various services and products that help streamline your digital operations, whether you need content management, SEO optimization, or custom UI design.
                            </Card.Text>
                            <div className="text-center">
                                <Button variant="primary" className="btn-lg mt-3" as={Link} to="/services">
                                    Explore Our Services
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                {/* Blog Section */}
                <Col md={6}>
                    <Card className="shadow-lg border-0 rounded-3 hover-zoom">
                        <Card.Body>
                            <Card.Title className="text-center text-info">Latest News & Blog</Card.Title>
                            <Card.Text className="text-center">
                                Stay informed with the latest trends in content management, product launches, and industry news.
                            </Card.Text>
                            <div className="text-center">
                                <Button variant="primary" className="btn-lg mt-3" as={Link} to="/blog">
                                    Read Our Blog
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* UI Builder Section */}
            <div className="my-5 text-center ">
                <h2 className="text-center">Design Your Own Page</h2>
                <DndProvider backend={HTML5Backend}>
                <Link to="/design">
                 <Button variant="primary" className="btn-lg mt-3">
                        Go to UI Builder
                    </Button>
                    </Link>
                </DndProvider>
            </div>
        </Container>
    );
}

export default HomePage;
