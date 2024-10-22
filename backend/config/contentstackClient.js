// contentstackClient.js
import Contentstack from 'contentstack';

const client = Contentstack.Stack({
    api_key: process.env.CONTENTSTACK_API_KEY,
    delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    environment: process.env.CONTENTSTACK_ENVIRONMENT
});

export const fetchContent = async (contentType) => {
  try {
    const entries = await client.ContentType(contentType).Query().find();
    return entries[0];
  } catch (error) {
    console.error('Error fetching content:', error);
    return null;
  }
};
