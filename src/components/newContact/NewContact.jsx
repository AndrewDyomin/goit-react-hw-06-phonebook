import { Formik, Field, Form } from 'formik';
import { Container, FormItem } from './NewContact.styled';

export const AddContact = ({ create }) => {
    return (
        <Container>
            <h1>Contacts</h1>
            <Formik
            initialValues={{
                name: '',
                number: '',
            }}
            
            onSubmit={ (values,{resetForm}) => {
                create(values);
                resetForm();
            }}
            >
            <Form>
                <FormItem>
                    <label htmlFor="Name">Name</label>
                    <Field id="Name" name="name" placeholder="Jacob Mercer" type="text" required/>
                </FormItem>
                <FormItem>
                    <label htmlFor="Number">Number</label>
                    <Field 
                    id="Number" 
                    name="number" 
                    placeholder="227-91-26" 
                    type="tel" 
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                </FormItem>
                <FormItem>
                    <button type="submit">Add contact</button>
                </FormItem>
            </Form>
            </Formik>
        </Container>

    );
};