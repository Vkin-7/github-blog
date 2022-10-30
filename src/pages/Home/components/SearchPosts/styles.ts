import styled from 'styled-components';

export const SearchPostsContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 4.5rem auto 3rem auto;

    display: flex;
    flex-direction: column;
    gap: .75rem;
`;

export const SearchPostsHeader = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 1.125rem;
        color: ${props => props.theme['base-subtitle']}
    }

    span {
        color: ${props => props.theme['base-span']};
        font-size: .875rem;
    }
`;

export const SearchPostsInput = styled.input`
    padding: .75rem 1rem;
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;
    color: ${props => props.theme['base-text']};

    &:focus {
        border: 1px solid ${props => props.theme.blue};
    }
`;