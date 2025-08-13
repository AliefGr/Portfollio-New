

export interface Project {
    id: string;
    title: string;
    description: string;
    github: string;
    view: string;
    stack?: string | string[];
    image: {
        url: string;
    }[];
};