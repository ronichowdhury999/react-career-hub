import { useLoaderData, useParams } from "react-router-dom"
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { GrMoney } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";

const JobDetails = () => {
  const jobs = useLoaderData()
  const { id } = useParams()
  const idIn = parseInt(id)
  const jobData = jobs?.find(job => job.id === idIn)
  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h1 className="text-3xl text-center py-16 font-bold">Job Details</h1>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3">
          <p className="my-4"><span className="font-bold">Job Description:</span>  A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.
          </p>
          <p><span className="font-bold">Job Responsibility:</span>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.
          </p>
          <p className="my-4"><span className="font-bold">Educational Requirements:</span><br /><br />
            Bachelor degree to complete any reputational university.
          </p>
          <p><span className="font-bold">Experiences:</span><br /><br /> 2-3 Years in this field.
          </p>
        </div>
        <div>
          <div className="p-4 mt-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-md">
            <h2 className="font-bold">Job Details</h2>
            <div className="mt-4 border border-b-2 " />
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <GrMoney className="text-purple-500" />
                <p><span className="font-semibold">Salary : </span>{jobData?.salary}</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <GrMoney className="text-purple-500" />
                <p><span className="font-semibold">Job title : </span>{jobData?.job_title}</p>
              </div>
            </div>
            <h2 className="font-bold mt-4">Contact Information</h2>
            <div className="mt-4 border border-b-2 " />
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <FiPhone className="text-purple-500" />
                <p><span className="font-semibold">Phone: </span>{jobData?.contact_information?.phone}</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <HiOutlineMail className="text-purple-500" />
                <p><span className="font-semibold">Email : </span>{jobData?.contact_information?.email}</p>
              </div>
              <div className="flex items-center gap-2 mt-2 mb-4">
                <TfiLocationPin className="text-purple-500 md:w-7" />
                <p><span className="font-semibold">Address : </span>{jobData?.contact_information?.address}</p>
              </div>
            </div>
          </div>
            <button className="py-3 text-white font-semibold px-3 w-full mt-4 rounded-lg bg-gradient-to-br from-blue-500 to-blue-300">Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default JobDetails