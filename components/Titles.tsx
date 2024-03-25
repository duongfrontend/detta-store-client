// import { title } from "process";
import React from "react";

const Titles = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  return (
    <div className="h-[50px] relative">
      <div className="h-[100%]"></div>
      <div className="linees text-[25px] cursor-default absolute top-[10%] left-[5%] text-[#434343] font-bold max-[554px]:pl-[12px]">
        {props.children}
      </div>
    </div>
  );
};

export default Titles;
