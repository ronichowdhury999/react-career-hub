import { Link, useLoaderData } from "react-router-dom"
import SubHeader from "../SubHeader/SubHeader"
import PropTypes from 'prop-types'
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../../Utility/Localstorage";
import { IoLocationOutline } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";

const AppliedJobs = ({ children }) => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find(job => job.id === id)
        if (job) {
          jobsApplied.push(job)
        }
      }
      setAppliedJobs(jobsApplied)
    }
  }, [])
  return (
    <div>
      <SubHeader data={children}></SubHeader>
      <div className="max-w-[1000px] mx-auto p-4 md:mt-10">
        {appliedJobs && appliedJobs.map(job => <div key={job.id}>

          <div className="md:flex gap-4 my-4 p-6 justify-between items-center border border-my-header-bg rounded-lg">

            <div>
              <img className="w-40 my-header-bg h-40 md:w-40 p-6" src={job.logo} alt="logo" />
            </div>

            <div className="flex-1">
              <h2 className="py-2 text-xl font-bold">{job.job_title}</h2>
              <p>{job.company_name}</p>
              <div className="flex items-center gap-2 py-2">
                <button className="py-1 px-2 rounded-md border text-purple-600 border-purple-600"  >{job.job_type}</button>
                <button className="py-1 px-2 rounded-md border text-purple-600 border-purple-600">{job.remote_or_onsite}</button>
              </div>
              <div className="flex gap-1 my-2 items-center">
                <IoLocationOutline />
                <p>{job.location}</p>
                <span className="mr-2" />
                <GrMoney />
                <p>{job.salary}</p>
              </div>
            </div>

            <div className="">
              <Link to={`/jobDetails/${job.id}`}>
                <button className="py-2 px-3 rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500 ">View Details</button>
              </Link>
            </div>

          </div>
        </div>)}
      </div>
    </div>
  )
}
AppliedJobs.propTypes = {
  children: PropTypes.string.isRequired
}
export default AppliedJobs