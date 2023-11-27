import { 
  FiltersHeader, ItemsHero, ItemContainer,
  ItemIndexContainer, ItemIndex, ItemImg,
  ItemHeading, ItemSubHeading, ItemBankFieldContainer,
  ItemBankFieldText, ItemBankField, ItemViewMore,
  ItemViewMoreContainer, ItemDataContainer
} from "./styled/Catalog.styled";
import { catalogBank, backgroundCatalog, loadingGif } from "../../images/exporter";
import { Apply, applyFilters } from "./catalog-components/ApplyButton";
import { FiltersList } from "./catalog-components/FilterSelect";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function CatalogPage({ banks, catalogSearch }) {
    const [sortedBanks, setSortedBanks] = useState([...banks]);

    const navigate = useNavigate();

    const [selectedFilters, setSelectedFilters] = useState([
      { value: "" },
      { value: "" },
      { value: "" },
    ]);

    const [spinnerLoader, setSpinnerLoader] = useState(false);

    const handleApplyFilters = async () => {
      const updatedBanks = await applyFilters(banks, selectedFilters, catalogSearch);
      if (updatedBanks) {
        setSpinnerLoader(false);
        setSortedBanks(updatedBanks);
      } else {
        setSpinnerLoader(true);
      }
    };

    if (!spinnerLoader) {
      return (
      <div>
        <FiltersHeader>
          <FiltersList setSelectedFilters={setSelectedFilters}></FiltersList>
          <Apply onClick={handleApplyFilters}>Apply</Apply>
        </FiltersHeader>
        <ItemsHero style={{
          backgroundImage: `url(${backgroundCatalog})`,
          backgroundSize: '500px 500px',
          backgroundRepeat: 'repeat',
        }}>
          {sortedBanks.map((bank) => (
            <ItemContainer key={bank.id}>
              <ItemIndexContainer>
                <ItemIndex>{`Bank ${bank.id}`}</ItemIndex>
              </ItemIndexContainer>
              <ItemDataContainer>
                <div style={{height: '236px', width: '200px'}}>
                  <ItemImg src={catalogBank}></ItemImg>
                  <ItemHeading>{bank.name}</ItemHeading>
                  <ItemSubHeading style={{paddingBottom: '20px'}}>
                    {bank.description}
                  </ItemSubHeading>
                </div>
                <div style={{width: '200px'}}>
                  <ItemBankFieldContainer>
                    <ItemBankFieldText>Clients:</ItemBankFieldText>
                    <ItemBankField>
                      {bank.clients}
                    </ItemBankField>
                  </ItemBankFieldContainer>
                  <ItemBankFieldContainer>
                    <ItemBankFieldText>Loans:</ItemBankFieldText>
                    <ItemBankField>
                      {bank.loans}
                    </ItemBankField>
                  </ItemBankFieldContainer>
                  <ItemBankFieldContainer>
                    <ItemBankFieldText>Price:</ItemBankFieldText>
                    <ItemBankField>
                      {`$ ${bank.price}`}
                    </ItemBankField>
                  </ItemBankFieldContainer>
                  <ItemViewMoreContainer>
                    <ItemViewMore onClick={() => navigate(`/bank/${bank.id}`)}>View more</ItemViewMore>
                  </ItemViewMoreContainer>
                </div>
              </ItemDataContainer>
            </ItemContainer>
          ))}
        </ItemsHero>
      </div>
      );
    } else {
      return (
        <div style={{ height: '100vh', display: 'flex' }}>
          <img src={loadingGif} style={{margin: '0 auto'}}></img>
        </div>
      );
    }

    
  }
  
export default CatalogPage;