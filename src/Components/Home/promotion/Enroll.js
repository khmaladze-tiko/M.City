import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CircularProgress } from "@mui/material";

import { useFormik } from "formik";
import * as Yup from 'yup';

import { showErrorToast, showSuccessToast } from '../../Utils/tools'
import { promotionsCollection } from "../../../firebase";

const Enroll = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues:{ email:''},
        validationSchema: Yup.object({
        email:Yup.string()
        .email('Invalid email')
        .required('The email is required')
    }),
    onSubmit:( values )=>{
        setLoading(true);
    }
    })    

    return(
        <Fade>
            <div className="enroll_wrapper">
                <farm onSubmit={formik.handleSubmit}>
                    <div className="enroll_title">
                        Enter your email
                    </div>
                    <div className="enroll_input">
                        <input
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder="Enter your email"
                        />

                        { formik.touched.email && formik.errors.email ? 
                            <div className="error_label">
                                {formik.errors.email}
                            </div>  
                        :null}

                        { loading ? 
                            <CircularProgress color="secondary" className="progress" /> 
                            :
                            <button
                             type="submit"
                            >
                                Enroll
                            </button>    
                    }
                    <div className="enroll_discl">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.            
                    </div>     
                    </div>
                </farm>
            </div>
        </Fade>
    )
}

export default Enroll;