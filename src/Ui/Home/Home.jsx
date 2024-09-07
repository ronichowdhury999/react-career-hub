import Banner from "./Banner/Banner"
import CategoryList from "./CategoryList/CategoryList"
import FeatureJobs from "./FeatureJobs/FeatureJobs"

const Home = () => {
    return (
        <div>
            <Banner />
            <div>
                <CategoryList />
                <FeatureJobs />
            </div>
        </div>
    )
}

export default Home