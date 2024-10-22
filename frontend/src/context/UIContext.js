// frontend/src/context/UIContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchUILayout, saveUILayout } from '../services/api';

// Create a context for UI layout
const UIContext = createContext();

export const UIProvider = ({ children }) => {
    const [layout, setLayout] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to load UI layout from the server
    const loadUILayout = async (pageType) => {
        setLoading(true);
        try {
            const data = await fetchUILayout(pageType);
            setLayout(data.layoutJSON);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Function to save UI layout
    const handleSaveUILayout = async (pageType, layoutJSON) => {
        setLoading(true);
        try {
            await saveUILayout(pageType, layoutJSON);
            setLayout(layoutJSON); // Update layout state after successful save
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <UIContext.Provider value={{ layout, loadUILayout, handleSaveUILayout, loading, error }}>
            {children}
        </UIContext.Provider>
    );
};

// Export the UI context to be used in components
export default UIContext;
