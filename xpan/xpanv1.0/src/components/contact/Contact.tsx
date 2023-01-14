import { Button, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import Styles from "./Contact.module.scss";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Image from 'next/image';

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [userDetails, setUserdetails] = useState({
    name:"",
    email:"",
    message:""
  });

const submit = async (e:any)=>{
  e.preventDefault();
  setLoading(true)
  try {
    const config: AxiosRequestConfig = {
      url: `/api/contact`,
      method: "POST",
      data: userDetails,
    };
    const res = await axios.request(config);
    if (res.data.success){
      alert("Thank you for your submission, your message has been sent successfully !")
    } else {
      alert("Oops, something went wrong !")
    }
  } catch (error) {
    console.log(error);
  } 
  setLoading(false)
}

  return (
    <section className={Styles.contact}>
        <br/>
        <h1>Contact Us</h1>
    <div className={Styles.contact_form}>
      <div className={Styles.image}>
        <Image src={'/Images/contact.png'} height={150} width={150} alt={""} />
      </div>
      
    <form onSubmit={submit}>
    <TextField fullWidth required  type={"text"} label={"Your name"} size={"small"} variant={"outlined"} value={userDetails.name} onChange={(e)=>{setUserdetails((prev)=>({...prev, name:e.target.value}))}}/>
    <TextField fullWidth required type={"email"} label={"Your email"} size={"small"} variant={"outlined"} value={userDetails.email}  onChange={(e)=>{setUserdetails((prev)=>({...prev, email:e.target.value}))}}/>
    <TextField fullWidth required type={"text"} multiline minRows={5} label={"Message"} size={"small"} variant={"outlined"} value={userDetails.message} onChange={(e)=>{setUserdetails((prev)=>({...prev, message:e.target.value}))}}/>
    <Button type='submit'>{loading ? <CircularProgress style={{color:"#fff", width:"25px", height:"25px"}} /> : "Send"}</Button>
    </form>
    </div>

    </section>
  )
}

export default Contact