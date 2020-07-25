import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer uHE31orMevpzW9aqpb6kq8keqf317ZTis5Y94ks-2MDFK_P_HaL_5L3mipDc8ZJIE8TF2ccYdTSaxRWQAjhW8Tyh8HA5yN1qOSZpmguYGOh_VQ7Z8cji7iQiTpgPX3Yx',
  },
});
