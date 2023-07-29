import { Card, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";

function Courses() {
    
    const [ courses, setCourses ] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/admin/courses/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(res=>{
            res.json().then(data=>{
                console.log(data);
                setCourses(data.courses);
            })
        })
    })

    return <div style={{display: "flex"}}>
    {courses.map(course=>{
        return <Course course={course}/>
    })}
    </div>
}

export function Course(props){
    return <Card style={{
        margin: 10,
        width: 200,
        minHeight: 200
    }}>
        <Typography textAlign={"center"} variant="h5">
        {props.course.title}
        </Typography>

        <Typography textAlign={"center"} variant="subtitle1">
        {props.course.description}
        </Typography>

        <img src={props.course.imageLink} style={{width: 300}}></img>
    </Card>
}


export default Courses;