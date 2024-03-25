import React from "react";
import Titles from "./Titles";

const NewLaster = () => {
  return (
    <div className="mt-[5%]">
      <Titles>Đăng Ký Nhận Thông Tin</Titles>
      <div className="w-[100%] flex justify-center items-center my-[2%] mx-0">
        <div className="flex justify-center items-center w-[70%] px-[10%] max-[664px]:w-[100%]">
          <input
            className="outline-none w-[100%] py-[10px] px-[30px] rounded-[10px]"
            style={{
              border: "1px solid rgb(163 163 163)",
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
            placeholder="Đăng ký nhận thông tin..."
          />
          <button
            className="btn-banner2 w-[200px]"
            style={{
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}>
            Đăng Ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewLaster;
