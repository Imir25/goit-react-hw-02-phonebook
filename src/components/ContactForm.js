import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  number: Yup.string().required('Number is required'),
});

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <div>
      <h2>Add contact</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
            />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="number">Number:</label>
            <Field
              type="tel"
              id="number"
              name="number"
              placeholder="Enter number"
            />
            <ErrorMessage name="number" component="div" />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;