import { useParams } from "react-router-dom";

// Import studentData from App

export default function Details() {
    const { id } = useParams();
    // store the student's data in a state variable depending the id

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
            </pre>
        </>
    );
}