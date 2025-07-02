import React from "react"
import {useState,useEffect} from "react";
import type { Student } from "../types/index";
import {getStudent} from "../api/studentApi";
import { LoadingSpinner } from "../components/Loading";
import { CustomButton } from "../components/CustomButton";
import { StudentCard } from "../components/StudentCard";
import { CustomNotification } from "../components/CustomNotification";

export const StudentByIdPage: React.FC = () => {

    const [firstRead, setFirstRead] = useState(false);
    const [student, setStudent] = useState<Student | null>(null);
    const [id, setId] = useState(0);
    
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 3000);
        
            return () => clearTimeout(timer);
        }
    }, [notification]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setIsLoading(true);



        try {
            const studentread : Student  = await getStudent(id);
            setStudent(studentread);
            setFirstRead(true);
            setId(0);

        } catch (error) {
            console.error("Failed to read student:", error);
            setNotification({ message: "Error: Could not read student.", type: 'error' });
        }
        finally {
            setIsLoading(false);
        }
    };

    
  return (
    <div className="flex flex-col items-center min-h-screen text-white">
        {notification && <CustomNotification message={notification.message} type={notification.type} />}
      <h1 className="text-4xl font-bold mb-4 pb-10">Read a Student Record</h1>
      
        <form className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
            <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="id">Student ID</label>
            <input
                type="text"
                id="id"
                className="w-full p-2 bg-gray-700 text-white rounded"
                placeholder="Enter student id"
                onChange={(e) => setId(Number(e.target.value))}
            />
            </div>
            

            {!isLoading ? <CustomButton handleSubmit={handleSubmit} value="Read a Student"/>
             : <LoadingSpinner/>}
            
        </form>


      <p className="mt-4 text-gray-400">Fill out the form to read a student record.</p>
      
        {firstRead && student && (
            <StudentCard key={student.id} student={student} />
        )}
    </div>
  );
}