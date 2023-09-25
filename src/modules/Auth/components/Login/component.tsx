"use client";
import { Button, Form, Input } from "antd";
import { User, Lock } from "iconsax-react";
import { Logo } from "@/ui/Logo";
import Link from "next/link";
import { useLogin } from "./hooks/useLogin";

export const Login = () => {
    const { formik, loading } = useLogin();
    return (
        <main className="flex flex-col h-full justify-center gap-10 items-center">
            <Logo />
            <div className="w-full max-w-sm">
                <Form
                    onFinish={formik.submitForm}
                    className="flex flex-col items-center gap-2 w-full px-10"
                >
                    <Form.Item
                        name="email"
                        validateStatus={
                            formik.errors.email && formik.touched.email
                                ? "error"
                                : ""
                        }
                        help={formik.touched.email && formik.errors.email}
                        className="w-full"
                    >
                        <Input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            prefix={<User />}
                            placeholder="E-mail"
                            aria-autocomplete="none"
                            size={"large"}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        validateStatus={
                            formik.errors.password && formik.touched.password
                                ? "error"
                                : ""
                        }
                        help={
                            formik.touched.password
                                ? formik.errors.password
                                : ""
                        }
                        className="w-full"
                    >
                        <Input.Password
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            prefix={<Lock />}
                            placeholder="Password"
                            size={"large"}
                        />
                    </Form.Item>

                    <Form.Item className="w-full">
                        <Button
                            className="mt-2 bg-sky-400 text-white hover:bg-sky-500 w-full"
                            htmlType="submit"
                            type="primary"
                            size={"large"}
                            loading={loading}
                        >
                            Log in
                        </Button>
                    </Form.Item>
                    <div className="w-full">
                        <Link href="/register">
                            <Button
                                type="link"
                                className="!p-0 whitespace-break-spaces !text-primary"
                            >
                                Don't have an account? Register here
                            </Button>
                        </Link>
                    </div>
                </Form>
            </div>
        </main>
    );
};
