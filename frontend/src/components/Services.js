import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

function Services() {
    // const [content, setContent] = useState(null);

    // useEffect(() => {
    //     const fetchContent = async () => {
    //         try {
    //             const response = await axios.get('/api/content/services');
    //             setContent(response.data[0]);
    //         } catch (error) {
    //             console.error('Error fetching services content:', error);
    //         }
    //     };

    //     fetchContent();
    // }, []);
   const content= {
        "title": "Our Services",
        "description": "We offer a range of top-tier services designed to meet your business needs.",
        "services_list": [
            {
                "name": "Web Development",
                "description": "Full-stack web development services to build responsive and performant websites.",
                "features": [
                    "Custom Web Applications",
                    "Responsive Design",
                    "E-Commerce Solutions"
                ],
                "pricing": "$500 - $5000",
                "image": "data:image/jpeg;base64,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"
            },
            {
                "name": "Mobile App Development",
                "description": "Native and cross-platform mobile applications with smooth user experiences.",
                "features": [
                    "iOS and Android Apps",
                    "Cross-platform Development",
                    "App Store Deployment"
                ],
                "pricing": "$1000 - $10,000",
                "image": "https://images.ctfassets.net/93e8slakzebf/4gJOCwZZz0OtQQXC5uL7vJ/821fe2bd343e562713b99439e880d0fb/Mobile_Application.jpg?fm=webp&w=1920&q=75"
            },
            {
                "name": "Cloud Solutions",
                "description": "Enterprise cloud infrastructure and migration services to scale your business.",
                "features": [
                    "Cloud Architecture",
                    "AWS, Azure, and Google Cloud Support",
                    "Scalable Infrastructure"
                ],
                "pricing": "Custom Pricing",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZj8ZvqjFf6B_1yvwbI9h7tdg8L11xPmrmpa8nu5jSvXFvyA-Usoc177fdZOEyyxD9Bo0&usqp=CAU"
            },
            {
                "name": "",
                "description": "Spring 2024 platform recap – ContentCon edition: What’s new and what’s coming for Contentstack",
                "features": [
                    "Keyword Research",
                    "On-page Optimization",
                    "Link Building"
                ],
                "pricing": "$300 - $3000",
                "image": "https://images.contentstack.io/v3/assets/blt7359e2a55efae483/bltbcc27511bf20c322/6669a0b1371bcaf98bb8d2e3/General.webp"
            },
            {
                "name": "Content Marketing",
                "description": "Strategic content marketing to attract and engage your target audience.",
                "features": [
                    "Blog Writing",
                    "Social Media Management",
                    "Email Campaigns"
                ],
                "pricing": "$500 - $4000",
                "image": "https://media.istockphoto.com/id/1186285220/photo/content-marketing-news-social-media-websites-and-advertising-concept.jpg?s=612x612&w=0&k=20&c=God3SFRiRoXlE1CZfLy7otuCtDz9OgP-JrDNEQLQrYQ="
            },
            {
                "name": "Graphic Design",
                "description": "Creative graphic design services to enhance your brand's visual identity.",
                "features": [
                    "Logo Design",
                    "Marketing Materials",
                    "Social Media Graphics"
                ],
                "pricing": "$200 - $2500",
                "image": "https://www.shutterstock.com/shutterstock/photos/443252770/display_1500/stock-vector-flat-design-style-modern-vector-illustration-icons-set-of-graphic-designer-items-and-tools-office-443252770.jpg"
            },
            {
                "name": "UI/UX Design",
                "description": "User-centric UI/UX design services to improve user engagement and experience.",
                "features": [
                    "Wireframing",
                    "Prototyping",
                    "User Testing"
                ],
                "pricing": "$1000 - $8000",
                "image": "https://www.shutterstock.com/shutterstock/photos/2100417061/display_1500/stock-vector-web-ui-ux-design-web-development-concept-web-design-application-design-coding-and-web-building-2100417061.jpg"
            },
            {
                "name": "Digital Marketing",
                "description": "Holistic digital marketing strategies to boost your online presence.",
                "features": [
                    "PPC Advertising",
                    "Social Media Marketing",
                    "Analytics & Reporting"
                ],
                "pricing": "$500 - $5000",
                "image": "https://www.shutterstock.com/shutterstock/photos/475852000/display_1500/stock-vector-hand-drawn-vector-illustration-background-of-digital-marketing-with-doodles-elements-475852000.jpg"
            },
            {
                "name": "Video Production",
                "description": "Professional video production services for your promotional needs.",
                "features": [
                    "Corporate Videos",
                    "Explainer Videos",
                    "Event Coverage"
                ],
                "pricing": "$1000 - $10,000",
                "image": "https://www.shutterstock.com/shutterstock/photos/2016801665/display_1500/stock-vector-colorfull-abstract-vedio-film-logo-design-vector-template-illustration-2016801665.jpg"
            },
            {
                "name": "eCommerce Solutions",
                "description": "End-to-end eCommerce solutions to set up your online store.",
                "features": [
                    "Payment Gateway Integration",
                    "Inventory Management",
                    "User-Friendly Interface"
                ],
                "pricing": "$800 - $7000",
                "image": "https://www.shutterstock.com/shutterstock/photos/1949100619/display_1500/stock-photo-logistics-supply-chain-and-delivery-service-concept-trailer-truck-moves-boxes-of-goods-or-1949100619.jpg"
            },
            // {
            //     "name": "IT Consulting",
            //     "description": "Expert IT consulting services to streamline your business operations.",
            //     "features": [
            //         "IT Strategy Development",
            //         "System Integration",
            //         "Risk Management"
            //     ],
            //     "pricing": "Custom Pricing",
            //     "image": "https://via.placeholder.com/300?text=IT+Consulting"
            // },
            {
                "name": "Software Development",
                "description": "Custom software development to meet your specific business requirements.",
                "features": [
                    "Tailored Solutions",
                    "Agile Development",
                    "Quality Assurance"
                ],
                "pricing": "$2000 - $20,000",
                "image": "https://www.shutterstock.com/shutterstock/photos/2376610557/display_1500/stock-photo-concept-of-personal-data-verification-human-resource-management-hr-staffing-and-development-2376610557.jpg"
            },
            {
                "name": "Social Media Management",
                "description": "Complete social media management to enhance your brand presence.",
                "features": [
                    "Content Creation",
                    "Engagement Strategies",
                    "Performance Tracking"
                ],
                "pricing": "$300 - $3000",
                "image": "https://www.shutterstock.com/shutterstock/photos/2477119043/display_1500/stock-vector-smm-concept-social-media-and-digital-marketing-professional-at-work-online-likes-comments-and-2477119043.jpg"
            },
            {
                "name": "Network Security",
                "description": "Robust network security solutions to protect your business data.",
                "features": [
                    "Threat Assessment",
                    "Firewall Installation",
                    "Incident Response"
                ],
                "pricing": "$400 - $5000",
                "image": "https://www.shutterstock.com/shutterstock/photos/642255100/display_1500/stock-photo-woman-hand-holding-smart-phone-with-graphic-icon-multichannel-online-banking-payment-network-642255100.jpg"
            },
            {
                "name": "Data Analytics",
                "description": "Data-driven insights to improve your business decisions.",
                "features": [
                    "Data Mining",
                    "Predictive Analytics",
                    "Reporting Dashboards"
                ],
                "pricing": "$500 - $6000",
                "image": "https://www.shutterstock.com/shutterstock/photos/2284126663/display_1500/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg"
            },
            {
                "name": "Blockchain Development",
                "description": "Innovative blockchain solutions tailored to your business needs.",
                "features": [
                    "Smart Contracts",
                    "Decentralized Apps",
                    "Consulting Services"
                ],
                "pricing": "$3000 - $30,000",
                "image": "https://www.shutterstock.com/shutterstock/photos/2337680815/display_1500/stock-photo-digital-currency-revolution-decoding-blockchain-and-cryptocurrency-innovation-2337680815.jpg"
            },
            {
                "name": "Virtual Reality Solutions",
                "description": "Cutting-edge VR solutions to enhance user experience.",
                "features": [
                    "VR Application Development",
                    "3D Modeling",
                    "Interactive Simulations"
                ],
                "pricing": "$5000 - $50,000",
                "image": "data:image/jpeg;base64,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"
            },
            {
                "name": "Augmented Reality Solutions",
                "description": "Immersive AR solutions for innovative marketing experiences.",
                "features": [
                    "AR Application Development",
                    "Marketing Solutions",
                    "Interactive Experiences"
                ],
                "pricing": "$4000 - $40,000",
                "image": "https://www.shutterstock.com/shutterstock/photos/2062865573/display_1500/stock-photo-metaverse-digital-cyber-world-technology-man-with-virtual-reality-vr-goggle-playing-ar-augmented-2062865573.jpg"
            },
            {
                "name": "Payment Solutions",
                "description": "Secure and scalable payment solutions for your business.",
                "features": [
                    "Integration with Major Payment Gateways",
                    "Fraud Protection",
                    "Multi-Currency Support"
                ],
                "pricing": "$500 - $5000",
                "image": "https://www.shutterstock.com/shutterstock/photos/2465630557/display_1500/stock-photo-digital-online-payment-concept-business-people-using-computer-laptop-online-payment-banking-2465630557.jpg"
            }
        ]
    }
    

    return (
        <div className="container p-3">
        <Link to='/'><h4>Home</h4></Link>
            <div className="row">
                <div className="col-12 mt-5">
                    <h2 className="display-5">{content ? content.title : 'Our Services'}</h2>
                    <p>{content ? content.description : 'Fetching services...'}</p>
                </div>
            </div>

            <div className="row">
                {content && content.services_list ? (
                    content.services_list.map((service, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img 
                                    src={service.image} 
                                    className="card-img-top h-50" 
                                    alt={service.name} 
                                    onError={(e) => { 
                                        e.target.onerror = null; 
                                        e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Available'; 
                                    }} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{service.name}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <ul>
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <p className="card-text">
                                        <strong>Pricing:</strong> {service.pricing}
                                    </p>
                                  
                                   <a href="https://www.contentstack.com" target="_blank"  className="btn btn-primary " tabindex="-1" aria-disabled="true">Learn More</a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading services...</p>
                )}
            </div>
        </div>
    );
}

export default Services;
