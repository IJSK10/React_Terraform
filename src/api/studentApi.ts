import {type Student } from "../types";

import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const getStudents = async (): Promise<Student[]> => {
  try {
    const response = await axios.get<Student[]>(`${API_URL}/api/students`);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
}

export const getStudent = async (id: number): Promise<Student> => {
  try {
    const response = await axios.get<Student>(`${API_URL}/api/student/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching student with id ${id}:`, error);
    throw error;
  }
}

export const createStudent = async (student: Student): Promise<Student> => {
  try {
    const response = await axios.post<Student>(`${API_URL}/api/create`, student);
    return response.data;
  } catch (error) {
    console.error("Error creating student:", error);
    throw error;
  }
}

export const updateStudent = async (id: number, student: Student): Promise<Student> => {
  try {
    const response = await axios.put<Student>(`${API_URL}/api/update/${id}`, student);
    return response.data;
  } catch (error) {
    console.error(`Error updating student with id ${id}:`, error);
    throw error;
  }
}

export const deleteStudent = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/api/delete/${id}`);
  } catch (error) {
    console.error(`Error deleting student with id ${id}:`, error);
    throw error;
  }
}

