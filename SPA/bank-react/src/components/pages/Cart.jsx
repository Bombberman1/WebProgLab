import { useDispatch, useSelector } from 'react-redux';
import { decrementAmount, incrementAmount, removeFromCart } from '../actions';
import { 
  BackButton,
  CartButtonsContainer, CartHeader, CartItem, CartItemData, 
  CartItemImg, CartItemName, CartPageContainer, ContinueButton, ItemAmount, 
  ItemButton, ItemButtonsContainer, ItemButtonsPriceContainer, 
  ItemPrice, TotalPrice, TotalPriceContainer, TotalPriceText } from './styled/Cart.styled';
import { cartBank } from '../../images/exporter';
import { useNavigate } from 'react-router-dom';


function CartPage() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementAmount = (bankId) => {
    dispatch(incrementAmount(bankId));
  };

  const handleDecrementAmount = (bankId) => {
    dispatch(decrementAmount(bankId));
  };

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.bank.price * item.amount;
  }, 0);

  return (
    <div>
      <CartPageContainer>
        <CartHeader>Shopping Cart</CartHeader>
        {cartItems.map((item) => (
          <CartItem key={item.bank.id}>
            <CartItemImg src={cartBank}></CartItemImg>
            <CartItemData>
              <CartItemName>{item.bank.name}</CartItemName>
              <ItemButtonsPriceContainer>
                <ItemButtonsContainer>
                  <ItemButton onClick={() => handleDecrementAmount(item.bank.id)}>-</ItemButton>
                  <ItemAmount>{item.amount}</ItemAmount>
                  <ItemButton onClick={() => handleIncrementAmount(item.bank.id)}>+</ItemButton>
                  <ItemButton onClick={() => handleRemoveFromCart(item.bank.id)}>✕</ItemButton>
                </ItemButtonsContainer>
                <ItemPrice>${item.bank.price * item.amount}</ItemPrice>
              </ItemButtonsPriceContainer>
            </CartItemData>
          </CartItem>
        ))}
        <TotalPriceContainer>
          <TotalPriceText>Total amount: </TotalPriceText>
          <TotalPrice>${totalAmount}</TotalPrice>
        </TotalPriceContainer>
        <CartButtonsContainer>
          <BackButton onClick={() => navigate('/catalog')}>Back to Catalog</BackButton>
          <ContinueButton onClick={() => navigate('/checkout')}>Continue</ContinueButton>
        </CartButtonsContainer>
      </CartPageContainer>
    </div>
  );
}
  
export default CartPage;