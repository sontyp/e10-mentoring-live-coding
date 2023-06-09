import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { studentData } from "../App";

/* 
    Add filtering controls for all the properties of a student.
    Whenever those change, re-filter the students to show them below
*/

export default function Search() {
    // State Variable to store the filtered data which is going to be shown
    const [filteredData, setFilteredData] = useState(studentData);

    // Reference to the search parameters with a setter to rerender when they change
    const [searchParams, setSearchParams] = useSearchParams();

    // one state for all inputs
    const [filters, setFilters] = useState({
        id: searchParams.get('id'),
        name: searchParams.get('name'),
        age: searchParams.get('age'),
        study: searchParams.get('study'),
        degree: searchParams.get('degree')
    });

    // useEffect to react on changes of the seachParams
    useEffect(() => {
        // preload the filter result with the raw studentData
        let filterResult = studentData;

        // Loop through all provided search params
        searchParams.forEach((val, key) => {
            // filter the filter result by the current search parameter
            filterResult = filterResult.filter(item => {
            
                // if type of current property is originally a number, cast it to a string and use that for filtering
                if (typeof item[key] === 'number') {
                    return String(item[key]).startsWith(val);
                } else {
                    return item[key].toLowerCase().includes(val.toLowerCase());
                }
            });
        });

        // update filtered data in the state
        setFilteredData(filterResult);
    }, [searchParams]);

    // change handler for all filter inputs
    const onChange = evt => {
        /* Key to filter what input was used in particular to distinguish what has changed */
        const key = evt.target.dataset.key;

        /* Value provided by the change event */
        const value = evt.target.value;

        // update input state variables
        setFilters(filters => ({
            ...filters,
            [key]: value
        }));

        /* Update the search parameters */
        // if empty, delete the parameter
        if (value.length < 1) searchParams.delete(key); 
        else searchParams.set(key, value);

        setSearchParams(searchParams);
    };

    // create rows for student entries
    const dataRows = filteredData.map(entry => {
        return (
            <tr key={entry.id}>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.age}</td>
                <td>{entry.study}</td>
                <td>{entry.degree}</td>
            </tr>
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

            <div style={{
                display: 'flex',
                justifyContent: 'space-around'
            }}>
                <label>
                    ID
                    <input type="text" data-key='id' onChange={onChange} value={filters.id ?? ''} />
                </label>

                <label>
                    Name
                    <input type="text" data-key='name' onChange={onChange} value={filters.name ?? ''} />
                </label>

                <label>
                    Age
                    <input type="text" data-key='age' onChange={onChange} value={filters.age ?? ''} />
                </label>

                <label>
                    Study
                    <input type="text" data-key='study' onChange={onChange} value={filters.study ?? ''} />
                </label>

                <label>
                    Degree
                    <input type="text" data-key='degree' onChange={onChange} value={filters.degree ?? ''} />
                </label>
            </div>

            <hr />

            <h3>Students</h3>

            {
                dataRows.length > 0
                ? <table style={{
                    margin: '0 auto'
                }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Study</th>
                            <th>Degree</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataRows}
                    </tbody>
                </table>
                : `No results`
            }
        </>
    );
};