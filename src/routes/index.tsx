import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CreatePage } from "../pages/CreatePage";
import { AllStudentsPage } from "../pages/AllStudents";
import { StudentByIdPage } from "../pages/StudentById";
import { DeleteStudent } from "../pages/DeleteStudent";
import { UpdateStudentPage } from "../pages/UpdateStudent";


export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/students" element={<AllStudentsPage />} />
      <Route path="/studentById" element={<StudentByIdPage />} />
      <Route path="/updateById" element={<UpdateStudentPage />} />
      <Route path="/deleteStudent" element={<DeleteStudent />} />
    </Routes>
  );
};