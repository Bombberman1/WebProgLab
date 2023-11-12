import { 
  FiltersHeader, ItemsHero, ItemContainer,
  ItemIndexContainer, ItemIndex, ItemImg,
  ItemHeading, ItemSubHeading, ItemBankFieldContainer,
  ItemBankFieldText, ItemBankField, ItemViewMore,
  ItemViewMoreContainer, ItemDataContainer
} from "./styled/Catalog.styled";
import { catalogBank, backgroundCatalog } from "../../images/exporter";
import { Apply, applyFilters } from "./catalog-components/ApplyButton";
import { FiltersList } from "./catalog-components/FilterSelect";
import { useState } from "react";

function CatalogPage({ banks, catalogSearch }) {
    const [sortedBanks, setSortedBanks] = useState([...banks]);

    const [selectedFilters, setSelectedFilters] = useState([
      { value: "" },
      { value: "" },
      { value: "" },
    ]);

    const handleApplyFilters = () => {
      const updatedBanks = applyFilters(banks, selectedFilters, catalogSearch);
      setSortedBanks(updatedBanks);
    };

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
                    <ItemViewMore href={`/bank/${bank.id}`}>View more</ItemViewMore>
                  </ItemViewMoreContainer>
                </div>
              </ItemDataContainer>
            </ItemContainer>
          ))}
        </ItemsHero>
      </div>
    );
  }
  
export default CatalogPage;