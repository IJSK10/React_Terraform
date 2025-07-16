import React, { useState, useEffect } from 'react'; 
import { StudentCard } from '../components/StudentCard';
import type { Student } from '../types/index';
import { getStudents } from '../api/studentApi';
import { LoadingSpinner } from '../components/Loading';
import { ErrorDisplay } from '../components/ErrorMessage';


//
export const AllStudentsPage:React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

     useEffect(() => {
        const fetchAllStudents = async () => {
            try {
                setIsLoading(true); 
                const fetchedStudents = await getStudents();
                setStudents(fetchedStudents); 
                setError(null); 
            } catch (err) {
                
                setError("Failed to fetch student data. Please try again later.");
                console.error(err);
            } finally {
                
                setIsLoading(false);
            }
        };

        fetchAllStudents(); 

    }, []);

     if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorDisplay message={error} />;
    }


    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-white mb-6 text-center"> ALL STUDENTS DETAILS</h1>
            <div className="space-y-4 max-w-2xl mx-auto">
                {students.map(student => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
};