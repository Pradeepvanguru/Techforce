import React from 'react';

function Sidebar({ components, onAddComponent }) {
    return (
        <div className="sidebar">
            <h3>Components</h3>
            <ul>
                {components.map((component, index) => (
                    <li key={index}>
                        <button onClick={() => onAddComponent(component)}>
                            {component.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
