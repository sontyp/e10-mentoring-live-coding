import { useParams } from "react-router-dom";

import { studentData } from "../App";

export default function Details() {
    const { id } = useParams();

    // find the correct student from the data set by ID
    const student = studentData.find(entry => entry.id === Number(id));

    return (
        <>
            <h1>Details</h1>
            
            <p>
                The desired ID is: {id}
            </p>
            <hr />
            <h3>Student</h3>
            <pre>
                {/* Show student's data here depending on the id */}
                {
                    JSON.stringify(student) ?? `Student with ID ${id} not found`
                }
            </pre>
        </>
    );
}