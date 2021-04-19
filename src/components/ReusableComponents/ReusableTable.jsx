import React from "react";
import ReusableTableRow from "./ReusableTableRow";
import ReusableTableHeadItem from "./ReusableTableHead";

const ReusableTable = ({ theadData, tbodyData, customClass }) => {
    return (
        <table className={customClass}>
            <thead>
                <tr>
                    {theadData.map((h) => {
                        return <ReusableTableHeadItem key={h} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return <ReusableTableRow key={item.id} data={item.items} />;
                })}
            </tbody>
        </table>
    );
};

export default ReusableTable;