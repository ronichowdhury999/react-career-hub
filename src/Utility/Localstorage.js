const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application')

    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const savaJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobid => jobid === id)
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
    }
}

export{ savaJobApplication, getStoredJobApplication }