import PropTypes from 'prop-types';

function Employee({firstName,lastName,role}) {

  return (
    <tr>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{role}</td>
    </tr>
  );
}

Employee.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default Employee;
