export interface Project {
    name: string;
    description: string;
    image: string;
    image1?: string;
    image2?: string;
    category: string; // Changed from strict union type to string
    link?: string;
    links: {
        view: string;
        code: string;
    };
}

export interface Experience {
    company: string;
    role: string;
    duration: string;  
    description?: string;
    overview: string;
}

export interface ExperienceWithSide extends Experience{
    side: 'left' | 'right';
}