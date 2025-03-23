import { useState, useEffect } from "react";
import { useParams } from "react-router";

const DetailInfo = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch('https://api.github.com/orgs/godaddy/repos').then((response) => response.json()).then((res) => {
            setData(res)
            const filteredRepo = res.find((item) => String(item.id) === id);
            setData(filteredRepo);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <ul className="details">
            <li>Title: {data.name}</li>
            <li>Description: {data.description}</li>
            <li>Repo page url: {data.owner?.repos_url}</li>
            <li>Language: {data.language}</li>
            <li>Forks: {data.forks}</li>
            <li>Open issues: {data.open_issues}</li>
            <li>Watchers: {data.watchers}</li>
        </ul>
    )
}

export default DetailInfo;