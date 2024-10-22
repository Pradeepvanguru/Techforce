import React from 'react';

const Canvas = ({ components, onSelectComponent }) => {
  return (
    <div className="canvas-area p-5 border border-gray-400 col-sm-6 bg-white">
      {components.length > 0 ? (
        components.map((component) => (
          <div
            key={component.id}
            className="canvas-component"
            onClick={() => onSelectComponent(component)}
            style={{
              width: component.props.width || 'auto',
              height: component.props.height || 'auto',
              margin: component.props.margin || '0',
              marginTop: component.props.marginTop || component.props.margin || '0',
              marginRight: component.props.marginRight || component.props.margin || '0',
              marginBottom: component.props.marginBottom || component.props.margin || '0',
              marginLeft: component.props.marginLeft || component.props.margin || '0',
              padding: component.props.padding || '0',
              paddingTop: component.props.paddingTop || component.props.padding || '0',
              paddingRight: component.props.paddingRight || component.props.padding || '0',
              paddingBottom: component.props.paddingBottom || component.props.padding || '0',
              paddingLeft: component.props.paddingLeft || component.props.padding || '0',
              backgroundColor: component.props.backgroundColor || 'transparent',
              borderRadius: component.props.borderRadius || '0',
              border: component.props.border || 'none',
              boxShadow: component.props.boxShadow || 'none',
              opacity: component.props.opacity || '1',
            }}
          >
            {component.type === 'Text' && (
              <p style={{
                fontSize: component.props.fontSize || 'inherit',
                fontWeight: component.props.fontWeight || 'normal',
                fontFamily: component.props.fontFamily || 'inherit',
                color: component.props.color || 'inherit',
                textAlign: component.props.textAlign || 'left',
                lineHeight: component.props.lineHeight || 'normal',
                letterSpacing: component.props.letterSpacing || 'normal',
                textTransform: component.props.textTransform || 'none',
              }}>
                {component.props.text}
              </p>
            )}
            {component.type === 'container' && (
              <p style={{
                fontSize: component.props.fontSize || 'inherit',
                fontWeight: component.props.fontWeight || 'normal',
                fontFamily: component.props.fontFamily || 'inherit',
                color: component.props.color || 'inherit',
                textAlign: component.props.textAlign || 'left',
                lineHeight: component.props.lineHeight || 'normal',
                letterSpacing: component.props.letterSpacing || 'normal',
                textTransform: component.props.textTransform || 'none',
              }}>
                {component.props.text}
              </p>
            )}

            {component.type === 'Image' && (
              <img 
                src={component.props.src} 
                alt={component.props.alt || 'Image'}
                style={{
                  width: '30%',
                  height: '30%',
                  objectFit: component.props.objectFit || 'cover',
                  objectPosition: component.props.objectPosition || 'center',
                }}
              />
            )}
          </div>
        ))
      ) : (
        <p><h4>Canvas Area</h4>No components added yet. Drag components from the left sidebar.</p>
      )}
    </div>
  );
};

export default Canvas;

// 10