import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const PostContainer = styled.div`
    width: 100%;
    padding: 0 18rem;

    @media (max-width: 1024px) {
        padding: 0 9rem;
    }

    @media (max-width: 768px) {
        padding: 0 1rem;
    }

    @media (max-width: 425px) {
        padding: 0 1rem;
    }
`;

export const PostBody = styled(ReactMarkdown)`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    padding: 2.5rem 2rem;
`;