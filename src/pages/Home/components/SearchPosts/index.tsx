import { 
	SearchPostsContainer, 
	SearchPostsHeader, 
	SearchPostsInput
} from './styles';

export function SearchPosts() {
	return (
		<SearchPostsContainer>
			<SearchPostsHeader>
				<h1>Publicações</h1>
				<span>6 publicações</span>
			</SearchPostsHeader>

			<SearchPostsInput type='text' placeholder='Buscar conteúdo' />
		</SearchPostsContainer>
	);
}