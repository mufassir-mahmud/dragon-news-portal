
"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const RightSideBar = () => {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);

      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        console.error("Google login failed:", error.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Google login error:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Login With */}
      <h2 className="font-semibold mb-4">Login With</h2>

      <div className="flex flex-col gap-3">

        {/* Google Login */}
        <button
          className="btn bg-white text-black border-[#e5e5e5] w-8/12"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          {loading ? (
            "Redirecting..."
          ) : (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
              </svg>
              Login with Google
            </>
          )}
        </button>

        {/* Facebook Login - UI only */}
        <button className="btn bg-[#1A77F2] text-white border-[#005fd8] w-8/12">
          Facebook Login
        </button>
      </div>

      {/* Find Us On */}
      <div className="my-6">
        <h2 className="font-semibold mb-4">Find Us On</h2>

        <div className="flex flex-col gap-2">

          <a href="#" className="btn bg-white text-black border w-8/12">
            Facebook
          </a>

          <a href="#" className="btn bg-white text-black border w-8/12">
            X (Twitter)
          </a>

          <a href="#" className="btn bg-white text-black border w-8/12">
            Instagram
          </a>

        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
