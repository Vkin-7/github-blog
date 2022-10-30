import { 
	PostCardContainer, 
	PostCardContent, 
	PostCardHeader 
} from './styles';

export function PostCard() {
	return (
		<PostCardContainer>
			<PostCardHeader>
				<h3>Título</h3>
				<span>Há 1 dia</span>
			</PostCardHeader>

			<PostCardContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestias sapiente porro officiis consectetur voluptas, sequi deleniti, 
                eius ullam esse fugit sint odit molestiae iure quis iusto incidunt voluptatem? Alias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugiat nemo adipisci ipsum quibusdam voluptatem quas ipsa harum. 
                Voluptatum ab placeat repudiandae commodi dolore omnis velit, quam veritatis illo non!
			</PostCardContent>
		</PostCardContainer>
	);
}