import { useNavigate } from "react-router-dom";
import { BackButton, CheckoutButtonsContainer, CheckoutHeader, 
    CheckoutPageContainer, ContinueButton, 
    FieldContainer, FieldText, FieldsContainer } from "./styled/Checkout.styled";
import { Formik, Field, Form } from "formik";
import { validation } from "./checkout-components/validation";
import { useState } from "react";
import ErrorMessage from "./checkout-components/ErrorMessage";


function CheckoutPage() {
    const navigate = useNavigate();
    const [errorsText, setErrorsText] = useState([]);
  
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>Checkout</CheckoutHeader>
            <Formik
                initialValues={{ firstName: "", lastName: "", email: "", phone: "", age: "", address: "" }}
                onSubmit={(values) => {
                    setErrorsText([]);
                    const errors = validation(values);
                    if (!errors.length) {
                        navigate('/success');
                    } else {
                        setErrorsText([...errors]);
                    }
                }}
            >
                {({ isValid }) => (
                    <Form>
                        <FieldsContainer>
                            <FieldContainer>
                                <FieldText>First Name</FieldText>
                                <Field name="firstName" type="text" placeholder="Name" maxlength="14" required style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', width: '250px'
                                }} />
                            </FieldContainer>
                            <FieldContainer>
                                <FieldText>Last Name</FieldText>
                                <Field name="lastName" type="text" placeholder="Surname" maxlength="14" required style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', width: '250px'
                                }} />
                            </FieldContainer>
                        </FieldsContainer>
                        <FieldsContainer>
                            <FieldContainer>
                                <FieldText>Email</FieldText>
                                <Field name="email" placeholder="example@gmail.com" type="text" maxlength="22" style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', width: '200px'
                                }} />
                            </FieldContainer>
                            <FieldContainer>
                                <FieldText>Phone</FieldText>
                                <Field name="phone" type="tel" pattern="\+[0-9]{1,3}-[0-9]{2}-[0-9]{3}-[0-9]{4}" 
                                    placeholder="+000-00-000-0000" maxlength="16" required style={{
                                        border: '2px solid', borderRadius: '12px', padding: '10px', width: '200px'
                                    }}
                                />
                            </FieldContainer>
                            <FieldContainer>
                                <FieldText>Age</FieldText>
                                <Field name="age" type="number" placeholder="0" min="1" max="120" required style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', textAlign: 'center', width: '40px'
                                }} />
                            </FieldContainer>
                        </FieldsContainer>
                        <FieldsContainer>
                            <FieldContainer style={{width: '100%'}}>
                                <FieldText>Address</FieldText>
                                <Field name="address" type="text" placeholder="Country, Town, ..." maxlength="50" required style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', width: '96%'
                                }} />
                            </FieldContainer>
                        </FieldsContainer>
                        
                        {ErrorMessage(errorsText, { setErrorsText })}

                        <CheckoutButtonsContainer>
                            <BackButton onClick={() => navigate('/cart')}>Go Back</BackButton>
                            <ContinueButton type="submit" disabled={!isValid}>Continue</ContinueButton>
                        </CheckoutButtonsContainer>
                    </Form>
                )}
            </Formik>
        </CheckoutPageContainer>
    );
}

export default CheckoutPage;