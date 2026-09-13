import { use, useState } from "react";
import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import { brandGradientText } from "../constants/gradient";
import YourStack from "./YourStack";
import {toast} from "react-toastify";

interface TechnologyListProps {
    dataPromise: Promise<Technology[]>;
}

function TechnologyList({ dataPromise }: TechnologyListProps) {
    const technologies = use(dataPromise);

    // ===== State: which technology id is selected =====
    const [selectedIds, setSelectedIds] = useState<string[]>([]);

    // ===== Add to Stack handler =====
    function handleAdd(id: string) {
        if (selectedIds.includes(id)) {
            toast.warning("This technology is already in your stack.");
            return;
        }
        setSelectedIds([...selectedIds, id]);
        toast.success("Technology added to your stack!");
    }

    // ===== single item remove handler =====
    function handleRemove(id: string) {
        const remainingIds = selectedIds.filter((existingId) => existingId !== id);
        setSelectedIds(remainingIds);
        toast.warning("Technology removed from your stack.");
    }

    // ===== all item remove handler =====
    function handleRemoveAll() {
        setSelectedIds([]);
        toast.warning("All technologies removed from your stack.");
    }

    // ===== Finding technology from selected id =====
    const selectedTechnologies = technologies.filter((technology) =>
        selectedIds.includes(technology.id)
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <h2 className="text-xl sm:text-4xl text-center sm:text-start font-bold mb-2 text-gray-900">Explore <span className={`${brandGradientText}`}>The Technologies</span></h2>
            <p className="text-center sm:text-start text-gray-500 mb-8">Pick one category to build your ideal stack. </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* ===== Technology Cards ===== */}
                <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {technologies.map((technology) => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            isSelected={selectedIds.includes(technology.id)}
                            onAdd={handleAdd}
                        />
                    ))}
                </div>

                {/* ===== Your Stack Sidebar ===== */}
                <div className="lg:col-span-3">
                    <YourStack
                        technologies={selectedTechnologies}
                        onRemove={handleRemove}
                        onRemoveAll={handleRemoveAll}
                    />
                </div>
            </div>
        </div>
    );
}

export default TechnologyList;