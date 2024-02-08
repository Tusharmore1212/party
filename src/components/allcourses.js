import React, {useState,useEffect} from "react";
import Course from "./course";

function Allcourses()
{
    useEffect(()=>{
        document.title = "view courses";
    });
    
        const [courses, setCousrses] = useState([
            {title:"java Course",description:"this is demo course"},
            {title:"Django Course",description:"this is demo course"},
            {title:"React Course",description:"this is demo course"},
            
        ]);
        return(
            <div>
                <h1>All courses</h1>
                <p>List of courses are as follows</p>
                {
                    courses.length>0
                    ? courses.map((item)=> <Course course={item} />
                    ):"NO courses Available"}
            </div>
        )

}
export default Allcourses;