// Code Keypad Component Here
// Keypad.js
import React from 'react';
import EyesOnMe from './EyesOnMe';  
const Keypad = () => {
const handleInputChange = () => {
    console.log('Entering password...');
    <EyesOnMe />
};

return (
    
    <input type="password" onChange={handleInputChange} />
);
};

export default Keypad;