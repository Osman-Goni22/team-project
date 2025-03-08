// import React, { useEffect } from 'react';
// import { Table } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
// ];

import { useEffect, useState } from "react";

const Users = () => {
//   return <Table columns={columns} dataSource={data} />;
const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.org/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(users => {
      console.log(users);
      setUsers(users)
      console.log(users);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  
  },[])

  return(
    <div>
        {
            users.map(user=><li>{user.firstname}    {user.email}</li>)
        }
    </div>
  )
};

export default Users;
