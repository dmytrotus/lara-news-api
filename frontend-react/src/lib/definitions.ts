export type Article = {
    author: string;
    title: string;
    description: string;
    url: string;
    url_to_image: string;
    source: string;
};

export type UserData = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
};