import styled from 'styled-components';

export const PostCardContainer = styled.div`
    background-color: ${props => props.theme['base-post']};
    border-radius: 10px;
    padding: 2rem;
    border: 2px solid ${props => props.theme['base-post']};
    cursor: pointer;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &:hover {
        border: 2px solid ${props => props.theme['base-label']};
    }
`;

export const PostCardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 1.25rem;
        color: ${props => props.theme['base-title']};
    }

    span {
        color: ${props => props.theme['base-span']};
        font-size: .875rem;
    }
`;

export const PostCardContent = styled.p`
    color: ${props => props.theme['base-text']};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
   -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4; 
   -webkit-box-orient: vertical;
`;