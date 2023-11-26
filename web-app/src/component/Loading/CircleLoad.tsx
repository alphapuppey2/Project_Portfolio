import React from "react";


const RoundSpinner = () => {

    return (
        <>
            <div className="flex flex-col items-center justify center">
                <div>Loading Please Wait</div>
                <div className="spinner animate-[spin_2s_linear_infinite] rounded-full border-4  border-t-red-500 h-[34px] w-[34px]"></div>
            </div>
        </>
    )
}

export default RoundSpinner