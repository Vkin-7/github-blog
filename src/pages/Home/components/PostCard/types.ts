import { LinkProps } from 'react-router-dom';

export interface GithubUser {
	name: string;
	login: string;
	avatar_url: string;
	html_url: string;
	followers: number;
	company?: string;
	bio?: string;
}

export interface Post {
	id: number;
	title: string;
	number: number;
	html_url: string;
	body: string;
	user: GithubUser;
	comments: number;
	created_at: Date;
}

export interface PostCardProps extends LinkProps {
    post: Post;
}