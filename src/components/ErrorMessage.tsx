export const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="bg-red-500 text-white p-4 rounded-lg text-center">
        <p className="font-bold">An Error Occurred</p>
        <p>{message}</p>
    </div>
);