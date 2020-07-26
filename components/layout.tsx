import { FunctionComponent } from 'react';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="uk-container">
      { children }
    </div>
  )
}

export default Layout;