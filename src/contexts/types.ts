import React from 'react';


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

export interface GithubProviderProps {
    children: React.ReactNode;
}

export interface GithubContextType {
    user: GithubUser | undefined;
	posts: Post[];
	selectedPost: Post | undefined;
	selectedPostNumber: number | null;
	loadPosts: (q?: string) => void;
	selectPost: (id: number) => void;
}