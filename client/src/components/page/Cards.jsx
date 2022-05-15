import styled from "styled-components/macro";
import Card from "../item/Card";

const StyledMainDisplay = styled.div`
    padding: 20px;
`;
const StyledTitle = styled.h1`
    margin-bottom: 20px;
`;
const StyledNavbar = styled.nav`
    margin-bottom: 30px;
`;
const StyledSrc = styled.p`
    margin-bottom: 30px;
`;
const StyledList = styled.ul`
    display: flex;
`;
const StyledListItem = styled.li`
    margin-right: 20px;
`;
const StyledCards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
/* TODO:
- Хлебные крошки
 */
const Cards = ({ allFranchise }) => (
    <StyledMainDisplay>
        <StyledTitle>Каталог франшиз</StyledTitle>
        <StyledSrc>Каталог / "Имя франшизы"</StyledSrc>
        <StyledNavbar>
            <StyledList>
                <StyledListItem>
                    <a href="">Каталог</a>
                </StyledListItem>
                <StyledListItem>
                    <a href="">Профиль</a>
                </StyledListItem>
            </StyledList>
        </StyledNavbar>
        <StyledCards>
            {allFranchise.map((franchise, index) => (
                // Настроить ключи
                <Card key={franchise.title + index} franchise={franchise} />
            ))}
        </StyledCards>
    </StyledMainDisplay>
);
export default Cards;
