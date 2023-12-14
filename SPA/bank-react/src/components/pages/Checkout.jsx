import { useAsyncValue, useNavigate } from "react-router-dom";
import { BackButton, CheckoutButtonsContainer, CheckoutHeader, 
    CheckoutPageContainer, ContinueButton, 
    FieldContainer, FieldText, FieldsContainer } from "./styled/Checkout.styled";
import { Formik, Field, Form } from "formik";
import { validation } from "./checkout-components/validation";
import { useEffect, useRef, useState } from "react";
import ErrorMessage from "./checkout-components/ErrorMessage";
import NovaPoshtaInfo from "./checkout-components/NovaPoshtaInfo";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../actions";


function CheckoutPage() {
    const navigate = useNavigate();
    const [errorsText, setErrorsText] = useState([]);
    const [novaOffice, setNovaOffice] = useState(undefined);
    const prevErrorsTextRef = useRef(errorsText);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const apiKey = '3fed9303d9bac12288640094b5185684';
    const apiUrl = 'https://api.novaposhta.ua/v2.0/json/';

    const getOfficesInTown = async (city, number, errors, values) => {
        if (/[A-z]+/.test(city)) {
            if (errors.length) {
                setErrorsText([...errors, "Town should be UA language"]);
                return;
            } else {
                setErrorsText(["Town should be UA language"]);
                return;
            }
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
            const exactOffice = data.data.find((office) => (new RegExp(`(Відділення|Пункт|Поштомат "Нова Пошта") №${number}[:\\s]`)).test(office.Description));
            if (exactOffice) {
                const errs = validation(values);
                if (!errs.length) {
                    setErrorsText([]);
                }
                return exactOffice;
            } else {
                if (errors.length) {
                    setErrorsText([...errors, "Did you miss a few digits in № ?"]);
                    return;
                } else {
                    setErrorsText(["Did you miss a few digits in № ?"]);
                    return;
                }
            }
        } else {
            if (errors.length) {
                setErrorsText([...errors, "Wrong UA town or post number"]);
                return;
            } else {
                setErrorsText(["Wrong UA town or post number"]);
                return;
            }
        }
    };

    const removeCart = () => {
        cartItems.forEach((state) => {
            dispatch(removeFromCart(state.bank.id));
        });
    }

    useEffect(() => {
        if (prevErrorsTextRef.current !== errorsText) {
            if (errorsText.length === 0) {
                alert('Wait 10 seconds');
                const timeoutId = setTimeout(() => {
                    removeCart();
                    navigate('/success');
                }, 10000);
    
                return () => clearTimeout(timeoutId);
            }
        }
    
        prevErrorsTextRef.current = errorsText;
    }, [errorsText, navigate]);
  
    return (
        <CheckoutPageContainer>
            <CheckoutHeader>Checkout</CheckoutHeader>
            <Formik
                initialValues={{ firstName: "", lastName: "", email: "", phone: "", age: "", address: "" }}
                onSubmit={(values) => {
                    const errors = validation(values);
                    if (errors.length) {
                        setErrorsText([...errors]);
                    }

                    const params = values.address.match(/([^\s,.:_]+|\S\d+)/g);
                    if (params.length === 2) {
                        getOfficesInTown(params[0], params[1], errors, values).then((res) => {
                            setNovaOffice(res);
                        });
                    } else {
                        if (errors.length) {
                            setErrorsText([...errors, "Invalid format, example: Київ, 5"]);
                        } else {
                            setErrorsText(["Invalid format, example: Київ, 5"]);
                        }
                        setNovaOffice(undefined);
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