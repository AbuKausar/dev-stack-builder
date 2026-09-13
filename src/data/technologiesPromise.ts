import type { Technology } from "../types/technology";

const technologiesPromise = async (): Promise<Technology[]> => {
    const res = await fetch("/data/technologies.json");
    const data = await res.json();

    return data;
};

export default technologiesPromise;