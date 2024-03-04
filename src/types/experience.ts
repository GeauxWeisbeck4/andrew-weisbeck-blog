import type { Technology } from "./technology";

export type Experience = {
    title: string;
    time: [start: Date, end: Date | null];
    company: string;
    tasks: [];
    images: [];
    technologies: Technology[];
    type: "freelance" | "full-time";
}
