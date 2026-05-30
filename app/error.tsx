"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
            <h1>Algo salió mal</h1>

            <button onClick={() => reset()}>
                Reintentar
            </button>
        </div>
    );
}