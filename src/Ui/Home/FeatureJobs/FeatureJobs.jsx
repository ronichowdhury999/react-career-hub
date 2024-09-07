import { useEffect, useState } from "react"
import Job from "./Job";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('/public/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <div>
            <div className="text-center mt-14">
                <h1 className="text-4xl font-bold mb-4">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-8 px-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job} />)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <div className="mt-6 text-center">
                    <button onClick={() => setDataLength(jobs.length)} className="py-1 px-3 rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500">Show all</button>
                </div>
            </div>      
        </div>
    )
}

export default FeatureJobs