import axios from 'axios';
const url = 'https://ei-sgallery.herokuapp.com/api';



 export const getList =  async() => {

    await axios.get(url).then(res => {
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