import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        onToggleShowContent,
      } = value
      const onChangeLeftSide = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeCenterSide = () => {
        onToggleShowContent()
      }
      const onChangeRightSide = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="configuration-context-container">
          <h1 className="layout-heading">Layout</h1>
          <input
            type="checkbox"
            id="context"
            checked={showContent}
            onChange={onChangeCenterSide}
          />
          <label htmlFor="context" className="heading-label">
            Content
          </label>
          <br />
          <input
            type="checkbox"
            id="leftNavbar"
            checked={showLeftNavbar}
            onChange={onChangeLeftSide}
          />
          <label htmlFor="leftNavbar" className="heading-label">
            Left Navbar
          </label>
          <br />
          <input
            type="checkbox"
            id="rightNavbar"
            checked={showRightNavbar}
            onChange={onChangeRightSide}
          />
          <label htmlFor="rightNavbar" className="heading-label">
            Right Navbar
          </label>
          <br />
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
