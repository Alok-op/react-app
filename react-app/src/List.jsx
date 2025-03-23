import { useState, useEffect } from "react";

const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/godaddy/repos').then((response) => response.json()).then((data) => {
            setData(data)
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <ul>
            {data.map((repo) => (
                <li key={repo.id}><a href="">{repo.name}</a></li>
            ))}
        </ul>
    )
}

export default List;