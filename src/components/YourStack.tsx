import type { Technology } from "../types/technology";
import StackItems from "./StackItems";

interface YourStackProps {
    technologies: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

function YourStack({ technologies, onRemove, onRemoveAll }: YourStackProps) {
    const hasSelected = technologies.length > 0;

    return (
        <div className="sticky top-24 bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-lg font-semibold text-gray-900">Your Stack</h3>

            <p className="text-sm text-gray-500 mt-2">
                {hasSelected ? `${technologies.length} Technology Selected` : "No technologies selected yet."}
            </p>

            {!hasSelected && (
                <div className="bg-gray-50 rounded-xl p-5 mt-4 text-center text-sm text-gray-400">
                    Add technologies to see them here.
                </div>
            )}

            {hasSelected && (
                <div className="flex flex-col gap-3 mt-4">
                    {technologies.map((technology) => (
                        <StackItems key={technology.id} technology={technology} onRemove={onRemove} />
                    ))}
                </div>
            )}

            {hasSelected && (
                <button
                    onClick={onRemoveAll}
                    className="w-full mt-5 h-10 rounded-full border border-red-400 text-sm font-bold text-red-500 hover:bg-red-100"
                >
                    Remove All
                </button>
            )}
        </div>
    );
}

export default YourStack;