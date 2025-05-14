import React, { useState } from 'react';
import '../../scss/pages.scss';
import MainLayout from '../../layouts/MainLayout';
import { addCourse } from '../../redux/slices/coursesSlice';
import { useDispatch } from 'react-redux';
import CreateEventTeacher from '../../components/teacherComponents/CreateEventTeacher';
import { useSelector } from 'react-redux';
import CreateEventStudent from '../../components/studentComponents/CreateEventStudent';

const CreateEvent = () => {
  const { role } = useSelector((state) => state.user);
  return (
    <MainLayout>{role === 'teacher' ? <CreateEventTeacher /> : <CreateEventStudent />}</MainLayout>
  );
};

export default CreateEvent;
