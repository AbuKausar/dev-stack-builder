import type { Technology } from "../types/technology";

interface StackItemProps {
    technology: Technology;
    onRemove: (id: string) => void;
}

function StackItem({ technology, onRemove }: StackItemProps) {
    return (
        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-3">
                <img src={technology.icon} alt={technology.name} className="w-6 h-6" />
                <div>
                    <p className="text-sm font-medium text-gray-900">{technology.name}</p>
                    <p className="text-xs text-gray-400">{technology.category}</p>
                </div>
            </div>

            <button onClick={() => onRemove(technology.id)} aria-label={`Remove ${technology.name}`}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-400 hover:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}

export default StackItem;