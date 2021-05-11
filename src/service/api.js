import axios from 'axios';
const KeyVagalume = 'd5fdcf1e79d66ef93411d9673bec9dea'
const KeyYoutube = 'AIzaSyAsiWCNK0DSAZeCnqM996uJwYwblk7Ehgo'
const {REACT_APP_API_URL} = process.env

const base = axios.create({
    baseURL: 'https://api.vagalume.com.br/',
    params:{
            apiKey:KeyVagalume
          } 
});

const secondURL = axios.create({
  baseURL: 'https://www.vagalume.com.br/',
  params:{
          apiKey:KeyVagalume
        } 
});

const seachVideoApi = axios.create({
  baseURL: 'https://www.googleapis.com/',
  params:{
          part:'snippet',
          key:KeyYoutube,
        } 
});

const backEnd = axios.create({
  baseURL: 'https://bdlouvor.herokuapp.com/'
});

export {
  base,
  secondURL,
  seachVideoApi,
  backEnd
};