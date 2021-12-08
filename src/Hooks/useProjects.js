import React from 'react'

const useProjects = () => {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        fetch("/projectsData.json")
          .then((res) => res.json())
          .then((data) => setProjects(data));
    }, [projects?.length])

    return [projects, setProjects];
}

export default useProjects;