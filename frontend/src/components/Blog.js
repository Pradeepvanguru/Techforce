import React from 'react';
import { Link } from 'react-router-dom';

// import axios from 'axios';

function Blog() {
    // const [content, setContent] = useState(null);

    // useEffect(() => {
    //     const fetchContent = async () => {
    //         try {
    //             const response = await axios.get('/api/content/blog');
    //             setContent(response.data);
    //         } catch (error) {
    //             console.error('Error fetching blog content:', error);
    //         }
    //     };

    //     fetchContent();
    // }, []);
  const content=  {
        "title": "Latest News and Updates",
        "description": "Stay updated with the latest articles, news, and blog posts.",
        "articles": [
            {
                "title": "Pulse",
                "summary": "Spring 2024 platform recap – ContentCon edition: What’s new and what’s coming for Contentstack,Fresh from the stage at ContentCon! We’re announcing a bunch of exciting updates and we’re thrilled to share them with you. This event is a highlight for us, providing an opportunity to interact with our customers, hear about their successes and showcase the exciting things we’ve been working on. In this post, we’ll recap the latest releases—all designed to help you gain an edge by delivering high-powered personalized experiences at scale.",
                "image": "https://images.contentstack.io/v3/assets/blt7359e2a55efae483/bltbcc27511bf20c322/6669a0b1371bcaf98bb8d2e3/General.webp",
                "link": "https://www.contentstack.com"
            },
            {
                "title": "Personalization poseurs: What to look for",
                "summary": "Your customers crave personalized digital experiences more than ever, and businesses have been on an endless quest for the right technologies to meet these high expectations efficiently, effectively and at scale. There are many personalization players in the market, and some companies are even buying their way into this space But despite all that, a solution remains elusive.",
                "image": "https://images.contentstack.io/v3/assets/blt7359e2a55efae483/bltfd07678159bb809e/667d191d8a80d1cf5eadcfd8/Blog_Composable_1.webp",
                "link": "https://www.contentstack.com"
            },
            {
                "title": "How AI is Revolutionizing Content Management",
                "summary": "Faced with a fragmented user experience due to content silos across sub-brands, local markets, and business units, and an increasing need to increase content operational efficiencies, many high-functioning enterprise content teams are embracing a Content Center of Excellence (CoE) approach.",
                "image": "https://www.shutterstock.com/shutterstock/photos/2498421665/display_1500/stock-photo-digital-brain-with-circuit-and-ai-cocept-d-rendering-2498421665.jpg",
                "link": "https://www.contentstack.com"
            }
        ]
    }
    
    return (
        <div className="container p-3">
        <Link to='/'><h4>Home</h4></Link>
            <div className="row">
                <div className="col-12 mt-5">
                    <h2 className="display-5">{content ? content.title : 'Our Blog'}</h2>
                    <p>{content ? content.description : 'Fetching blog content...'}</p>
                </div>
            </div>

            <div className="row">
                {content && content.articles ? (
                    content.articles.map((article, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img
                                    src={article.image ? article.image : 'https://via.placeholder.com/300.png?text=Blog+Image'}
                                    className="card-img-top"
                                    alt={article.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.summary}</p>
                                    <a href={article.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading blog posts...</p>
                )}
            </div>
        </div>
    );
}

export default Blog;
