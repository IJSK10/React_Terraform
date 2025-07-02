import React from "react"
import {useState,useEffect} from "react";
import type { Student } from "../types/index";
import {updateStudent} from "../api/studentApi";
import { LoadingSpinner } from "../components/Loading";
import { CustomButton } from "../components/CustomButton";
import { CustomNotification } from "../components/CustomNotification";

export const UpdateStudentPage: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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

        const student: Student = {
            id: id,
            username: name,
            email: email,
            password: password
        };



        try {
            const newStudentResponse = await updateStudent(student.id,student);
            
            setNotification({ message: `Student updated with ID: ${newStudentResponse.id}`, type: 'success' });

            setId(0);
            setName("");
            setEmail("");
            setPassword("");

        } catch (error) {
            console.error("Failed to update student:", error);
            setNotification({ message: "Error: Could not update student.", type: 'error' });
        }
        finally {
            setIsLoading(false);
        }
    };

    
  return (
    <div className="flex flex-col items-center min-h-screen text-white">
        {notification && <CustomNotification message={notification.message} type={notification.type} />}
      <h1 className="text-4xl font-bold mb-4 pb-10">Update a Student Record</h1>
      
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
            <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                className="w-full p-2 bg-gray-700 text-white rounded"
                placeholder="Enter student name"
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input
                type="text"
                id="email"
                className="w-full p-2 bg-gray-700 text-white rounded"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="password">Password</label>
            <input
                type="password"
                id="Password"
                className="w-full p-2 bg-gray-700 text-white rounded"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>

            {!isLoading ? <CustomButton handleSubmit={handleSubmit} value="Update a student"/>
             : <LoadingSpinner/>}
            
        </form>
      <p className="mt-4 text-gray-400">Fill out the form to update a student record.</p>
    </div>
  );
}