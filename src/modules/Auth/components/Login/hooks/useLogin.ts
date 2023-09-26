"use client";
import * as Yup from "yup";
import { useFormik } from "formik";
import { login } from "@/modules/Auth/api";
import { App } from "antd";
import { useMutation } from "@tanstack/react-query";
import { LoginCredentials } from "@/modules/Auth/types";
import { useRouter } from "next/navigation";
import jwt from "@/lib/utils/jwt";

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username!"),
    password: Yup.string().required("Please enter your password!"),
});

export const useLogin = () => {
    const { message } = App.useApp();
    const router = useRouter();

    const formik = useFormik<LoginCredentials>({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: () => {
            if (!mutation.isLoading) mutation.mutate(formik.values);
        },
    });

    const mutation = useMutation({
        mutationFn: login,
        onSuccess(data, variables, context) {
            message.success("Success!");
            const { data: resData } = data;
            const accessToken = resData.access;
            jwt.saveJwt({ access: accessToken, refresh: "refresh" });
            router.push("/chat");
        },
        onError() {
            message.error("Error!");
        },
    });
    return { formik, mutation };
};
