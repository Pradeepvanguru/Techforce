import React, { useState } from 'react';
import LeftSidebar from './LeftSidebar';
import Canvas from './Canvas';
import RightSidebar from './RightSidebar';
import './UIBuilder.css';  // Importing the new CSS file

const UIBuilder = () => {
  const [components, setComponents] = useState([]); // Store added components on the Canvas
  const [selectedComponent, setSelectedComponent] = useState(null); // Track selected component for customization

  // Function to add a component to the Canvas
  const handleAddComponent = (component) => {
    setComponents([...components, { ...component, id: Date.now() }]); // Give each component a unique ID
  };

  // Function to update the selected component
  const handleUpdateComponent = (updatedComponent) => {
    setComponents(
      components.map((comp) =>
        comp.id === updatedComponent.id ? updatedComponent : comp
      )
    );
    setSelectedComponent(updatedComponent); // Set selected component after update
  };

  // Function to delete a component from the Canvas
  const handleDeleteComponent = (componentId) => {
    const updatedComponents = components.filter(
      (component) => component.id !== componentId
    );
    setComponents(updatedComponents);
    setSelectedComponent(null); // Clear the selection after deletion
  };

  // Placeholder function for saving the template
  const handleSaveTemplate = () => {
    // You can implement template saving logic here, e.g., sending the template to a server or downloading it
    console.log('Template saved:', components);
  };

  return (
    <div className='m-3'>
      <h4><center>Design Your Own Page</center></h4>

      <div className="ui-builder-container d-flex p-2 m-3">
        {/* Left Sidebar for adding components */}
        <LeftSidebar onAddComponent={handleAddComponent} />
        
        {/* Canvas to display added components */}
        <Canvas
          components={components}
          onSelectComponent={setSelectedComponent}
        />

        {/* Right Sidebar for editing and deleting selected component */}
        <RightSidebar
          selectedComponent={selectedComponent}
          onUpdateComponent={handleUpdateComponent}
          onDeleteComponent={handleDeleteComponent}
          onSaveTemplate={handleSaveTemplate}
        />
      </div>
    </div>
  );
};

export default UIBuilder;
