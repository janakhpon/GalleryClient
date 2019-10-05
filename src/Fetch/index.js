const url = 'http://localhost:5000/api';


export const getDataList = async () => {
    return fetch(url+'/list', {})
    .then(res => res.json() )
    .then(data => {
      return data
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

 export const getNotes = async () => {
    return fetch(url, {})
    .then(res => res.json() )
    .then(data => {
      return data
    });
  }
  
  
  
  
  export const addNote = (note) => {
    fetch(url, {
      method: 'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(note)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    });
  
    return note;
  }
  
  
  export const updateNote = (note, id) => {
    fetch(url+id+'/', {
      method: 'PUT',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(note)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    });
  
    return note;
  }
  
  
  export const delNote = (id) => {
    fetch(url+id+'/', {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    });
  
  }