import { useRef } from 'react';
import './Display.scss';

function Display({ keypad, vocabs, selected, category, handleCategoryChange }) {
  const keyIndex = keypad.indexOf(selected);

  const selectedStyle = {
    background: "#9DBDC4",
    color: "#F2F6F6"
  }

  const unselectedStyle = {
    background: "#DDE8EA",
    color: "#456268"
  }

  return (
    <div id="display-container" className="col-6">

      <h2>Pronounciations</h2>
      <div id="display">
        <p id="translit">
          {selected ? vocabs[keyIndex].transliteration : "Click on the image"}
        </p>
        <p id="translat">
          {selected ? vocabs[keyIndex].translation : "or press the keypad"}
        </p>
      </div>

      <h2>Select Category</h2>
      <form id="category-display">
        <div
          className="radio"
          style={category === 'fruits-vegs' ? selectedStyle : unselectedStyle}
        >
          <label>
            <input
              type="radio" 
              value="fruits-vegs"
              checked={category === 'fruits-vegs'}
              onChange={handleCategoryChange}
            />
            Fruits & Vegs
          </label>
        </div>
        <div
          className="radio"
          style={category === 'animals' ? selectedStyle : unselectedStyle}
        >
          <label>
            <input
              type="radio" 
              value="animals"
              checked={category === 'animals'}
              onChange={handleCategoryChange}
            />
            Animals
          </label>
        </div>
      </form>
    </div>
  );
}

export default Display;