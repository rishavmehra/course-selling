import { Button, Card, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Courses() {
    
    const [ courses, setCourses ] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/admin/courses/", {
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
    }, [])

    return <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
    {courses.map(course=>{
        return <Course course={course}/>
    })}
    </div>
}

export function Course({course}){
    const navigate = useNavigate();

    return <Card style={{
        margin: 10,
        width: 200,
        minHeight: 200
    }}>
        <Typography textAlign={"center"} variant="h5">
        {course.title}
        </Typography>

        <Typography textAlign={"center"} variant="subtitle1">
        {course.description}
        </Typography>

        <img src={course.imageLink} style={{width: 300}}></img>

        <div style={{display: "flex", justifyContent: "center", marginTop: 20}}>
            <Button variant="contained" size="large" onClick={()=>{
                navigate("/course/"+course._id);
            }}>EDIT</Button>
       
        </div>


    </Card>
}


export default Courses;