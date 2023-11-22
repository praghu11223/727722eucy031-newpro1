import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Pragadeeshwaran',
    '727722EUCY031',
    '9.54 CGPA',
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Mrithyunjai',
    '727722EUCY026',
    '9.29 CGPA',
  ),
  createData(2, '16 Mar, 2019', 'Sibiraj', '727722EUCY047', '9.81 CGPA'),
  createData(
    3,
    '16 Mar, 2019',
    'Jayasuriya',
    '727722EUCY018',
    '9.39 CGPA',
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Sreeharish',
    '727722EUCY046',
    '9.79 CGPA',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Student Details</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Roll no</TableCell>
            <TableCell>Marks</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See More Details!
      </Link>
    </React.Fragment>
  );
}