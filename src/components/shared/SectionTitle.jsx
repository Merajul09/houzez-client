import PropTypes from 'prop-types';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    subHeading: PropTypes.string,
    heading: PropTypes.string,
}
export default SectionTitle;