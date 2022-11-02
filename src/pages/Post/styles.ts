import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const PostContainer = styled.div`
    width: 100%;
    padding: 0 18rem;
`;

export const PostBody = styled(ReactMarkdown)`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    padding: 2.5rem 2rem;
`;