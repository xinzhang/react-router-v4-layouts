import React from 'react'

const AppHomePage = ({ history }) => (
  <div>
    App Home Page
    <br /><br />
    <button onClick={() => history.push('/')}>Logout</button>
  </div>
)

export default AppHomePage
