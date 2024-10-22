import React, { useState, useEffect } from 'react';

const DesignTab = ({ selectedComponent, onUpdateComponent }) => {
  const [styles, setStyles] = useState({});
  const [textValue, setTextValue] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    if (selectedComponent) {
      setStyles(selectedComponent.props || {});
      setTextValue(selectedComponent.props.text || '');
      setImageSrc(selectedComponent.props.src || '');
    }
  }, [selectedComponent]);

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    const updatedComponent = {
      ...selectedComponent,
      props: { ...styles, [name]: value },
    };
    setStyles(updatedComponent.props);
    onUpdateComponent(updatedComponent);
  };

  const handleTextChange = (e) => {
    const updatedComponent = {
      ...selectedComponent,
      props: { ...styles, text: e.target.value },
    };
    setTextValue(e.target.value);
    onUpdateComponent(updatedComponent);
  };

  const handleImageChange = (e) => {
    const updatedComponent = {
      ...selectedComponent,
      props: { ...styles, src: e.target.value },
    };
    setImageSrc(e.target.value);
    onUpdateComponent(updatedComponent);
  };

  if (!selectedComponent) return <p>Select a component to edit styles</p>;

  return (
    <div>
      <h4>Design Tab</h4>
       
      {/* Text Content or Image URL at the top */}
      {selectedComponent.type === 'Text' && (
        <div className="form-group">
          <label>Text Content</label>
          <input
            type="text"
            value={textValue}
            onChange={handleTextChange}
            placeholder="Enter text"
          />
        </div>
      )}
      {selectedComponent.type === 'container' && (
        <div className="form-group">
          <label>Text Content</label>
          <input
            type="text"
            value={textValue}
            onChange={handleTextChange}
            placeholder="Enter text"
          />
          {/* <label>Image URL</label>
          <input
            type="text"
            value={imageSrc}
            onChange={handleImageChange}
            placeholder="Enter image URL"
          /> */}
        </div>
        
      )}

      {selectedComponent.type === 'Image' && (
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            value={imageSrc}
            onChange={handleImageChange}
            placeholder="Enter image URL"
          />
        </div>
      )}
      
      {/* Common styles for both Text and Image */}
      <div className="form-group">
        <label>Width</label>
        <input
          type="text"
          name="width"
          value={styles.width || ''}
          placeholder="e.g. 100% or 200px"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Height</label>
        <input
          type="text"
          name="height"
          value={styles.height || ''}
          placeholder="e.g. auto or 200px"
          onChange={handleStyleChange}
        />
      </div>

      {/* Margin controls */}
      <div className="form-group">
        <label>Margin (All sides)</label>
        <input
          type="text"
          name="margin"
          value={styles.margin || ''}
          placeholder="e.g. 10px or 10px 20px"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Margin Top</label>
        <input
          type="text"
          name="marginTop"
          value={styles.marginTop || ''}
          placeholder="e.g. 10px"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Margin Right</label>
        <input
          type="text"
          name="marginRight"
          value={styles.marginRight || ''}
          placeholder="e.g. 10px"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Margin Bottom</label>
        <input
          type="text"
          name="marginBottom"
          value={styles.marginBottom || ''}
          placeholder="e.g. 10px"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Margin Left</label>
        <input
          type="text"
          name="marginLeft"
          value={styles.marginLeft || ''}
          placeholder="e.g. 10px"
          onChange={handleStyleChange}
        />
      </div>

      {/* Padding controls */}
      <div className="form-group">
        <label>Padding (All sides)</label>
        <input
          type="text"
          name="padding"
          value={styles.padding || ''}
          placeholder="e.g. 10px or 10px 20px"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Padding Top</label>
        <input
          type="text"
          name="paddingTop"
          value={styles.paddingTop || ''}
          placeholder="e.g. 10px"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Padding Right</label>
        <input
          type="text"
          name="paddingRight"
          value={styles.paddingRight || ''}
          placeholder="e.g. 10px"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Padding Bottom</label>
        <input
          type="text"
          name="paddingBottom"
          value={styles.paddingBottom || ''}
          placeholder="e.g. 10px"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Padding Left</label>
        <input
          type="text"
          name="paddingLeft"
          value={styles.paddingLeft || ''}
          placeholder="e.g. 10px"
          onChange={handleStyleChange}
        />
      </div>

      <div className="form-group">
        <label>Background Color</label>
        <input
          type="color"
          name="backgroundColor"
          value={styles.backgroundColor || '#ffffff'}
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Border Radius</label>
        <input
          type="text"
          name="borderRadius"
          value={styles.borderRadius || ''}
          placeholder="e.g. 5px or 50%"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Border</label>
        <input
          type="text"
          name="border"
          value={styles.border || ''}
          placeholder="e.g. 1px solid black"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Box Shadow</label>
        <input
          type="text"
          name="boxShadow"
          value={styles.boxShadow || ''}
          placeholder="e.g. 2px 2px 5px rgba(0,0,0,0.3)"
          onChange={handleStyleChange}
        />
      </div>
      <div className="form-group">
        <label>Opacity</label>
        <input
          type="range"
          name="opacity"
          min="0"
          max="1"
          step="0.1"
          value={styles.opacity || '1'}
          onChange={handleStyleChange}
        />
      </div>

      {selectedComponent.type === 'Text' && (
        <>
          <div className="form-group">
            <label>Font Size</label>
            <input
              type="text"
              name="fontSize"
              value={styles.fontSize || ''}
              placeholder="e.g. 16px"
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Font Weight</label>
            <select
              name="fontWeight"
              value={styles.fontWeight || 'normal'}
              onChange={handleStyleChange}
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="lighter">Lighter</option>
              <option value="bolder">Bolder</option>
            </select>
          </div>
          <div className="form-group">
            <label>Font Family</label>
            <input
              type="text"
              name="fontFamily"
              value={styles.fontFamily || ''}
              placeholder="e.g. Arial, sans-serif"
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Text Color</label>
            <input
              type="color"
              name="color"
              value={styles.color || '#000000'}
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Text Align</label>
            <select
              name="textAlign"
              value={styles.textAlign || 'left'}
              onChange={handleStyleChange}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </select>
          </div>
          <div className="form-group">
            <label>Line Height</label>
            <input
              type="text"
              name="lineHeight"
              value={styles.lineHeight || ''}
              placeholder="e.g. 1.5 or 24px"
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Letter Spacing</label>
            <input
              type="text"
              name="letterSpacing"
              value={styles.letterSpacing || ''}
              placeholder="e.g. 1px or 0.1em"
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Text Transform</label>
            <select
              name="textTransform"
              value={styles.textTransform || 'none'}
              onChange={handleStyleChange}
            >
              <option value="none">None</option>
              <option value="uppercase">Uppercase</option>
              <option value="lowercase">Lowercase</option>
              <option value="capitalize">Capitalize</option>
            </select>
          </div>
        </>
      )}
      {selectedComponent.type === 'container' && (
        <>
          <div className="form-group">
            <label>Font Size</label>
            <input
              type="text"
              name="fontSize"
              value={styles.fontSize || ''}
              placeholder="e.g. 16px"
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Font Weight</label>
            <select
              name="fontWeight"
              value={styles.fontWeight || 'normal'}
              onChange={handleStyleChange}
            >
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="lighter">Lighter</option>
              <option value="bolder">Bolder</option>
            </select>
          </div>
          <div className="form-group">
            <label>Font Family</label>
            <input
              type="text"
              name="fontFamily"
              value={styles.fontFamily || ''}
              placeholder="e.g. Arial, sans-serif"
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Text Color</label>
            <input
              type="color"
              name="color"
              value={styles.color || '#000000'}
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Text Align</label>
            <select
              name="textAlign"
              value={styles.textAlign || 'left'}
              onChange={handleStyleChange}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </select>
          </div>
          <div className="form-group">
            <label>Line Height</label>
            <input
              type="text"
              name="lineHeight"
              value={styles.lineHeight || ''}
              placeholder="e.g. 1.5 or 24px"
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Letter Spacing</label>
            <input
              type="text"
              name="letterSpacing"
              value={styles.letterSpacing || ''}
              placeholder="e.g. 1px or 0.1em"
              onChange={handleStyleChange}
            />
          </div>
          <div className="form-group">
            <label>Text Transform</label>
            <select
              name="textTransform"
              value={styles.textTransform || 'none'}
              onChange={handleStyleChange}
            >
              <option value="none">None</option>
              <option value="uppercase">Uppercase</option>
              <option value="lowercase">Lowercase</option>
              <option value="capitalize">Capitalize</option>
            </select>
          </div>
        </>
      )}

      {selectedComponent.type === 'Image' && (
        <>
          <div className="form-group">
            <label>Object Fit</label>
            <select
              name="objectFit"
              value={styles.objectFit || 'cover'}
              onChange={handleStyleChange}
            >
              <option value="cover">Cover</option>
              <option value="contain">Contain</option>
              <option value="fill">Fill</option>
              <option value="none">None</option>
              <option value="scale-down">Scale Down</option>
            </select>
          </div>
          <div className="form-group">
            <label>Object Position</label>
            <input
              type="text"
              name="objectPosition"
              value={styles.objectPosition || ''}
              placeholder="e.g. center or 50% 50%"
              onChange={handleStyleChange}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default DesignTab;

// 10