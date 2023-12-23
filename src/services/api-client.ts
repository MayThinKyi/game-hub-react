import axios, { AxiosRequestConfig } from "axios";
import { AxiosDataResponse } from "../types/types";

const axiosInstance=axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2e8fa5a4ec4c4937ac9cdf4092df3f66'
    }
});

export class ApiClient<T>{
    endpoint:string;
    constructor(endpoint:string){
        this.endpoint=endpoint;
    };
    getAll=async (config?:AxiosRequestConfig)=>{
        const res = await axiosInstance.get<AxiosDataResponse<T>>(this.endpoint,{...config});
        const data = res.data;
        return data.results;
     };
    get=async ()=>{
        const res = await axiosInstance.get<T>(this.endpoint);
        const data = res.data;
        return data;
     };
}