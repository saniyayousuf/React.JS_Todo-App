import { buttonBaseClasses } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types"
Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.object,
    iconStyle: PropTypes.object,
    btnValue: PropTypes.string.isRequired,
};
export default function Button(props) {
    return <>
        <button
            className={`btn ${props.class}`}
            onClick={props.click}
        >
            <span style={{ marginRight: "8px" }}>{props.btnValue}</span>
            {props.icon && (
                <span style={{ marginLeft: "8px" }}>
                    <FontAwesomeIcon icon={props.icon} style={props.iconStyle} />
                </span>
            )}
        </button>



    </>
}
