import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Appbar from "./components/Appbar.jsx";
import AddCourse from "./components/AddCourse.jsx";
import Courses from "./components/Courses";
import Course from "./components/Course";
import {Landing} from "./components/Landing.jsx";
import {useState, useEffect} from "react";
import axios from "axios";
import { RecoilRoot, useSetRecoilState } from 'recoil';
import {BASE_URL} from "./config.js";
import { userState } from './store/atoms/user.js';

function App() {
    
    return (
        <div style={{width: "100vw",
            height: "100vh",
            backgroundColor: "#c2c2c2"}}
        >   
            <RecoilRoot>
                    <Router>
                        <Appbar />
                        <InitUser />
                        <Routes>
                            <Route path={"/addcourse"} element={<AddCourse />} />
                            <Route path={"/course/:courseId"} element={<Course />} />
                            <Route path={"/courses"} element={<Courses />} />
                            <Route path={"/signin"} element={<Signin />} />
                            <Route path={"/signup"} element={<Signup />} />
                            <Route path={"/"} element={<Landing />} />
                        </Routes>
                    </Router>
            </RecoilRoot>

        </div>
    );
}

function InitUser(){
    const setUser = useSetRecoilState(userState);
    const init = async() =>{
        try{
            const response = await axios.get(`${BASE_URL}/admin/me`,{
                hearders: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            if(response.data.username){
                setUser({
                    isLoading: false,
                    userEmail: response.data.username
                })
            }else{
                setUser({
                    isLoading: false,
                    userEmail: null
                })
            }
        }catch(e){
            setUser({
                isLoading: false,
                userEmail: null
            })
        }
    };

    useEffect(()=>{
        init();
    }, [])
}

export default App;