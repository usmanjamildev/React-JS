import React from 'react';
import { userTypes } from '../../App';
import { currentUser } from '../../App';

function AdminElement({ children }) {
    if (currentUser === userTypes.adminUser) {
      return <>{children}</>;
    } else {
      return <div>You do not have access to this Page!</div>;
    }
  }
  export default AdminElement