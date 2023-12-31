"use client";
import { Button, Form, Input } from "antd";
import { User, Lock } from "iconsax-react";
import { Logo } from "@/ui/Logo";
import Link from "next/link";
import { useRegister } from "./hooks/useRegister";

export const Register = () => {
    const { formik, mutation } = useRegister();

    return (
        <main className="flex flex-col h-full justify-center gap-10 items-center px-5">
            <Logo />
            <div className="w-full max-w-xs sm:max-w-sm">
                <Form
                    onFinish={formik.submitForm}
                    className="flex flex-col items-center gap-2 w-full px-10"
                >
                    <Form.Item
                        name="first_name"
                        validateStatus={
                            formik.errors.first_name &&
                            formik.touched.first_name
                                ? "error"
                                : ""
                        }
                        help={
                            formik.touched.first_name &&
                            formik.errors.first_name
                        }
                        className="w-full"
                    >
                        <Input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            prefix={<User />}
                            placeholder="First name"
                            aria-autocomplete="none"
                            size={"large"}
                        />
                    </Form.Item>
                    <Form.Item
                        name="last_name"
                        validateStatus={
                            formik.errors.last_name && formik.touched.last_name
                                ? "error"
                                : ""
                        }
                        help={
                            formik.touched.last_name && formik.errors.last_name
                        }
                        className="w-full"
                    >
                        <Input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            prefix={<User />}
                            placeholder="Last name"
                            aria-autocomplete="none"
                            size={"large"}
                        />
                    </Form.Item>
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
                    <Form.Item
                        name="repeatPassword"
                        validateStatus={
                            formik.errors.repeatPassword &&
                            formik.touched.repeatPassword
                                ? "error"
                                : ""
                        }
                        help={
                            formik.touched.repeatPassword
                                ? formik.errors.repeatPassword
                                : ""
                        }
                        className="w-full"
                    >
                        <Input.Password
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            prefix={<Lock />}
                            placeholder="Repeat password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item className="w-full">
                        <Button
                            className="mt-2 bg-sky-400 text-white hover:bg-sky-500 w-full"
                            htmlType="submit"
                            type="primary"
                            size={"large"}
                            loading={mutation.isLoading}
                            onClick={formik.submitForm}
                        >
                            Register
                        </Button>
                    </Form.Item>
                    <Link href="/login" className="!p-0 !text-primary w-full">
                        Already have an account? Log in here
                    </Link>
                </Form>
            </div>
        </main>
    );
};
