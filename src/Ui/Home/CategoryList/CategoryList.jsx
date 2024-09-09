import { useEffect, useState } from "react"
import Category from "./Category";

const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid lg:grid-cols-4 gap-4 p-4 mt-4">
                {
                    categories?.map(category => <Category key={category.id} category={category} />)
                }
            </div>
        </div>
    )
}

export default CategoryList