import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import TextInput from './TextInput';
import SubmitButton from './SubmitButton';

const Form = () => {
    const { values, handleChange, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                name="username"
                value={values.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <TextInput
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <SubmitButton />
        </form>
    );
};

export default Form;