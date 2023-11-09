import { 
  FiltersHeader, FiltersList, FiltersItem,
  Filter, Apply, ItemsHero, ItemContainer,
  ItemIndexContainer, ItemIndex, ItemImg,
  ItemHeading, ItemSubHeading, ItemBankFieldContainer,
  ItemBankFieldText, ItemBankField, ItemViewMore,
  ItemViewMoreContainer, ItemDataContainer
} from "./styled/Catalog.styled";
import { catalogBank, backgroundCatalog } from "../../images/exporter";
import { Banks } from "./catalog-logic/logic";


function CatalogPage() {
    return (
      <div>
        <FiltersHeader>
          <FiltersList>
            <FiltersItem>
              <Filter>
                <option value="...">Filter by:</option>
                <option value="clients">Number of Clients</option>
                <option value="loans">Number of Loans</option>
              </Filter>
            </FiltersItem>
          </FiltersList>
          <Apply href="#">Apply</Apply>
        </FiltersHeader>
        <ItemsHero style={{
          backgroundImage: `url(${backgroundCatalog})`,
          backgroundSize: '300px 300px',
          backgroundRepeat: 'repeat',
        }}>
          {Banks.map((bank) => (
            <ItemContainer key={bank.index}>
              <ItemIndexContainer>
                <ItemIndex>{`Bank ${bank.index}`}</ItemIndex>
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
                    <ItemViewMore href="#">View more</ItemViewMore>
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