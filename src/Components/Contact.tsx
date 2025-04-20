import React from "react";

function Contact() {
  return (
    <div id="contact">
      <p className="text-[#1ED760] font-semibold uppercase  mt-[60px]">
        Contact 🤝
      </p>
      <p className="whitespace-nowrap font-bold">Don't be shy! Hit me up! 👇</p>

      <div className="mt-4 flex md:flex-row flex-col md:items-center gap-[30px]">
        <div className="flex gap-2 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11269/11269426.png"
            className="w-[40px] h-[40px]"
            alt="pin"
          />
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-slate-400">Chicago, Illinois</p>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4101/4101680.png"
            className="w-[50px] h-[50px]"
            alt="pin"
          />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-slate-400">mnavyasri0303@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
