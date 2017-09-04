import React from 'react'
import { Route, Redirect } from 'react-router-dom'

class AuthorizedRoute extends React.Component {

  render() {
    console.log(this.props);
    const { component: Component, ...rest } = this.props
    console.log(Component);

    return (
      <Route {...rest} render={props => {
          return <Component {...props} />
      }} />
    )
  }

}

export default AuthorizedRoute;
