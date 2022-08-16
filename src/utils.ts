import { newDiaryEntry, Visibility, Weather } from "./types";

const parseComment = (commentFromRequest: any): string => {
    if( isString(commentFromRequest) ){
        throw new Error('Incorrect or missing comment')
    }

    return commentFromRequest
}

const parseDate = (DateFromRequest: any): string =>{
    if(!isString(DateFromRequest) || !isDate(DateFromRequest)){
        throw new Error('Incorrect or missing date')
    }
    return DateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather =>{
    if(!isString(weatherFromRequest) || !isWeather(weatherFromRequest)){
        throw new Error('Incorrect or missing weather')
    }
    return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if(!isString(visibilityFromRequest)|| !isVisibility(visibilityFromRequest)){
        throw new Error('Incorrect or missing visibility') 
    }
    return visibilityFromRequest
}

const isVisibility = (param: any): boolean =>{
    return Object.values(Visibility).includes(param)
}

const isWeather = (param: any): boolean =>{
    return Object.values(Weather).includes(param)
}

const isString = (string : string) : boolean =>{
    return typeof string === 'string'
    }

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntry: newDiaryEntry = {
    
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)

    }
    return newEntry;
}
export default toNewDiaryEntry