import { Button, Card, TextField } from "@mui/material"
import { useState } from 'react';

function AddCourse() {

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ image, setImage ] = useState("")
    return <>
    
    <div style={{display: "flex", justifyContent: "center"}} >
        <Card variant={"outlined"} style={{width: 500, padding: 30}} >
            <TextField 
                fullWidth={true}
                id="outlined-basic"
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                label="title"
                variant='outlined'
            / >

            <br /> <br />
            <TextField 
                fullWidth={true}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                id="outlined-basic"
                label="description"
                variant='outlined'
            / >
                <br /> <br />
            <TextField 
                fullWidth={true}
                onChange={(e)=>{
                    setImage(e.target.value)
                }}
                id="outlined-basic"
                label="Image Link"
                variant='outlined'
            / >
            <br /> <br />
        <Button 
            size={"large"}
            variant="contained"
            onClick={()=>{
                fetch("http://localhost:3001/admin/courses", {
                    method: "POST",
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
                }).then(res=>{
                    res.json().then(data=>{
                        alert("New course is Added")
                    })
                })
            }}
            >Add Course</Button>
        </Card>
    </div>
</>
}

export default AddCourse;
