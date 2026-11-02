
import {  format } from "date-fns";
const NewDate = () => {
    return (
        <p>{format(new Date(), "EEEE, MMM, dd, yyyy")}</p>
    );
};

export default NewDate;