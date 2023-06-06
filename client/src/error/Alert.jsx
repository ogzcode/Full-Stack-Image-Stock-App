import { useAuth } from "../auth/core/Auth";

export default function Alert() {
    const { error } = useAuth();

    return (
        <div className="absolute top-10 w-auto py-2 px-4 rounded-lg border border-red-400 left-1/2 bg-red-100 -translate-x-1/2">
            <p className="text-red-700 font-medium">{ error }</p>
        </div>
    );
}