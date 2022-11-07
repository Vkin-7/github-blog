import styled from 'styled-components';
import headerImage from '@assets/header-background.png';

export const HeaderContainer = styled.header`
    background-image: url(${headerImage});
    background-repeat: no-repeat;
    background-size: 100% 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2.5rem 0 7.5rem;

    @media (max-width: 768px) {
        padding: 2.5rem 0;
    }
`;
