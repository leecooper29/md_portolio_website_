import image1 from "../assets/Screenshot 2025-08-17 at 3.46.00 PM.png";
import image2 from "../assets/Screenshot 2025-08-17 at 3.50.20 PM.png";
import image3 from "../assets/Screenshot 2025-08-17 at 5.59.35 PM.png";

export interface Project {
    title: string;
    description: string;
    stack?: string;
    image?: string;
    placeholder?: boolean;
}

export const projects: Project[] = [
    {
        title: "Simple Portfolio Website",
        description: "simple yet professional portfolio site (content subject to change)",
        stack: "Vite, React, TypeScript, and Sass",
        image: image3,
    },
    {
        title: "Uconn Student Network",
        description: "full stack appliaction built for uconn students to network with eachother and filter through students base on their major",
        stack: "React, Springboot, PostgresSQL",
        placeholder: true,
    },
    {
        title: "Multi Step Form",
        description: "advanced challenge in html, css, and javascript",
        image: image1,
    },
    {
        title: "Ecommerce Product Page",
        description: "intermediate challenge in html, css, and javascript",
        image: image2,
    },
    {
        title: "Ecommerce Course Shop",
        description: "ecommerce store that provides courses that teach about the skills you wont learn in college",
        stack: "Vite, React, TypeScript, and Sass",
        placeholder: true,
    },
    {
        title: "Workout Tracker (App)",
        description: "Description coming soon",
        placeholder: true,
    },
    {
        title: "Angular Real Estate website",
        description: "Angular real estate website similar to Realtor.com. Used to practice TypeScript and complex UI/UX design concepts.",
        stack: "Angular",
        placeholder: true,
    },
];
