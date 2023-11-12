import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AddToCartButton, BackButton, DescriptionButton, FieldContainer, FieldInput, FieldSelect, FieldText, FieldsContainer, ItemButtonsContainer, ItemDescription, ItemImage, ItemInfoContainer, ItemInfoWrapper, ItemName, Price, PriceButtonsContainer, PriceContainer } from "./styled/Item.styled";
import { itemPageBackground, itemPageBank } from "../../images/exporter";



function ItemPage( { banks } ) {

    const { id } = useParams();
    const itemId = parseInt(id);
    const [bank, setBank] = useState();
    const [showShortInfo, setShowShortInfo] = useState(true);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const selectedBank = banks.find((bankParam) => bankParam.id === itemId);
        setBank(selectedBank);
        setPrice(parseInt(selectedBank.price))
    }, [banks, itemId]);

    const shortInfoClick = () => {
        setShowShortInfo(true);
    };
    
    const fullInfoClick = () => {
        setShowShortInfo(false);
    };

    const [inputValue, setInputValue] = useState("");
    const [selectValue, setSelectValue] = useState("number");

    const inputChange = (event) => {
        const numericValue = event.target.value.replace(/[^0-9]/g, "");
        setInputValue(numericValue);
        setSelectValue("");
    };
    
    const selectChange = (event) => {
        setSelectValue(parseInt(event.target.value));
        setInputValue("");
    };

    useEffect(() => {
        if (bank) {
            let calculatedPrice = bank.price;
            if (!isNaN(inputValue) && inputValue !== "") {
                calculatedPrice = bank.price * parseInt(inputValue);
            } else if (!isNaN(selectValue) && selectValue !== "") {
                calculatedPrice = bank.price * parseInt(selectValue);
            }
            setPrice(calculatedPrice);
        }
    }, [inputValue, selectValue, bank]);
    

    if (bank) {
        return (
            <div style={{
                backgroundImage: `url(${itemPageBackground})`,
                backgroundSize: '300px 300px',
                backgroundRepeat: 'repeat',
            }}>
                <ItemInfoWrapper>
                    <ItemImage src={itemPageBank}></ItemImage>
                    <div style={{
                        padding: '20px',
                        border: '10px solid #dadada',
                        borderRadius: '20px',
                        backgroundColor: 'white',
                    }}>
                        <ItemButtonsContainer>
                            <DescriptionButton 
                            key={1} onClick={shortInfoClick} style={{
                            backgroundColor: showShortInfo ? "#178fc3" : "#474747"}}>
                                Short info
                            </DescriptionButton>
                            <DescriptionButton 
                            key={2} onClick={fullInfoClick} style={{
                            marginLeft: "10px",
                            backgroundColor: showShortInfo ? "#474747" : "#178fc3",}}>
                                Full info
                            </DescriptionButton>
                        </ItemButtonsContainer>
                        <ItemInfoContainer>
                            {showShortInfo ? 
                            (
                                <div>
                                    <ItemName>{bank.name}</ItemName>
                                    <ItemDescription></ItemDescription>
                                </div>
                            ) : 
                            (
                                <div>
                                    <ItemName>{bank.name}</ItemName>
                                    <ItemDescription>{bank.description}</ItemDescription>
                                </div>
                            )}
                            
                        </ItemInfoContainer>
                        <FieldsContainer>
                            <FieldContainer>
                                <FieldText>Amount</FieldText>
                                <FieldInput value={inputValue} onChange={inputChange}></FieldInput>
                            </FieldContainer>
                            <FieldContainer style={{marginLeft: '30px'}}>
                                <FieldText>Amount</FieldText>
                                <FieldSelect value={selectValue} onChange={selectChange}>
                                    {["", 1, 2, 3, 4, 5].map((number) => (
                                        <option key={number} value={number}>
                                            {number}
                                        </option>
                                    ))}
                                </FieldSelect>
                            </FieldContainer>
                        </FieldsContainer>
                    </div>
                </ItemInfoWrapper>
                <div style={{
                    padding: '60px 0 100px 0',
                }}>
                    <PriceContainer>
                        <Price>Price: ${price}</Price>
                        <PriceButtonsContainer>
                            <BackButton href="/catalog">Go back</BackButton>
                            <AddToCartButton>Add to cart</AddToCartButton>
                        </PriceButtonsContainer>
                    </PriceContainer>
                </div>
            </div>
        );
    }
}

export default ItemPage;