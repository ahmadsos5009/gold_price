import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';

const Main: React.FC<RouteComponentProps> = ({location}) => (
  <h1>Under Constraction {location.pathname}</h1>
);

export default withRouter(Main);

