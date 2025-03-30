import React from 'react';
import { Container, Table, Card } from 'react-bootstrap';
import { getCurrentUser } from '../services/api';

const Dashboard = () => {
  const user = getCurrentUser();

  // Static data for the table
  const tableData = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Engineering', salary: '$85,000' },
    { id: 2, name: 'Jane Smith', position: 'Project Manager', department: 'Management', salary: '$95,000' },
    { id: 3, name: 'Michael Johnson', position: 'UI/UX Designer', department: 'Design', salary: '$78,000' },
    { id: 4, name: 'Sarah Williams', position: 'Data Analyst', department: 'Analytics', salary: '$82,000' },
    { id: 5, name: 'Robert Brown', position: 'Product Manager', department: 'Product', salary: '$98,000' },
    { id: 6, name: 'Emily Davis', position: 'Frontend Developer', department: 'Engineering', salary: '$80,000' },
    { id: 7, name: 'David Wilson', position: 'Backend Developer', department: 'Engineering', salary: '$87,000' },
    { id: 8, name: 'Jessica Miller', position: 'Marketing Specialist', department: 'Marketing', salary: '$75,000' },
  ];

  return (
    <Container>
      <Card className="shadow mb-4 p-3">
        <Card.Body>
          <h2 className="text-center mb-4">Welcome, {user.name}!</h2>
          <p className="text-center text-muted">
            Email: {user.email} | Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString()}
          </p>
        </Card.Body>
      </Card>

      <Card className="shadow">
        <Card.Body>
          <h3 className="mb-4">Employee Data</h3>
          <Table striped bordered hover responsive>
            <thead className="bg-primary text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Position</th>
                <th>Department</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.department}</td>
                  <td>{item.salary}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard; 