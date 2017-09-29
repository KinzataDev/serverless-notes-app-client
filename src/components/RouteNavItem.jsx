import React from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

export default props =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
      <NavItem
        onClick={e => history.push(e.currentTarget.getAttribute("href"))}
        {...props}
        active={match ? true : false}
      >
        {props.children}
      </NavItem>}
  />;

// RouteNavItem.propTypes = {
//   match: PropTypes.bool,
//   href: PropTypes.string.isRequired,
//   history: PropTypes.object,
//   children: PropTypes.any,
// };

// export default RouteNavItem;

// class RouteNavItem extends React.Component {
//   render() {
//     const { match, href } = this.props;
//     const {history} = this.context;
//     console.log(this.context);
//     console.log(this.props);
//     return (
//       <Route path={href} exact>
//         <NavItem
//           onClick={e => history.push(e.currentTarget.getAttribute('href'))}
//           {...this.props}
//           active={match}
//         >
//           {this.props.children}
//         </NavItem>
//       </Route>
//     );
//   }
// }