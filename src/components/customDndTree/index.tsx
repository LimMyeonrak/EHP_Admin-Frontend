import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

const CustomDndTree = props => {
    const { data, setData, height = 500, width = 400, prop } = props;

    return (
        <div style={{ height, width }}>
            <SortableTree treeData={data} onChange={treeData => setData([...treeData])} {...prop} />
        </div>
    );
};

export default CustomDndTree;
