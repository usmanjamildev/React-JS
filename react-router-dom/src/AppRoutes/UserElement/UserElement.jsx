import React from 'react';
import { userTypes } from '../../App';
import { currentUser } from '../../App';
import { Navigate } from 'react-router-dom';
function UserElement({ children }) {
  if (currentUser === userTypes.normalUser || currentUser === userTypes.adminUser) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/"} />;
  }
}
export default UserElement