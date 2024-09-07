import React from 'react'

const Category = ({category}) => {
    console.log(category);
    const {category_name,availability,logo}= category
    return (
        <div>
            <div>
                <div className="bg-fuchsia-100 p-8 rounded-lg">
                    <img src={logo} alt="" />
                    <p className='font-semibold py-2 mt-4'>{category_name}</p>
                    <span>{availability}</span>
                </div>
            </div>
        </div>
    )
}

export default Category