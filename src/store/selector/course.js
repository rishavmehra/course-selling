import { selector } from "recoil";
import { courseState } from "../atoms/course";



export const isCourseLoading = selector({
    key: "isCourseLoadingState",
    get: ({get})=>{
        const state = get(courseState);
        
        return state.isLoading;

    },
})

export const courseDetails = selector({
    key: "courseDetailsState",
    get: ({get})=>{
        const state = get(courseState);
        if(state.course){
            return state.course;
        }
        return ""
    },
})

export const courseTitle = selector({
    key: "courseTitleState",
    get: ({get})=>{
        const state = get(courseState);
        if(state.course){
            return state.course.title;
        }
        return ""
    },
})

export const coursePrice = selector({
    key: "coursePriceState",
    get: ({get})=>{
        const state = get(courseState);

        if (state.course) {
            return state.course.price;
        } else {
            return ""
        }

    },
})


export const courseImage = selector({
    key: "courseImageState",
    get: ({get})=>{
        const state = get(courseState);
        
        if (state.course) {
            return state.course.imageLink;
        } else {
            return ""
        }
    },
})
