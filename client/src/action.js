import * as actions from './actiontypes'
import { Wildlifeapi } from './assets/api'
import { Blogapi } from './assets/api'
import { Programapi } from './assets/api'

export const getWildlife = () => {
    return async (dispatch) => {
        const url = Wildlifeapi;

        try {
            const response = await fetch(url);
            const result = await response.json();
            // console.log(result)
            dispatch(
                ((animal) => {
                    return {
                        type: actions.GET_WILDLIFE,
                        payload: animal,
                    }
                })(result)
            )
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getprograms = () => {
    return async (dispatch) => {
        const url = Programapi;

        try {
            const response = await fetch(url);
            const result = await response.json();
            // console.log(result)
            dispatch(
                ((program) => {
                    return {
                        type: actions.GET_PROGRAMS,
                        payload: program,
                    }
                })(result)
            )
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const getblogs = () => {
    return async (dispatch) => {
        const url = Blogapi;

        try {
            const response = await fetch(url);
            const result = await response.json();
            // console.log(result)
            dispatch(
                ((blog) => {
                    return {
                        type: actions.GET_BLOG,
                        payload: blog,
                    }
                })(result)
            )
        }
        catch (error) {
            console.log(error)
        }
    }
}  
