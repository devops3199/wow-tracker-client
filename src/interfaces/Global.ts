export interface Record {
    begin_time : string,
    end_time : string,
    date : string,
    dun : number,
    raid : number,
}

export interface Records {
    RecordsArr : Record[],
    title : string,
}