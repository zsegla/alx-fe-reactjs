import React from 'react';

const TextInput = ({ label, value, onChange, type = 'text' }) => {
    return (
        <div className="text-input">
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                required 
            />
        </div>
    );
};

export default TextInput;