import styled from 'styled-components';

export const PostListContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    padding-bottom: 1rem;

    
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`;