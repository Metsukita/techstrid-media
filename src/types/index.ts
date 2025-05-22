// src/types/index.ts

// Define types and interfaces for the TechStride Media application

// Interface for a service offered by TechStride Media
export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string; // URL or path to the icon
}

// Interface for a portfolio project
export interface PortfolioProject {
    id: number;
    title: string;
    description: string;
    imageUrl: string; // URL or path to the project image
    link: string; // URL to the project
}

// Interface for a testimonial
export interface Testimonial {
    id: number;
    name: string;
    position: string; // Position of the person giving the testimonial
    company: string; // Company of the person giving the testimonial
    feedback: string; // The testimonial text
}

// Interface for contact form data
export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}