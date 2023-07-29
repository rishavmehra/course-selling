import { Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Course() {
    let {courseId} = useParams();

    const [ courses, setCourses ] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/admin/courses", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(res=>{
            res.json().then(data=>{
                // console.log(data);
                setCourses(data.courses);
            })
        })
    }, [])
    
    const course = courses.find(course => course._id == courseId) || null;

    // let course = null;
    // for (let i = 0; i < courses.length; i++) {
    //     if(courses[i]._id===courseId)[
    //         course = courses[i]
    //     ]
    // }

    if(!course){
        return <>
        Loading....
        </>
    }

    return <div style={{display: "flex", justifyContent: "center"}}>
        <CourseCard course={course} />
        <UpdateCard courses={courses} course={course} setCourses={setCourses} />
    </div>

    function UpdateCard(props){
        const [ title, setTitle ] = useState("")
        const [ description, setDescription ] = useState("")
        const [ image, setImage ] = useState("")
        const course = props.course
        return <>
        <div style={{display: "flex", justifyContent: "center"}} >
            <Card variant={"outlined"} style={{width: 500, padding: 20}} >
            <Typography>Update Course details</Typography>
                <TextField 
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    fullWidth={true}
                    label="title"
                    variant='outlined'
                / >

                <br /> <br />
                <TextField 
                    fullWidth={true}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    label="description"
                    variant='outlined'
                / >

                <br /> <br />
                <TextField 
                    fullWidth={true}
                    onChange={(e)=>{
                        setImage(e.target.value)
                    }}
                    label="Image Link"
                    variant='outlined'
                / >
                <br /> <br /> 
                
        <Button 
            size={"large"}
            variant="contained"
            onClick={()=>{
                fetch("http://localhost:3001/admin/courses/" + course._id, {
                    method: "PUT",
                    body: JSON.stringify({
                        title: title,
                        description: description,
                        imageLink: image,
                        published: true
                    }),
                    headers: {
                        "Content-type": "application/json", 
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                }).then((res)=>{
                    res.json().then(()=>{
                        // alert("Course is updated");
                        let updatedCourse = [];
                        for(let i =0; i<props.courses.length;i++){
                            if(props.courses[i]._id == course._id){
                                updatedCourse.push({
                                   _id: course._id,
                                    title: title,
                                    description: description,
                                    imageLink: image
                                })
                            }else{updatedCourse.push(props.courses[i])}
                        }
                        props.setCourses(updatedCourse)

                    })
                })
            }}
            >Add Course
        </Button>
        </Card>
    </div>
    </>
}

    function CourseCard(props){
        const course = props.course;
        return <div style={{display: "flex", justifyContent: "center"}}>
            <Card style={{
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
            </Card>
        </div> 
    }
}

export default Course;