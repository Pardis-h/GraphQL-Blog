import React from "react";
import {TailSpin} from "react-loader-spinner";

function Loader({customHeight}) {
  return (
    <div style={{width:"100%", minHeight: customHeight, display: "flex", alignItems: "center", justifyContent: "center"}}>
        <TailSpin
          height="80"
          width="80"
          color="#1976d2"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
    </div>
  );
}

export default Loader;
