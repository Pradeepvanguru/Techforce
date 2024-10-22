import React from 'react';

const componentsList = [
  { type: 'container', props: { text: 'container', fontSize: '20px', color: '#333',backgroundColor: '#3333', padding: '10px' ,height:"200px", width:'400px'} },
  { type: 'Text', props: { text: 'Text', fontSize: '20px', color: '#333',backgroundColor: '#f8f9fa', padding: '20px' } },
  { type: 'Image', props: { src: '', alt: 'past the url in designTab' } },
 
];

const LeftSidebar = ({ onAddComponent }) => {
  return (
    <div className="left-sidebar p-2">
      <p>Available Components</p>
      <ul className="list-group">
        {componentsList.map((component, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => onAddComponent(component)}
          >
            {component.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;


// 10
