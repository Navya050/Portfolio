import React from "react";

function Footer() {
  return (
    <div className="h-[80px] flex md:flex-row flex-col items-center justify-around">
      <div>CopyRight © 2024. All Rights Reserved.</div>
      <div className="flex flex-row gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/128/4494/4494749.png"
          alt="github"
          className="w-[30px] cursor-pointer"
          onClick={() => window.open("https://github.com/Navya050/", "_blank")}
        />
        <img
          src="https://cdn-icons-png.flaticon.com/128/3670/3670167.png"
          alt="linkedin"
          className="w-[30px] cursor-pointer"
          onClick={() =>
            window.open(
              "http://linkedin.com/in/navyasri-maskani-387631190/",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
}

export default Footer;
