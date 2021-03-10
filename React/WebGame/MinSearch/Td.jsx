import React,{useContext} from 'react';
import { TableContext } from './MineSearch';

const Td = () => {
    const { tableData } = useContext(TableContext);
    return(
        <td>
        </td>
    );
};

export default Td;