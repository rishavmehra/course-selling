import { TextField } from '@mui/material';
import { Typography, Card, Button } from '@mui/material';
import { useState } from 'react';

function Signup() {
    const [ email, setEmail] = useState("")
    const [ password, setPassword] = useState("")

    return( <div>
        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: "flex",
            justifyContent: 'center'
        }}>
            <Typography variant={"h6"}>    
            Welcome to Coursera. Sign Up Below
            </Typography>
        </div>
        <div style={{display: "flex", justifyContent: "center"}} >
        <Card variant={"outlined"} style={{width: 500, padding: 30}} >
            <TextField 
                fullWidth={true}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                label="Email"
                variant='outlined'
            / >
                <br /> <br />
            <TextField 
                fullWidth={true}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                id="outlined-basic"
                label="Passoword"
                variant='outlined'
            / >
                <br /> <br /> 
            <Button 
            size='large'
            variant="contained"
            onClick={()=>{
                fetch("http://localhost:3001/admin/signup", {
                    method: "POST",
                    body: JSON.stringify({
                        username: email,
                        password: password
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                }).then(res=>{
                    res.json().then(data=>{
                        console.log(data.token);
                        localStorage.setItem("token", data.token);
                    })
                })
            }}
            >Signup</Button>
        </Card>
        </div>


    </div>)
}

export default  Signup;