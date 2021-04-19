import React from "react";

const ReusableTableHeadItem = ({ item }) => {
    return (
        <td title={item}>
            {item}
        </td>
    );
};

export default ReusableTableHeadItem;