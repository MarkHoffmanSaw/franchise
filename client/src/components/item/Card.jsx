import styled from "styled-components/macro";
import Image from "../item/Image";
import { NavLink } from "react-router-dom";

const StyledCard = styled(NavLink)`
    width: 300px;
    height: 400px;
    border: 1px solid ${(props) => props.theme.app.border};
    margin-bottom: 30px;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s;
    &:hover {
        /* transform: translate(-5px, -5px); */
        box-shadow: 1px 1px ${(props) => props.theme.button.hoverBackground},
            3px 3px ${(props) => props.theme.button.hoverBackground},
            5px 5px ${(props) => props.theme.button.hoverBackground};
        transform: translate(-5px, -5px);
    }
`;
const StyledImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
    border: 1px solid ${(props) => props.theme.app.border}; ;
`;
const StyledInfoWrapper = styled.div`
    padding: 5px;
`;
const StyledTitle = styled.h2`
    margin-bottom: 15px;
`;
const StyledDescription = styled.p`
    margin-bottom: 10px;
`;
const StyledPrice = styled.h3``;
const StyledLink = styled(NavLink)``;

const Card = ({ franchise }) => (
    <StyledCard to={`/`}>
        <StyledImageWrapper>
            <Image src={franchise.image} alt={franchise.title} />
        </StyledImageWrapper>
        <StyledInfoWrapper>
            <StyledTitle>{franchise.title}</StyledTitle>
            <StyledDescription>{franchise.description}</StyledDescription>
            <StyledPrice>
                <p>Цена франшизы:</p>
                {franchise.priceMin}-{franchise.priceMax}
            </StyledPrice>
        </StyledInfoWrapper>
    </StyledCard>
);
export default Card;
