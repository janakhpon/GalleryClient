import axios from 'axios';
const url = 'http://localhost:5000/api';


export const getDataList = async () => {
    return fetch(url+'/list', {})
    .then(res => res.json() )
    .then(data => {
      return data
    });
  }
  

  

 export const getList =  async() => {

    await axios.get(`http://localhost:5000/api/list`).then(res => {
        return res.data;
    })
      .catch(err => {
          alert(err);
      })
      .finally(()=>{

      });    
 }


 export const getByType = () => {

 }


 export const getByTypeValue = () => {

 }


 export const getByKeyword = () => {

 }


 export const getByKeywordValue = () => {

 }


 export const updateByID = () => {

 }


 export const postData = () => {

 }


 export const deleteByID = () => {

 }