import { FC } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  Input,
  Checkbox,
  Button,
  Box,
  LoadingOverlay,
  Loader,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface Props {}

// Define the shape of form values using TypeScript
interface FormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

// Define the validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must contain at least 6 characters")
    .required("Required"),
});

const Login: FC<Props> = () => {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <div className="login-app">
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
          loaderProps={{
            children: (
              <>
                <Loader size={18} /> Loggar in..
              </>
            ),
          }}
        />
        <Formik<FormValues>
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          validationSchema={validationSchema}
          validateOnMount
          validateOnBlur
          validateOnChange
          onSubmit={(values) => {
            toggle();
            console.log(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, isValid, touched }) => (
            <form onSubmit={handleSubmit}>
              <div className="email">
                <Input.Label htmlFor="email" required>
                  Email
                </Input.Label>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  variant="filled"
                  autoComplete="username"
                />
                {touched.email && errors.email && (
                  <Input.Error>{errors.email}</Input.Error>
                )}
              </div>

              <div className="password">
                <Input.Label htmlFor="password" required>
                  Password
                </Input.Label>
                <Field
                  as={Input}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
                {touched.password && errors.password && (
                  <Input.Error>{errors.password}</Input.Error>
                )}
              </div>

              <div className="remember-me">
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  label="I agree to sell my privacy"
                  color="red"
                />
              </div>

              <Button type="submit" disabled={!isValid}>
                Login
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default Login;
