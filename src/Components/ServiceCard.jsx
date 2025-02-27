
import PropTypes from "prop-types"
const ServiceCard=({props})=>{
    const {title,description}=props;
    return (
        <>
        <div className="card " style={{backgroundColor:'green',margin:'20px'}}>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </div>
        </>
    )
}

ServiceCard.propTypes = { 
    props: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
};

export default ServiceCard;