import SubHeader from '../SubHeader/SubHeader'
import PropTypes from 'prop-types';

const Jobs = ({ children }) => {
  return (
    <div>
      <SubHeader data={children}></SubHeader>
    </div>
  )
}
Jobs.propTypes = {
  children: PropTypes.string.isRequired,
}
export default Jobs