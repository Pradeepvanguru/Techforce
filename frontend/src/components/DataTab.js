import React, { useState, useEffect } from 'react';
import './DataTab.css'; // Import the CSS file for styling

const DataTab = ({ selectedComponent, onLinkData }) => {
  const [contentTypeField, setContentTypeField] = useState('');

  // Update content type field input when a new component is selected
  useEffect(() => {
    if (selectedComponent && selectedComponent.dataLink) {
      setContentTypeField(selectedComponent.dataLink || '');
    }
  }, [selectedComponent]);

  // Handle the data linking process
  const handleDataLink = () => {
    if (!contentTypeField.trim()) {
      alert('Please enter a valid content type field');
      return;
    }

    // Call the onLinkData function to link the content type field to the selected component
    onLinkData(selectedComponent.id, contentTypeField);
    setContentTypeField(''); // Clear input after linking
  };

  // Render a message if no component is selected
  if (!selectedComponent) {
    return <p className="text-center">Select a component to link data.</p>;
  }

  return (
    <div className="data-tab p-3 border rounded shadow">
      <h4 className="text-primary">Data Tab</h4>
      <div className="form-group">
        <label htmlFor="contentTypeField" className="font-weight-bold">
          Link Content Type Field
        </label>
        <input
          id="contentTypeField"
          type="text"
          value={contentTypeField}
          placeholder="Enter content type field name"
          onChange={(e) => setContentTypeField(e.target.value)}
          className="form-control"
        />
      </div>
      <button className="btn btn-primary btn-block mt-3" onClick={handleDataLink}>
        Link Data
      </button>
    </div>
  );
};

export default DataTab;

// 10