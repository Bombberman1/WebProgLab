import { useNavigate } from "react-router-dom";
import { BackButton, CheckoutButtonsContainer, CheckoutHeader, 
    CheckoutPageContainer, ContinueButton, 
    FieldContainer, FieldText, FieldsContainer } from "./styled/Checkout.styled";
import { Formik, Field, Form } from "formik";
import { validation } from "./checkout-components/validation";
import { useState } from "react";
import ErrorMessage from "./checkout-components/ErrorMessage";
import NovaPoshtaInfo from "./checkout-components/NovaPoshtaInfo";


function CheckoutPage() {
    const navigate = useNavigate();
    const [errorsText, setErrorsText] = useState([]);
    const [novaOffice, setNovaOffice] = useState(undefined);
    const [successClick, setSuccessClick] = useState(0);

    const apiKey = '3fed9303d9bac12288640094b5185684';
    const apiUrl = 'https://api.novaposhta.ua/v2.0/json/';

    const getOfficesInTown = async (city, number) => {
        if (/^[A-z]+$/.test(city)) {
            setErrorsText((errors) => [...errors, "Town should be UA language"]);
            return;
        }
        const response = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                apiKey,
                modelName: 'Address',
                calledMethod: 'getWarehouses',
                methodProperties: {
                    CityName: city,
                    FindByString: `№${number}`,
                },
            }),
        });

        const data = await response.json();

        if (data.success && data.data.length > 0) {
            const exactOffice = data.data.find((office) => (new RegExp(`^(Відділення|Поштомат "Нова Пошта") №${number}[:\\s]`)).test(office.Description));
            if (exactOffice) {
                return exactOffice;
            } else {
                setErrorsText((errors) => [...errors, "Did you miss a few digits in № ?"]);
                return;
            }
        } else {
            setErrorsText((errors) => [...errors, "Wrong UA town or post number"]);
            return;
        }
    };

  
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>Checkout</CheckoutHeader>
            <Formik
                initialValues={{ firstName: "", lastName: "", email: "", phone: "", age: "", address: "" }}
                onSubmit={async (values) => {
                    const errors = validation(values);
                    setErrorsText(() => [...errors]);

                    const params = values.address.match(/([^\s,.:_]+|\S\d+)/g);
                    if (params.length === 2) {
                        const res = await getOfficesInTown(params[0], params[1]);
                        setNovaOffice(res);
                        if (res === undefined) {
                            setSuccessClick(0);
                        }
                    } else {
                        setErrorsText((err) => [...err, "Invalid format, example: Київ, 5"]);
                        console.log(errorsText);
                        setSuccessClick(0);
                    }

                    if (!errors.length) {
                        setSuccessClick((value) => value + 1);
                        if (successClick === 1) {
                            navigate('/success');
                        }
                    }
                }}
            >
                {({ isValid }) => (
                    <Form>
                        <FieldsContainer>
                            <FieldContainer style={{width: '47%'}}>
                                <FieldText>First Name</FieldText>
                                <Field name="firstName" type="text" placeholder="Name" maxlength="14" required style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', width: '92.4%'
                                }} />
                            </FieldContainer>
                            <FieldContainer style={{width: '47%'}}>
                                <FieldText>Last Name</FieldText>
                                <Field name="lastName" type="text" placeholder="Surname" maxlength="14" required style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', width: '92.4%'
                                }} />
                            </FieldContainer>
                        </FieldsContainer>
                        <FieldsContainer>
                            <FieldContainer style={{width: '36%'}}>
                                <FieldText>Email</FieldText>
                                <Field name="email" placeholder="example@gmail.com" type="text" maxlength="22" style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', width: '88%'
                                }} />
                            </FieldContainer>
                            <FieldContainer style={{width: '36%'}}>
                                <FieldText>Phone</FieldText>
                                <Field name="phone" type="tel" pattern="\+[0-9]{1,3}-[0-9]{2}-[0-9]{3}-[0-9]{4}" 
                                    placeholder="+000-00-000-0000" maxlength="16" required style={{
                                        border: '2px solid', borderRadius: '12px', padding: '10px', width: '88%'
                                    }}
                                />
                            </FieldContainer>
                            <FieldContainer style={{width: '18%'}}>
                                <FieldText>Age</FieldText>
                                <Field name="age" type="number" placeholder="0" min="1" max="120" required style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', textAlign: 'center', width: '79.8%'
                                }} />
                            </FieldContainer>
                        </FieldsContainer>
                        <FieldsContainer>
                            <FieldContainer style={{width: '100%'}}>
                                <FieldText>Address (Nova Poshta)</FieldText>
                                <Field name="address" type="text" placeholder="Місто, № від./пош. NovaPoshta" maxlength="50" required style={{
                                    border: '2px solid', borderRadius: '12px', padding: '10px', width: '96.2%'
                                }} />
                            </FieldContainer>
                        </FieldsContainer>
                        
                        {NovaPoshtaInfo(novaOffice)}

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