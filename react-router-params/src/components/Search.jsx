import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { studentData } from "../App";

/* 
    Add filtering controls for all the properties of a student.
    Whenever those change, re-filter the students to show them below
*/

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredData, setFilteredData] = useState(studentData);

    useEffect(() => {
        if (searchParams.has('name')) {
            const filtered = studentData.filter(entry => {
                return entry.name.toLowerCase().includes(searchParams.get('name').toLowerCase());
            });
    
            setFilteredData(filtered);
        }
    }, [searchParams]);


    const onChange = evt => {
        const name = evt.target.value;

        /* Key to filter what input was used in particular to distinguish what has changed */
        const key = evt.target.dataset.key;

        console.log(key);

        setSearchParams({
            ...searchParams,
            name
        })
    };

    const data = filteredData.map(entry => {
        return (
            <li key={entry.name}>
                {JSON.stringify(entry)}
            </li>
        );
    });

    return (
        <>
            <h1>Search</h1>
            
            <p>
                The search/query parameters are:
            </p>
            <pre>
                {searchParams.toString()}
            </pre>

            <hr />

            <h3>Filters</h3>

            <label>
                Name
                <input type="text" data-key='name' onChange={onChange} />
            </label>

            <hr />

            <h3>Students</h3>

            <ul>
                {data}
            </ul>
        </>
    );
};