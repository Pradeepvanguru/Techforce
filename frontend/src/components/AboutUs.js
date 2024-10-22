import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

function AboutUs() {
    // const [content, setContent] = useState(null);

    // useEffect(() => {
    //     const fetchContent = async () => {
    //         try {
    //             const response = await axios.get('/api/content/about_us');
    //             setContent(response.data[0]);
    //         } catch (error) {
    //             console.error('Error fetching about us content:', error);
    //         }
    //     };

    //     fetchContent();
    // }, []);
    // const content = {
    //     title: "About Our Company",
    //     description: "We are a company focused on providing the best services.",
    //     mission: "Our mission is to revolutionize content management.",
    //     vision: "We envision a future where content creation is seamless.",
    //     history: "Founded in 2010, we have been leading the industry for over a decade.",
    //     team: [
    //         {
    //             name: "John Doe",
    //             role: "CEO",
    //             bio: "John has over 20 years of experience in the industry."
    //         },
    //         {
    //             name: "Jane Smith",
    //             role: "CTO",
    //             bio: "Jane is a technology visionary who leads our tech team."
    //         }
    //     ]
    // };
   const content= {
        "title": "About Contentstack",
        "description": "Contentstack is a leading API-first headless CMS that helps developers and content teams deliver omnichannel digital experiences faster and with more flexibility. It empowers enterprises to move beyond traditional CMS limitations and enables dynamic content management across web, mobile, and connected devices.",
        "mission": "Our mission is to help businesses create, manage, and distribute content seamlessly across multiple platforms, while ensuring unparalleled flexibility, speed, and scalability.",
        "vision": "To revolutionize the way content is created and delivered, enabling businesses to scale their digital experiences with ease and efficiency.",
        "values": {
          "innovation": "We constantly push the boundaries of what content management can achieve by leveraging the latest technology and development frameworks.",
          "customer_focus": "Our customers are at the heart of everything we do, and we strive to build long-lasting relationships by helping them solve complex content challenges.",
          "teamwork": "We believe in the power of collaboration across diverse teams to achieve common goals.",
          "agility": "We adopt agile methodologies to ensure we remain flexible and responsive to changing market needs."
        },
        "history": "Founded in 2018, Contentstack emerged as a frontrunner in the headless CMS space. The company was born from years of experience building content management systems for enterprises and digital agencies. We realized the limitations of traditional monolithic CMSs and created a platform that offers unparalleled speed, scalability, and flexibility. Our innovative approach has garnered trust from businesses across the globe, and we've rapidly expanded to serve a wide range of industries.",
        "milestones": [
          {
            "year": "2018",
            "event": "Contentstack was founded and launched its first version, quickly gaining attention in the headless CMS market."
          },
          {
            "year": "2019",
            "event": "Achieved a major milestone by securing Series A funding, which enabled rapid expansion of product features and global customer base."
          },
          {
            "year": "2020",
            "event": "Recognized as a leader in the Gartner Magic Quadrant for Digital Experience Platforms."
          },
          {
            "year": "2021",
            "event": "Expanded our partner ecosystem, integrating with platforms like Salesforce, AWS, and Azure to offer a more comprehensive content delivery solution."
          },
          {
            "year": "2022",
            "event": "Surpassed 1,000 enterprise customers worldwide, becoming a trusted CMS provider for some of the world’s leading brands."
          }
        ],
        "technology_stack": {
          "backend": [
            "Node.js",
            "Python",
            "Java"
          ],
          "frontend": [
            "React",
            "Vue.js",
            "Angular"
          ],
          "cloud_infrastructure": [
            "AWS",
            "Google Cloud Platform",
            "Microsoft Azure"
          ],
          "databases": [
            "MongoDB",
            "PostgreSQL",
            "Redis"
          ]
        },
        "team": [
          {
            "name": "Neha Sampat",
            "role": "CEO",
            "bio": "Neha is the visionary behind Contentstack. With a deep understanding of enterprise software, she leads the company’s mission to transform the CMS industry. Under her leadership, Contentstack has become a trusted CMS for Fortune 500 companies.",
            "image":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9WFFdkS6GAfRd8WcgKJLo_e4qf1_2gRP8k5VjRBDuOxbMqPE4"
          },
          {
            "name": "Matthew Baier",
            "role": "COO",
            "bio": "As COO, Matthew oversees global operations at Contentstack, driving product strategy and business growth. His leadership has been instrumental in scaling the company's global presence and expanding its product offerings.",
            "image":"https://www.supplychainit.com/wp-content/uploads/2021/05/Matthew-Baier-1-900-x-636.jpg"
          },
          {
            "name": "Nishant Patel",
            "role": "CTO",
            "bio": "Nishant is the technical mastermind behind Contentstack’s architecture. He ensures that the platform remains scalable, secure, and cutting-edge, guiding its evolution to meet the needs of the fast-paced digital world.",
             "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe4ASUTRzn5uT477Nl40R3A3qBs-nPmx72Eg&s"
          },
          {
            "name": "Karen Baker",
            "role": "Chief Marketing Officer (CMO)",
            "bio": "Karen leads Contentstack’s marketing efforts, driving brand awareness and demand generation. She brings over two decades of experience in tech marketing, working with companies from startups to enterprise-level brands.",
             "image":"https://media.licdn.com/dms/image/v2/C4D03AQF1MxwTHePQZA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1644454147909?e=2147483647&v=beta&t=K3GIRjlRCWwx19CRbC0DvNF9gXCG8te1K-8_2tFtFWk"
          },
          {
            "name": "Anil Gupta",
            "role": "Chief Financial Officer (CFO)",
            "bio": "Anil manages the financial health of Contentstack, guiding investment and growth strategies to ensure sustainable, long-term success. His financial expertise has been key to Contentstack’s global expansion.",
             "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-25NaFxAD1wHPtKnEIN8jq4cmqqX7UeJaww&s"
          }
        ],
        "partners_and_integrations": {
          "partners": [
            "Salesforce",
            "AWS",
            "Microsoft Azure",
            "Google Cloud",
            "Shopify"
          ],
          "integrations": [
            "Contentful",
            "WordPress Migration",
            "Algolia",
            "Segment",
            "Slack",
            "Zapier"
          ]
        },
        "customers": [
          {
            "name": "Nike",
            "testimonial": "Contentstack’s headless CMS transformed how we manage content across our global website. It’s fast, flexible, and has reduced our time-to-market by 40%."
          },
          {
            "name": "PepsiCo",
            "testimonial": "With Contentstack, we’ve been able to build a seamless omnichannel experience for our customers, enhancing engagement across multiple digital touchpoints."
          },
          {
            "name": "Best Buy",
            "testimonial": "The platform’s agility and scalability have allowed us to stay ahead of the competition, easily rolling out new product pages and campaigns in record time."
          }
        ]
      }
      
    

      return (
        <div className="container py-5">
        <Link to='/'><h4>Home</h4></Link>
            <div className="row">
                {/* Company Title and Description */}
                <div className="col-12 text-center mb-5">
                    <h1 className="display-4 font-weight-bold text-primary">
                        {content ? content.title : 'Loading...'}
                    </h1>
                    <p className="lead text-secondary">
                        {content ? content.description : 'Fetching content...'}
                    </p>
                </div>
    
                {/* Mission Section */}
                {content && content.mission && (
                    <div className="col-12 my-4">
                        <h2 className="text-dark font-weight-bold">Our Mission</h2>
                        <p className="text-muted">{content.mission}</p>
                        <hr className="my-4"/>
                    </div>
                )}
    
                {/* Vision Section */}
                {content && content.vision && (
                    <div className="col-12 my-4">
                        <h2 className="text-dark font-weight-bold">Our Vision</h2>
                        <p className="text-muted">{content.vision}</p>
                        <hr className="my-4"/>
                    </div>
                )}
    
                {/* History Section */}
                {content && content.history && (
                    <div className="col-12 my-4">
                        <h2 className="text-dark font-weight-bold">Our History</h2>
                        <p className="text-muted">{content.history}</p>
                        <hr className="my-4"/>
                    </div>
                )}
    
                {/* Team Section */}
                {content && content.team && content.team.length > 0 && (
                    <div className="col-12 my-5">
                        <h2 className="text-dark font-weight-bold mb-4">Meet Our Team</h2>
                        <div className="row justify-content-center">
                            {content.team.map((member, index) => (
                                <div key={index} className="col-md-4 mb-4">
                                    <div className="card shadow-sm border-0 h-100 bg-light">
                                        <div className="card-body text-center">
                                            <h5 className="card-title font-weight-bold">{member.name}</h5>
                                            <p className="card-subtitle text-muted">{member.role}</p>
                                            <p className="card-text mt-3">{member.bio}</p>
                                        </div>
                                        <div className="card-footer bg-transparent border-0">
                                            <img
                                                src={member.image} 
                                                alt={`${member.name}'s pho`} 
                                                className="rounded-circle mb-2"
                                                width="100"
                                                height="100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
    
}

export default AboutUs;
