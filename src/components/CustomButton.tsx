interface MyComponentProps {
     handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
     value : string;
   }

export const CustomButton: React.FC<MyComponentProps> = ({handleSubmit,value}) => (
    <button
            type="submit"
            onClick={(e) => {
                handleSubmit(e);
                console.log("Form submitted");
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
            {value}
            </button>
);