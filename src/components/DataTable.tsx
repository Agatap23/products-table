import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/dataTable.css';

interface TableRows {
    count: number;
    price: number;
    name: string;
}

const DataTable = ({rows}: TableRows[] | any ) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead className="table-head">
                    <TableRow>
                        <TableCell className="table-header-cell">Name</TableCell>
                        <TableCell className="table-header-cell">Price</TableCell>
                        <TableCell className="table-header-cell">Count</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row : TableRows) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable;