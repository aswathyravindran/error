// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
// import './Table1.css';

// const Table1 = () => {
//   var names = [
//     { name: "Aswathy", age: 21, email: "aswathy@example.com", phone: "1234567890" },
//     { name: "Mariya", age: 20, email: "mariya@example.com", phone: "9876543210" },
//     { name: "Maya", age: 21, email: "maya@example.com", phone: "5678901234" }
//   ];

//   return (
//     <div style={{ paddingTop: "100px" }}>
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ color: "white", backgroundColor: "black", fontFamily: "cursive", fontSize: "15px" }}>Name</TableCell>
//               <TableCell style={{ color: "white", backgroundColor: "black", fontFamily: "cursive", fontSize: "15px" }}>Age</TableCell>
//               <TableCell style={{ color: "white", backgroundColor: "black", fontFamily: "cursive", fontSize: "15px" }}>Email</TableCell>
//               <TableCell style={{ color: "white", backgroundColor: "black", fontFamily: "cursive", fontSize: "15px" }}>Phone</TableCell>
//               <TableCell style={{ color: "white", backgroundColor: "black", fontFamily: "cursive", fontSize: "15px" }}></TableCell> {/* Empty cell for the button */}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {names.map((value, index) => {
//               return (
//                 <TableRow key={index}>
//                   <TableCell>{value.name}</TableCell>
//                   <TableCell>{value.age}</TableCell>
//                   <TableCell>{value.email}</TableCell>
//                   <TableCell>{value.phone}</TableCell>
//                   <TableCell>
//                     <Button variant="outlined">Button</Button> {/* Button added to the left side of each row */}
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Table1;

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const TableWithColumns = () => {
  var data = [
    { name: "John Doe", email: "johndoe@example.com" },
    { name: "Jane Smith", email: "janesmith@example.com" },
    { name: "Bob Johnson", email: "bjohnson@example.com" }
  ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableWithColumns;




<div class="table-container">
  <table class="table">
    {/* <!-- Table content goes here --> */}
  </table>
</div>
import './Table1.css';