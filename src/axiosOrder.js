import Axios from "axios";

const axiosOrder = Axios.create({
  baseURL: "https://js7-exam9.firebaseio.com/",
});
export default axiosOrder;
