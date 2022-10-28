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
`;

export const ProfileImage = styled.img`
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
`;

export const ProfileContent = styled.div`
    height: 9.25rem;
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        margin: 8px 0 24px 0;
    }
`;

export const ProfileHeader = styled.header`
    display: flex;
    position: relative;

    h1 {
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 130%;

        color: ${props => props.theme['base-title']};
    }

    a {
        color: ${props => props.theme.blue};
        text-decoration: none;

        font-size: .75rem;
        line-height: 160%;

        display: flex;
        position: absolute;
        top: 0;
        right: 0;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
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
            color: ${props => props.theme['base-label']};
        }
    }
`;