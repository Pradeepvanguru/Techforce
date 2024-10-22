// frontend/src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'; // Change API URL accordingly

// Fetch UI layout for a specific page
export const fetchUILayout = async (pageType) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/ui-layout/${pageType}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching UI layout:', error);
        throw error;
    }
};

// Save or update UI layout
export const saveUILayout = async (pageType, layoutJSON) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/ui-layout`, {
            pageType,
            layoutJSON,
        });
        return response.data;
    } catch (error) {
        console.error('Error saving UI layout:', error);
        throw error;
    }
};

// Delete UI layout for a specific page
export const deleteUILayout = async (pageType) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/ui-layout/${pageType}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting UI layout:', error);
        throw error;
    }
};

// Fetch content for a specific page
export const fetchContent = async (pageType) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/content/${pageType}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching content:', error);
        throw error;
    }
};

// Save or update content for a specific page
export const saveContent = async (pageType, contentFields) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/content`, {
            pageType,
            contentFields,
        });
        return response.data;
    } catch (error) {
        console.error('Error saving content:', error);
        throw error;
    }
};
