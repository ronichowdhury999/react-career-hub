

const SubHeader = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div className='my-header-bg relative'>
                <h3 className='text-center text-3xl font-semibold pt-10 pb-20 text-[#1A1919]'>{data}</h3>
                <img src="https://i.ibb.co/hVxngWZ/Vector.png" className='absolute bottom-0 left-0 w-36 md:w-56' alt="" />
            </div>
        </div>
    )
}

export default SubHeader