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
            <div className="text-center mt-20">
                <h1 className="text-5xl font-bold mb-4">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-8 px-4">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job} />)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <div className="mt-6 text-center">
                    <button onClick={() => setDataLength(jobs.length)} className="py-1 px-3 rounded-lg bg-gradient-to-br from-purple-700 to-purple-300">Show all</button>
                </div>
            </div>
        </div>
    )
}

export default FeatureJobs