import styled from 'styled-components';

export const PostInfoCardContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: ${props => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    margin-top: -5rem;
`;

export const PostInfoCardHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
        display: flex;
        gap: .5rem;
        align-items: center;

        border-bottom: 1px solid transparent;

        text-decoration: none;
        color: ${props => props.theme.blue};
        font-weight: bold;
        font-size: .75rem;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }
    }
`;

export const PostInfoCardTitle = styled.h1`
    color: ${props => props.theme['base-title']};
    font-weight: bold;
    font-size: 1.5rem;
`;

export const PostInfoCardFooter = styled.footer`
    position: relative;
    bottom: 0;

    display: flex;
    gap: 1.5rem;
    color: ${props => props.theme['base-span']};

    span {
        display: flex;
        align-items: center;
        gap: .5rem;

        svg {
            font-size: 1.125rem;
        }
    }
`;
