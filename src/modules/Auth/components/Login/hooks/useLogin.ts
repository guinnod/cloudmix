"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
import { login } from "@/modules/Auth/api";
import { App } from "antd";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Incorrect email format!")
        .required("Please enter your email!"),
    password: Yup.string()
        .min(8, "Password length should be at least 8!")
        .max(24, "Password length should be at most 24!")
        .required("Please enter your password!"),
});

export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const { message } = App.useApp();
    const handleSubmit = async () => {
        setLoading(true);
        try {
            const { data } = await login(formik.values);
            localStorage.setItem("access", data.access);
        } catch (error) {
            message.open({
                type: "error",
                content: "Invalid credentials",
                duration: 3,
            });
        } finally {
            setLoading(false);
        }
    };
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: handleSubmit,
    });
    return { formik, loading };
};
