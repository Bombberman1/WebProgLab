import styled from "styled-components";


const keys = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
    'Friday', 'Saturday', 'Sunday'
];

const NovaPoshtaInfo = (office) => {
    if (office) {
        return (
            <PostContainer>
                <InfoContainer>
                    <NovaText>Nova Poshta</NovaText>
                    <InfoText>{/\S+/g.exec(office.Description)}: {office.Number}</InfoText>
                    <InfoText>Адреса: {office.ShortAddress}</InfoText>
                    <DayItems>
                        {keys.map((day) => (
                            <div>
                                <DayText>{day}</DayText>
                                <DayItem>
                                    <DayHours>{office.Schedule[day]}</DayHours>
                                </DayItem>
                            </div>
                        ))}
                    </DayItems>
                </InfoContainer>
            </PostContainer>
        );
    }
}

export default NovaPoshtaInfo;


const PostContainer = styled.div`
    display: flex;
    background-color: #ff1919;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    border: 8px solid #ed1515;
    border-radius: 10px;
`;

const InfoContainer = styled.div`
    padding: 20px;
`;

const NovaText = styled.p`
    font-size: 18px;
    font-weight: 800;
    color: white;
    margin: 0;
    text-align: center;
    padding-bottom: 25px;
`;

const InfoText = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: white;
    margin: 10px 0;
`;

const DayItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
`;

const DayItem = styled.div`
    margin: 4px;
    padding: 2px 5px;
    background-color: #ed1515;
    border: 8px solid #ed1515;
    border-radius: 10px;
    text-align: center;
`;

const DayText = styled.div`
    margin-top: 10px;
    font-size: 13px;
    font-weight: 400;
    color: white;
    text-align: center;
`;

const DayHours = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: white;
    margin: 0;
`;