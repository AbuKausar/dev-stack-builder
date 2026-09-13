import { use } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import { brandGradientText } from "../constants/gradient";

interface TechnologyListProps {
    dataPromise: Promise<Technology[]>;
}

function TechnologyList({ dataPromise }: TechnologyListProps) {
    const technologies = use(dataPromise);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-xl sm:text-4xl text-center sm:text-start font-bold mb-2 text-gray-900">Explore <span className={`${brandGradientText}`}>The Technologies</span></h2>
            <p className="text-center sm:text-start text-gray-500 mb-8">Pick one category to build your ideal stack. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((technology) => (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        isSelected={false}
                        onAdd={() => { }}
                    />
                ))}
            </div>
        </div>
    );
}

export default TechnologyList;