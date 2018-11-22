import React from 'react';
import PropTypes from 'prop-types';

import ReactTable from 'react-table'
import "react-table/react-table.css";

const columns = [
    {
        Header: "Username",
        accessor: "username",
        minWidth: 300
    },
    {
        Header: "Score",
        accessor: "score",
        minWidth: 300
    }
];

/**
 * Describe TopPlayers here.
 */
const TopPlayers = ({ data }) => (
    <ReactTable
        minWidth={400}
        minRows={2}
        data={data}
        filterable={true}
        columns={columns}
        showPagination={false}
        showPageJump={false}
      />
);

TopPlayers.propTypes = {
};

TopPlayers.defaultProps = {};

/**
 * @component
 */
export default TopPlayers;
