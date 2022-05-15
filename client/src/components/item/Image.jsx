import styled from "styled-components/macro";

const StyledImageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;
const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
/*TODO:
- Настроить заглушки
*/
const Image = ({ src, alt }) => (
    <StyledImageWrapper>
        <StyledImage src={src} alt={alt} />
    </StyledImageWrapper>
);

export default Image;
