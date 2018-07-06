import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import menus from '../../common/mockup/menu';

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

class HeaderNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBurgerClick: false
    };
    this._renderMenu = this._renderMenu.bind(this);
    this.onLinkClick = this.onLinkClick.bind(this);
    this.onBurgerClick = this.onBurgerClick.bind(this);
  }

  _renderMenu(data) {
    return (
      data &&
      data.map(menu => (
        <Link
          key={menu.key}
          to={menu.link}
          className={'navbar-item'}
          onClick={this.onLinkClick}
        >
          {menu.name}
        </Link>
      ))
    );
  }

  onLinkClick() {
    this.setState({
      isBurgerClick: false
    });
  }

  onBurgerClick() {
    this.setState({
      isBurgerClick: !this.state.isBurgerClick
    });
  }

  render() {
    return (
      <HeaderContainer>
        <nav className="navbar is-dark" aria-label="main navigation">
          <div className="navbar-brand">
            <div
              className={`burger navbar-burger ${
                this.state.isBurgerClick ? 'is-active' : ''
              }`}
              data-target="menuItem"
              onClick={this.onBurgerClick}
            >
              <span />
              <span />
              <span />
            </div>
          </div>

          <div
            id="menuItem"
            className={`navbar-menu ${
              this.state.isBurgerClick ? 'is-active' : ''
            }`}
          >
            <div className="navbar-start">{this._renderMenu(menus)}</div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a
                      className="button is-black"
                      href="https://github.com/icezatoo"
                    >
                      <span className="icon">
                        <i className="fab fa-github" />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </HeaderContainer>
    );
  }
}

export default HeaderNavigation;
