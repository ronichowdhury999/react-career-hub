import { IoLocationOutline } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { logo, job_title, job_type, company_name, remote_or_onsite, location, salary, id} = job
    return (
        <div>
            <div className="border border-purple-200 rounded-lg p-6">
                <img className="w-16 md:w-20 h-16" src={logo} alt="logo" />
                <h2 className="py-2 text-xl font-bold">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex items-center gap-2 py-2">
                    <button     >{job_type}</button>
                    <button className="py-1 px-2 rounded-md border text-purple-600 border-purple-600">{remote_or_onsite}</button>
                </div>
                <div className="flex gap-1 my-2 items-center">
                    <IoLocationOutline />
                    <p>{location}</p>
                    <span className="mr-2" />
                    <GrMoney />
                    <p>{salary}</p>
                </div>
                <Link to={`/jobDetails/${id}`}>
                    <button className="py-1 px-3 rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500 ">View Details</button>
                </Link>
            </div>
        </div>
    )
}

export default Job