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

export interface GithubProviderProps {
    children: React.ReactNode;
}

export interface GithubContextType {
    user: GithubUser;
}