import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function RenderPage() {
    const { id } = useParams();
    const [pageData, setPageData] = useState(null);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
                const response = await axios.get(`/api/content/${id}`);
                setPageData(response.data);
            } catch (error) {
                console.error('Error fetching page data:', error);
            }
        };

        fetchPageData();
    }, [id]);

    return (
        <div>
            {pageData ? (
                <div>
                    <h1>{pageData[0].title}</h1>
                    <p>{pageData[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default RenderPage;
