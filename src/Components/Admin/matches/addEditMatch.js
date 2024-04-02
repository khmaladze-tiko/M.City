import React, { useEffect, useState } from "react";
import AdminLayout from "../../../Hoc/AdminLayout";

import { useFormik } from "formik";
import * as Yup from "yup";

import { showErrorToast, showSuccessToast, textErrorHelper, selectErrorHelper, selectIsError } from "../../Utils/tools";

import { TextField, Select, MenuItem, FormControl, Button } from "@mui/material";
import { matchesCollection, teamsCollection } from "../../../firebase";

const defaultValues = {
    data:'',
    local:'',
    resultLocal:'',
    referee:'',
    stadium:'',
    result:'',
    final:'',
}

const AddEditMatch = () => {
    const [loading, setLoading] = useState(false);
    const [formType, setFormType] = useState('');
    const [teams, setTeams] = useState(null);
    const [values, setValues] = useState(defaultValues);

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: values,
        validationSchema: Yup.object({
            data:Yup.string()
            .required('This input is required'),
            local:Yup.string()
            .required('This input is required'),
            resultLocal:Yup.number()
            .required('This input is required')
            .min(0, 'The minimum is 0')
            .max(99, 'The maximum is 30'),
            final:Yup.mixed()
            .required('This input is required')
            .oneOf(['yes','no'])
        }),
        onSubmit:(values) => {

            console.log(values)
        }
    })
    return(
        <>
        gg
        </>
    )
}

export default AddEditMatch;