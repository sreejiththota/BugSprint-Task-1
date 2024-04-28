import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormComponent.css';

const validationSchema = Yup.object({
    textArea: Yup.string().required('Text area is required'),
    password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters long'),
    number: Yup.number().required('Required').min(1, 'Number must be at least 1').max(10, 'Number must be at most 10'),
    radio: Yup.string().required('Please select a radio option'),
    checkbox: Yup.array().min(1, 'Please select at least one checkbox'),
    dropdown: Yup.string().required('Please select an option'),
    file: Yup.mixed().required('File is required'),
   });
   const FormComponent = () => {
    return (
        
       <Formik
         initialValues={{
           textArea: '',
           password: '',
           number: '',
           radio: '',
           checkbox: false,
           dropdown: '',
           file: null,
         }}
         validationSchema={validationSchema}
         onSubmit={(values) => {
           console.log(values);
         }}
       >
         {({ setFieldValue }) => (
           <Form>
            <h1>Simple Form Using React and Formik</h1>
            <div>
             <label htmlFor="textArea">Normal Text Area:-</label>
             <Field as="textarea" name="textArea" />
             <ErrorMessage name="textArea" />
             </div>

            <div>   
             <label htmlFor="password">Password Input Type:-</label>
             <Field type="password" name="password" />
             <ErrorMessage name="password" />
             </div>

            <div>
             <label htmlFor="number">Number Input With Specific Range:-</label>
             <Field type="number" name="number" />
             <ErrorMessage name="number" />
             </div>


            <div>
             <label>Radio Button:-</label>
             <Field as="input" type="radio" name="radio" value="option1" /> Option 1
             <Field as="input" type="radio" name="radio" value="option2" /> Option 2
             <Field as="input" type="radio" name="radio" value="option2" /> Option 3
             <ErrorMessage name="radio" />
             </div>

             <div>
             <label>Check Boxes Section:-</label>
             <label>
                  <Field type="checkbox" name="checkbox" value="checkbox1" />
                  Check Box 1
                </label>
                <label>
                  <Field type="checkbox" name="checkbox" value="checkbox2" />
                  Check Box 2
                </label>
                <label>
                  <Field type="checkbox" name="checkbox" value="checkbox2" />
                  Check Box 3
                </label>
                </div>


             <div>
             <label htmlFor="dropdown">Dropdown:-</label>
             <Field as="select" name="dropdown">
               <option value="">Select...</option>
               <option value="option1">Option-1</option>
               <option value="option2">Option-2</option>
               <option value="option2">Option-3</option>
             </Field>
             <ErrorMessage name="dropdown" />
             </div>

             <div>
             <label htmlFor="file">File Input Type:-</label>
             <Field type="file" name="file" onChange={(event) => {
               setFieldValue("file", event.currentTarget.files[0]);
             }} />
             <ErrorMessage name="file" />
             </div>
   
             <button type="submit">SUBMIT</button>
           </Form>
         )}
       </Formik>
    );
   };
   export default FormComponent;
   