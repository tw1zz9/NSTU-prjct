import { createSlice, nanoid } from '@reduxjs/toolkit';

// Функции для работы с localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxApplications');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Failed to load applications from localStorage', e);
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxApplications', serializedState);
  } catch (e) {
    console.warn('Failed to save applications to localStorage', e);
  }
};

// Начальное состояние (загружаем из localStorage если есть)
const initialState = (() => {
  const savedState = loadFromLocalStorage();
  if (!savedState) {
    const defaultState = {
      items: [
        {
          id: nanoid(),
          title: 'Введение в программирование',
          description: 'Базовый курс по основам программирования на Python',
          group: 'АВТ-412',
          date: new Date(Date.now() + 86400000).toISOString(),
          status: 'pending',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: nanoid(),
          title: 'Диск. математика',
          description: 'Консультация перед экзаменом',
          group: 'АВТ-412',
          date: new Date(Date.now() + 86400000).toISOString(),
          status: 'pending',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: nanoid(),
          title: 'ТВиМС',
          description: 'Изучение C#',
          group: 'АВТ-412',
          date: new Date(Date.now() + 86400000).toISOString(),
          status: 'pending',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: nanoid(),
          title: 'Иностранный язык',
          description: 'Сдача долгов',
          group: 'АВТ-412',
          date: new Date(Date.now() + 86400000).toISOString(),
          status: 'pending',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
      status: 'idle',
      error: null,
      lastUpdated: new Date().toISOString(),
    };
    saveToLocalStorage(defaultState);
    return defaultState;
  }
  return savedState;
})();

const applicationsSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    addApplication: {
      reducer(state, action) {
        state.items.push(action.payload);
        state.lastUpdated = new Date().toISOString();
        saveToLocalStorage(state);
      },
      prepare(payload) {
        return {
          payload: {
            ...payload,
            id: nanoid(),
            status: 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
        };
      },
    },
    removeApplication: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((app) => app.id !== id);
      state.lastUpdated = new Date().toISOString();
      saveToLocalStorage(state);
    },
    acceptApplication: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((app) => app.id === id);

      if (index !== -1) {
        state.items[index].status = 'accepted';
        state.items[index].updatedAt = new Date().toISOString();
        saveToLocalStorage(state);
      }
    },

    rejectApplication: (state, action) => {
      const id = action.payload; // просто id
      const index = state.items.findIndex((app) => app.id === id);
      if (index !== -1) {
        state.items[index] = {
          ...state.items[index],
          status: 'rejected',
          updatedAt: new Date().toISOString(),
        };
        state.lastUpdated = new Date().toISOString();
        saveToLocalStorage(state);
      }
    },
    // Загрузка сохраненных данных
    loadApplications: (state) => {
      const savedState = loadFromLocalStorage();
      if (savedState) {
        return savedState;
      }
    },
  },
});

export const {
  addApplication,
  acceptApplication,
  rejectApplication,
  loadApplications,
  removeApplication,
} = applicationsSlice.actions;

// Middleware для автосохранения (опционально)
export const applicationsMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith('applications/')) {
    saveToLocalStorage(store.getState().applications);
  }
  return result;
};

export default applicationsSlice.reducer;
