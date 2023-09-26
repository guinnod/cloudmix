"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { RegisterCredentials } from "@/modules/Auth/types";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/modules/Auth/api";
import { useRouter } from "next/navigation";
import { App } from "antd";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name!"),
    lastName: Yup.string().required("Please enter your last name!"),
    email: Yup.string()
        .email("Incorrect email format!")
        .required("Please enter your email!"),
    password: Yup.string()
        .min(8, "Password length should be at least 8!")
        .max(24, "Password length should be at most 24!")
        .required("Please enter your password!"),
    repeatPassword: Yup.string()
        .required("Repeat password is required")
        .test("password-match", "Passwords must match", function (value) {
            return value === this.parent.password;
        }),
});

export const useRegister = () => {
    const router = useRouter();

    const { message } = App.useApp();
    const mutation = useMutation(register, {
        onSuccess(data, variables, context) {
            message.success("Success!");
            router.push("/login");
        },
        onError() {
            message.error("Error!");
        },
    });

    const formik = useFormik<RegisterCredentials>({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: () => {
            if (!mutation.isLoading) mutation.mutate(formik.values);
        },
    });
    return { formik, mutation };
};
