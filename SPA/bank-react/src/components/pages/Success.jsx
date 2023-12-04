import { useNavigate } from "react-router-dom";
import { GoBackButton, SuccessDescription, SuccessHeader, SuccessPageContainer, TickImg } from "./styled/Success.styled";
import { tick } from "../../images/exporter";


function SuccessPage() {
    const navigate = useNavigate();
  
    return (
        <SuccessPageContainer>
            <TickImg src={tick}></TickImg>
            <SuccessHeader>Success!</SuccessHeader>
            <SuccessDescription>
                Your order was sent to processing!<br/>
                Check your email box for further information.
            </SuccessDescription>
            <GoBackButton onClick={() => {navigate('/catalog')}}>Go back to Catalog</GoBackButton>
        </SuccessPageContainer>
    );
}

export default SuccessPage;