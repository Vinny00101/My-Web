import React from "react";
import "../style/tag.css"

export default function TagComponent({children}){
    return(
        <span className="Tags">{children}</span>
    )
}