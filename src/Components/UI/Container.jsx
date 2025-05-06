import { useState } from "react";

export default function Container({ children }) {

    return(
        <div className="flex flex-col justify-center items-center w-full min-h-screen bg-image">
            {children}
        </div>
    );
}