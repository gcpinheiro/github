export interface User {
    login?: string;
    id?: number;
    avatar_url?: string;
    url?: string;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string;
    bio?: string;
    public_repos?: number;
    public_gists?: number;
    followers?: number;
    following?: number;
    created_at?: string;
    updated_at?: string;
}

export interface ResultsUsers {
  results: User[]
}
