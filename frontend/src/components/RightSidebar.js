import React, { useState } from 'react';
import DesignTab from './DesignTab';
import DataTab from './DataTab';
import './RightSidebar.css';  // Importing the new CSS file

const RightSidebar = ({ selectedComponent, onUpdateComponent, onDeleteComponent }) => {
  const [activeTab, setActiveTab] = useState('design');

  const linkDataToComponent = (componentId, contentTypeField) => {
    console.log(`Linking data from ${contentTypeField} to component with ID ${componentId}`);
    onUpdateComponent({ ...selectedComponent, dataLink: contentTypeField });
  };

  const handleDelete = () => {
    if (!selectedComponent) {
      alert("Please select a component to delete.");
      return;
    }
    if (onDeleteComponent) {
      onDeleteComponent(selectedComponent.id); // Assuming selectedComponent has an id
    }
  };
  

  const handleSave = () => {
    console.log("Saving layout template in database...");
    // Save the template logic goes here
  };

  return (
    <div className="right-sidebar p-4">
      <p>DesignTab</p>
      <div className="tabs">
        <button
          className={activeTab === 'design' ? 'active' : ''}
          onClick={() => setActiveTab('design')}
        >
          Design
        </button>
        <button
          className={activeTab === 'data' ? 'active' : ''}
          onClick={() => setActiveTab('data')}
        >
          Data
        </button>
        <button onClick={handleSave} className="btn btn-success ">Save Template</button>
      </div>
      
      <div className="tab-content">
      <button onClick={handleDelete} className="btn btn-danger m-2" style={{float:'right'}}>Delete </button>
      
        {activeTab === 'design' ? (
          <DesignTab
            selectedComponent={selectedComponent}
            onUpdateComponent={onUpdateComponent}
          />
        ) : (
          <DataTab
            selectedComponent={selectedComponent}
            onLinkData={linkDataToComponent}
          />
        )}
      </div>
     
    </div>
  );
};

export default RightSidebar;

// 10