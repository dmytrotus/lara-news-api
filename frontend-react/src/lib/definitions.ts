export type Article = {
    author: string;
    title: string;
    description: string;
    url: string;
    url_to_image: string;
    source: string;
};

export type UserLoginData = {
    email: string,
    password: string
};

export type UserRegisterData = {
    name: string,
    email: string,
    password: string,
    password_confirmation: string
};