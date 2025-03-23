import { useState, useEffect } from "react";
import { Link } from "react-router";

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
        <ul className="list">
            {data.map((repo) => (
                <li key={repo.id}><Link to={`/details/${repo.id}`}>{repo.name}</Link></li>
            ))}
        </ul>
    )
}

export default List;