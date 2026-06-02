import PropTypes from "prop-types";

const UserCards = ({ name, email }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

UserCards.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default UserCards;