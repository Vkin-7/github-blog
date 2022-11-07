import { GithubContext } from '@contexts/index';
import { useDebounce } from '@hooks/useDebounce';
import { ChangeEvent, useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { 
	SearchPostsContainer, 
	SearchPostsHeader, 
	SearchPostsInput
} from './styles';

// 1000 milliseconds equal 1 second
const DEBOUNCE_DURATION_IN_MILLISECONDS = 1000;

export function SearchPosts() {
	const { posts, loadPosts } = useContextSelector(GithubContext, context => {
		return {
			posts: context.posts,
			loadPosts: context.loadPosts
		};
	});

	const [query, setQuery] = useState('');
	const debouncedValue = useDebounce<string>(query, DEBOUNCE_DURATION_IN_MILLISECONDS);

	function handleSearchPost(e: ChangeEvent<HTMLInputElement>) {
		setQuery(e.target.value);
	}

	useEffect(() => {
		loadPosts(query);
	}, [debouncedValue]);

	return (
		<SearchPostsContainer>
			<SearchPostsHeader>
				<h1>Publicações</h1>
				<span>{posts.length} publicações</span>
			</SearchPostsHeader>

			<SearchPostsInput 
				type='text' 
				placeholder='Buscar conteúdo'
				onChange={handleSearchPost} 
			/>
		</SearchPostsContainer>
	);
}