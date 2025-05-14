import { createSlice, nanoid } from '@reduxjs/toolkit';

// Функция для получения ключа хранилища по роли
const getStorageKey = (role) => `reduxCourses_${role}`;

// Загрузка данных из localStorage с учетом роли
const loadCoursesFromLocalStorage = (role) => {
  try {
    const serializedState = localStorage.getItem(getStorageKey(role));
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Failed to load courses from localStorage', e);
    return undefined;
  }
};

// Сохранение данных в localStorage с учетом роли
const saveCoursesToLocalStorage = (state, role) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(getStorageKey(role), serializedState);
  } catch (e) {
    console.warn('Failed to save courses to localStorage', e);
  }
};

const initialState = (() => {
  const savedState = loadCoursesFromLocalStorage('teacher');
  if (!savedState) {
    const defaultState = {
      activeCourses: [
        {
          id: nanoid(),
          title: 'Основы алгоритмов',
          description: 'Изучение базовых алгоритмов и структур данных',
          group: 'АВТ-412',
          date: new Date(Date.now() + 3 * 86400000).toISOString(),
          place: 'Аудитория 7-201',
          status: 'active',
        },
        {
          id: nanoid(),
          title: 'Физика',
          description: 'Подготовка к кр',
          group: 'АВТ-412',
          date: new Date(Date.now() + 3 * 86400000).toISOString(),
          place: 'Аудитория 7-216',
          status: 'active',
        },
        {
          id: nanoid(),
          title: 'Программирование',
          description: 'Защита лабораторных работ',
          group: 'АВТ-412',
          date: new Date(Date.now() + 3 * 86400000).toISOString(),
          place: 'Аудитория 7-108',
          status: 'active',
        },
        {
          id: nanoid(),
          title: 'Мат. анализ',
          description: 'Подготовка к кр',
          group: 'АВТ-412',
          date: new Date(Date.now() + 3 * 86400000).toISOString(),
          place: 'Аудитория 7-219',
          status: 'active',
        },
      ],
      status: 'idle',
      error: null,
    };
    saveCoursesToLocalStorage(defaultState, 'teacher');
    return defaultState;
  }
  return savedState;
})();

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: {
      reducer: (state, action) => {
        state.activeCourses.push(action.payload.course);
        saveCoursesToLocalStorage(state, action.payload.role);
      },
      prepare: (course, role) => ({ payload: { course, role } }),
    },
    removeCourse: {
      reducer: (state, action) => {
        state.activeCourses = state.activeCourses.filter(
          (course) => course.id !== action.payload.courseId,
        );
        saveCoursesToLocalStorage(state, action.payload.role);
      },
      prepare: (courseId, role) => ({ payload: { courseId, role } }),
    },
    updateCourse: {
      reducer: (state, action) => {
        const index = state.activeCourses.findIndex(
          (course) => course.id === action.payload.course.id,
        );
        if (index !== -1) {
          state.activeCourses[index] = action.payload.course;
          saveCoursesToLocalStorage(state, action.payload.role);
        }
      },
      prepare: (course, role) => ({ payload: { course, role } }),
    },
    setCourses: {
      reducer: (state, action) => {
        state.activeCourses = action.payload.courses;
        saveCoursesToLocalStorage(state, action.payload.role);
      },
      prepare: (courses, role) => ({ payload: { courses, role } }),
    },
    loadCourses: {
      reducer: (state, action) => {
        const savedState = loadCoursesFromLocalStorage(action.payload);
        if (savedState) {
          return savedState;
        }
        return state;
      },
      prepare: (role) => ({ payload: role }),
    },
  },
});

export const { addCourse, removeCourse, updateCourse, setCourses, loadCourses } =
  coursesSlice.actions;

export default coursesSlice.reducer;
