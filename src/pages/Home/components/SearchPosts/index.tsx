import { GithubContext } from '@contexts/index';
import { useContextSelector } from 'use-context-selector';
import { 
	SearchPostsContainer, 
	SearchPostsHeader, 
	SearchPostsInput
} from './styles';

export function SearchPosts() {
	const { posts, loadPosts } = useContextSelector(GithubContext, context => {
		return {
			posts: context.posts,
			loadPosts: context.loadPosts
		};
	});

	return (
		<SearchPostsContainer>
			<SearchPostsHeader>
				<h1>Publicações</h1>
				<span>{posts.length} publicações</span>
			</SearchPostsHeader>

			<SearchPostsInput type='text' placeholder='Buscar conteúdo' />
		</SearchPostsContainer>
	);
}