import React from 'react'

const useProjects = () => {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        fetch(
          "https://raw.githubusercontent.com/prantokhaan/projectsData/main/projectData.json"
        )
        .then(res => res.json())
        .then(data => setProjects(data));
    }, [])

    return [projects, setProjects];
}

export default useProjects;