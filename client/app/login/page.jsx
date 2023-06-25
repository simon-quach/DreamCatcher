import Dreamer from "@/assets/dreamer.svg";

import Image from "next/image";
import Link from "next/link";

import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen">
      <div className="md:flex justify-center md:fixed hidden top-0 left-0 w-[50%] h-screen bg-black px-[3rem]">
        <Image src={Dreamer} alt="Dreamer" className="" />
      </div>
      <div className="md:flex flex-col md:fixed top-0 right-0 md:w-[50%] h-full bg-bgwhite md:px-[4rem] px-[2rem] md:py-[2rem] py-[4rem]">
        <div className="flex flex-col justify-between w-full h-full">
          <div className="text-[24px] font-bold md:mt-[6rem]">
            <div>
              Log in to <span className="text-purple">DreamCatch</span>
            </div>
            <div className="mt-[2rem]">
              <LoginForm />
            </div>
          </div>
        </div>
        <div className="">
          Not on DreamCatch?{" "}
          <span className="font-bold underline hover:text-purple">
            <Link href="/signup">Sign up here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
