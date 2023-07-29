import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from "react-router-dom";

function Appbar() {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] =useState(null);
    
    useEffect(()=>{
        function callback2(data){
            console.log(data);
            if(data.username){
                setUserEmail(data.username)
            }
        }

        function callback1(res){
            res.json().then(callback2)
        }
        fetch("http://localhost:3001/admin/me", {
            method: "GET", 
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, [])

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4
        }}>
            <div>
                <Typography variant={"h6"}>Coursera</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div>
                    {userEmail}
                </div>
                <div style={{marginRight: 10}}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            localStorage.setItem("token",  null)
                            window.location = "/"
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    }
    return <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4
    }}>
        <div>
            <Typography variant={"h6"}>Coursera</Typography>
        </div>

        <div style={{display: "flex"}}>
            <div style={{marginRight: 10}}>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        navigate("/signup")
                    }}
                >Signup</Button>
            </div>
            <div>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        navigate("/signin")
                    }}
                >Signin</Button>
            </div>
        </div>
    </div>
 }


export default Appbar;