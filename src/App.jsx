import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import New from './pages/New';
import Home from './pages/Home';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import Edit from './pages/Edit.jsx';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "1번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "1번 일기 내용",
  },
]

function reducer(state, action) {
  return state;
}

function App() {

  const [data, dispatch] = useReducer(reducer, mockData);

  return (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<New />} />
      <Route path='/diary/:id' element={<Diary />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </>
  );
}

export default App

/**
 * 1. "/": 모든 일기를 조회하는 HOME 페이지
 * 2. "/new": 새로운 일기를 작성하는 NEW 페이지
 * 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
 * 
 */