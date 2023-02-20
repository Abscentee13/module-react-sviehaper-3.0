import {axiosService} from "./axiosService";
import {baseURL, urls} from "../configs/urls";

const genreService = {
    getAll:()=>axiosService.get(baseURL + urls.genres)

}
console.log(baseURL + urls.genres);
export {
    genreService
}