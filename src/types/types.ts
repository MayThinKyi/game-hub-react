export type GameQuery={
    searchTerm?:string;
    genre?:string;
    platformId?:number;
    platformName?:string;
    sort?:string;
}

export type Genre={
    id:number;
    name:string;
    slug:string;
    image_background:string;
}

export type Platform={
    id:number;
    name:string;
    slug:string;
}

export type Game={
    id:number;
    name:string;
    slug:string;
    background_image:string;
    rating:number;
    rating_top:number;
    metacritic:number;
    parent_platforms:[ {platform:Platform}];
    genres:Genre[];
}

export type AxiosDataResponse<T>={
    count:number;
    results:T[];
}