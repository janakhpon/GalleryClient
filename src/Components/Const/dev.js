export const tagclasses = ['badge badge-pill badge-primary', 'badge badge-pill badge-secondary', 'badge badge-pill badge-success', 'badge badge-pill badge-danger', 'badge badge-pill badge-warning', 'badge badge-pill badge-info', 'badge badge-pill badge-light', 'badge badge-pill badge-dark'];
export const typeclasses = ["badge badge-primary", "badge badge-secondary", "badge badge-success", "badge badge-danger", "badge badge-warning", "badge badge-info", "badge badge-light", "badge badge-dark"];

export const URL = 'http://localhost:5000/';
// export const URL = 'https://galleryserver.herokuapp.com/'

export const GALARIE_API_URL = `${URL}galarieapi`
export const USER_API_URL = `${URL}userapi`
export const PROFILE_API_URL = `${URL}profileapi`
export const TYPE_API_URL = `${URL}typeapi`
export const TAG_API_URL = `${URL}tagapi`
export const DEVICE_API_URL = `${URL}deviceapi`


export let getID = () => {
    return Math.floor((Math.random() * 7) + 1);
}


export default {
    typeclasses,
    tagclasses
}
