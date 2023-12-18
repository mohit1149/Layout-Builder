import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showContent, showRightNavbar} = value

      return (
        <div className="body-bg-container">
          {showLeftNavbar && (
            <div className="left-container">
              <h1>Left Navbar Menu</h1>
              <ul className="unorder-item-list">
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
                <li>Item 1</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="body-center-part">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-container">
              <h1>Right Navbar</h1>
              <div className="ad-container">
                <p>Ad 1</p>
              </div>
              <div className="ad-container">
                <p>Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
