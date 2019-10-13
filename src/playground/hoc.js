import React from 'react';
import ReactDOM from 'react-dom';

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info} </p>
  </div>
);

const withAdminWarning = WrappedComponent => props => (
  <div>
    {props.isAdmin && <p>Whatever comes after this will be "Top Secret"</p>}
    <WrappedComponent {...props} />
  </div>
);

// requireAuthentication
const requireAuthentication = WrappedComponent => props => (
  <div>
    {props.isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Please log in to view the info</p>
    )}
  </div>
);
const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(
//   <AdminInfo isAdmin info="This is important" />,
//   document.getElementById('root')
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="This is important" />,
  document.getElementById('root')
);
