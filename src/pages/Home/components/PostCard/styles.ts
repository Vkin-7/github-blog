import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export const PostCardContainer = styled(Link)`
    background-color: ${props => props.theme['base-post']};
    border-radius: 10px;
    padding: 2rem;
    border: 2px solid ${props => props.theme['base-post']};
    text-decoration: none;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &:hover {
        border: 2px solid ${props => props.theme['base-label']};
    }

    @media (max-width: 768px) {
        padding: 1rem;
        }
`;

export const PostCardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h3 {
        max-width: 80%;
        font-size: 1.25rem;
        color: ${props => props.theme['base-title']};

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }

    span {
        color: ${props => props.theme['base-span']};
        font-size: .875rem;

        @media (max-width: 768px) {
            font-size: .7rem;
        }
    }
`;

export const PostCardContent = styled(ReactMarkdown)`
    color: ${props => props.theme['base-text']};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
   -webkit-line-clamp: 4; /* number of lines to show */
           line-clamp: 4; 
   -webkit-box-orient: vertical;
`;