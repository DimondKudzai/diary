
 import axios from 'axios';
 
 const api = axios.create({
 baseURL: 'http://localhost:3001/api',   // url must match backend
 });
 
 export const getAllDiaries = async () => {
 const response = await api.get('/all_diaries');
 return response.data;
 };
 
 export const getDiaryById = async (id) => {
 const response = await api.get(`/${id}`);
 return response.data;
 };
 
 export const createDiary = async (diary) => {
 const response = await api.post('/create', diary);
 return response.data;
 };
 
 export const updateDiary = async (id, diary) => {
 const response = await api.put(`/${id}`, diary);
 return response.data;
 };
 
 export const deleteDiary = async (id) => {
 await api.delete(`/${id}`);
 };
 