import { brandGradient } from "../constants/gradient";
import { brandColors } from "../constants/brandColors";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
    technology: Technology;
    isSelected: boolean;
    onAdd: (id: string) => void;
}

function TechnologyCard({ technology, isSelected, onAdd }: TechnologyCardProps) {
    const badgeColor = brandColors[technology.id] || "#374151";

    return (
        <div
            className={`bg-white rounded-2xl shadow-md p-5 border-2 transition-all duration-200 ${isSelected ? "border-violet-500 shadow-lg shadow-violet-100" : "border-transparent"
                }`}
        >
            {/* ===== icon, name, badge ===== */}
            <div className="flex items-center sm:items-start justify-between mb-4">
                <div className="flex sm:flex-col items-center sm:items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                        <img src={technology.icon} alt={technology.name} className="w-7 h-7" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">{technology.name}</h3>
                </div>
                <span
                    className="border rounded-full px-3 py-1 text-xs font-medium"
                    style={{ color: badgeColor, borderColor: badgeColor }}
                >
                    {technology.badge}
                </span>
            </div>

            {/* ===== Description ===== */}
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {technology.description}
            </p>

            {/* ===== Category chip + Difficulty + Rating ===== */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
                <span className="bg-gray-100 text-gray-600 rounded-full px-3 py-1">
                    {technology.category}
                </span>
                <span>{technology.difficulty}</span>
                <span> <span className="text-amber-500">★</span> {technology.rating}</span>
            </div>

            {/* ===== Add to Stack Button ===== */}
            <button
                disabled={isSelected}
                onClick={() => onAdd(technology.id)}
                className={`w-full mt-4 h-11 rounded-xl text-sm font-medium ${isSelected
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : `${brandGradient} text-white`
                    }`}
            >
                {isSelected ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
}

export default TechnologyCard;