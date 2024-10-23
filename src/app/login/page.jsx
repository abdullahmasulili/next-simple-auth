import AuthContainer from "@/layouts/AuthContainer";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Login() {
  return (
    <AuthContainer>
      <form className="w-full">
        <Input id="email" name="email" label="Email" type="email" />
        <Input id="password" name="password" label="Password" type="password" />
        <Button block>Sign In</Button>
        <Button block className="bg-blue-500 mt-3">
          Sign In With Google
        </Button>
      </form>
      <p className="text-center w-full">
        Don&apos;t Have Account?{" "}
        <a href="#" className="text-blue-500">
          Register
        </a>
      </p>
    </AuthContainer>
  );
}
