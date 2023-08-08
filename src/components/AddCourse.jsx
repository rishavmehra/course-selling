import { Button, Card, TextField } from "@mui/material"
import { useState } from 'react';
import axios from "axios";


function AddCourse() {

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ image, setImage ] = useState("")
    const [ price, setPrice ] = useState("")

    return <>
    <div style={{display: "flex", justifyContent: "center"}} >
        <Card variant={"outlined"} style={{width: 500, padding: 30}} >
            <TextField 
                style={{marginBottom:10}}
                fullWidth={true}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                label="Title"
                variant='outlined'
            / >

            
            <TextField 
                style={{marginBottom:10}}
                fullWidth={true}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                label="Description"
                variant='outlined'
            / >
                
            <TextField
                style={{marginBottom:10}}
                fullWidth={true}
                onChange={(e)=>{
                    setImage(e.target.value)
                }}
                label="Image Link"
                variant='outlined'
            / >

            <TextField
                style={{marginBottom:10}}
                fullWidth={true}
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}
                label="Price"
                variant='outlined'
            / >

            
        <Button 
            size={"large"}
            variant="contained"
            onClick={async()=>{
                await axios.post("http://localhost:3001/admin/courses", {
                        title: title,
                        description: description,
                        imageLink: image,
                        published: true,
                        price
                }, {
                    headers: {
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
                });
                alert("Course Added")
            }}
            >Add Course</Button>
        </Card>
    </div>
</>
}
1
export default AddCourse;
