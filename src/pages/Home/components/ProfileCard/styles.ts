import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 2.5rem;

    display: flex;
    gap: 2rem;

    background-color: ${props => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    margin-top: -5rem;

    @media (max-width: 768px) {
        margin-top: -2.5rem;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;

export const ProfileImage = styled.img`
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;

    @media (max-width: 425px) {
        width: 5rem;
        height: 5rem;
    }
`;

export const ProfileContent = styled.div`
    height: 9.25rem;
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        margin: .5rem 0 1.5rem 0;
    }
`;

export const ProfileHeader = styled.header`
    display: flex;
    justify-content: space-between;

    h1 {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 130%;

        @media (max-width: 425px) {
            font-size: 1.2rem;
        }

        color: ${props => props.theme['base-title']};
    }

    a {
        color: ${props => props.theme.blue};
        text-decoration: none;

        font-size: .75rem;
        line-height: 160%;

        display: flex;
        justify-content: space-between;
        gap: .5rem;
        align-items: center;
        border-bottom: 1px solid transparent;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }

        @media (max-width: 425px) {
            font-size: .6rem;
        }
    }
`;

export const ProfileFooter = styled.footer`
    position: relative;
    bottom: 0;

    display: flex;
    gap: 1.5rem;

    span {
        display: flex;
        align-items: center;
        gap: .5rem;
        color: ${props => props.theme['base-subtitle']};

        svg {
            font-size: 1.125rem;
            color: ${props => props.theme['base-label']};

            @media (max-width: 425px) {
                font-size: 1rem;
            }
        }

        @media (max-width: 425px) {
            gap: .4rem;
            font-size: .6rem;
        }
    }

    @media (max-width: 425px) {
        gap: .5rem;
    }
`;