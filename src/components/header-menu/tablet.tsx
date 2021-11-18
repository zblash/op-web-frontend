/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../images/logo/flogo.png';
import {
  UILogoutSecondIcon,
  UIOutlineDownIcon,
  UIUserIcon,
  UIFacebookIcon,
  UITwitterIcon,
  UIInstagramIcon,
  UILinkedInIcon,
  UINotificationIcon,
} from '../../index';
import { UILink } from '../link';
import { useWindowSize } from '../../utils/hooks';
/* MobileHeaderMenu Helpers */
interface TabletHeaderMenuProps {
  isAuthenticated: boolean;
  logout: () => void;
}
/* MobileHeaderMenu Constants */

/* MobileHeaderMenu Styles */

/* MobileHeaderMenu Component  */
const TabletHeaderMenu: React.SFC<TabletHeaderMenuProps> = props => {
  /* MobileHeaderMenu Variables */
  const { width } = useWindowSize();
  const [isOpened, setIsOpened] = React.useState(false);
  /* MobileHeaderMenu Callbacks */

  /* MobileHeaderMenu Lifecycle  */

  return (
    <>
      {width < 1180 && width >= 768 && (
        <>
          <Container fluid className="tablet__header">
            <Row className="align-items-center d-flex">
              <Col sm={4} md={4} xs={4} className="header__left d-flex justify-content-start align-items-center">
                <div
                  onClick={() => {
                    setIsOpened(prev => !prev);
                  }}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </Col>
              <Col sm={4} md={4} xs={4} className="header__middle d-flex justify-content-center align-items-center">
                <img src={Logo} alt="OnlinePlasiyer" />
              </Col>
              <Col sm={4} md={4} xs={4} className="header__right d-flex justify-content-end align-items-center">
                {props.isAuthenticated && (
                  <>
                    <UILink to="/profile">
                      <UIUserIcon size={16} />
                    </UILink>
                    <UINotificationIcon size={16} />
                    <UILogoutSecondIcon
                      size={16}
                      onClick={() => {
                        props.logout();
                      }}
                    />
                  </>
                )}
              </Col>
            </Row>
            <div className={`${isOpened ? 'remain__menu-block' : 'remain__menu-none'}`}>
              <Row className="mb-3 border-top">
                <Col className="remain__menu">
                  <ul>
                    <li className="d-flex justify-content-center align-items-center mt-4">
                      <UILink to="/merchant/home">ANASAYFA</UILink>
                    </li>
                    <li className="d-flex justify-content-center align-items-center mt-4">
                      <UILink to="/merchant/customers">SISTEMDEKI MUSTERILER</UILink>
                    </li>
                    <li className="d-flex justify-content-center align-items-center mt-4">
                      <UILink to="/merchant/customers">SIPARISLERI GOR</UILink>
                    </li>
                    <li className="d-flex justify-content-center flex-column align-items-center mt-4">
                      <div className="w-100 d-flex justify-content-center">
                        <UILink to="">
                          CARI ISLEMLER <UIOutlineDownIcon />
                        </UILink>
                      </div>
                      <div className="menu_option w-50">
                        <ul>
                          <li className="w-100 d-flex justify-content-center align-items-center">
                            <UILink to="/merchant/credits">Cariler</UILink>
                          </li>
                          <li className="w-100 d-flex justify-content-center align-items-center">
                            <UILink to="/credit-activities">Cari Ekstreleri</UILink>
                          </li>
                          <li className="w-100 d-flex justify-content-center align-items-center">
                            <UILink to="/obligation-activities">Sistem Cari Ekstreleri</UILink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="d-flex justify-content-center flex-column align-items-center mt-4">
                      <div className="w-100 d-flex justify-content-center">
                        <UILink to="/merchant/customers">
                          URUN ISLEMLERI <UIOutlineDownIcon />
                        </UILink>
                      </div>
                      <div className="menu_option  w-50">
                        <ul>
                          <li className="w-100 d-flex justify-content-center align-items-center">
                            <UILink to="/product-specifies">Tüm Ürünler</UILink>
                          </li>
                          <li className="w-100 d-flex justify-content-center align-items-center">
                            <UILink to="/add-product-specify">Yeni Urun Ekle</UILink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="d-flex justify-content-center flex-column align-items-center mt-4">
                      <div className="w-100 d-flex justify-content-center">
                        <UILink to="/merchant/customers">
                          DESTEK ISLEMLERI <UIOutlineDownIcon />
                        </UILink>
                      </div>
                      <div className="menu_option w-50">
                        <ul>
                          <li className="w-100 d-flex justify-content-center align-items-center">
                            <UILink to="/create-ticket">Destek Talebi Olustur</UILink>
                          </li>
                          <li className="w-100 d-flex justify-content-center align-items-center">
                            <UILink to="/my-tickets">Destek Taleplerim</UILink>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="border-top py-2 remain__footer">
                  <ul className="mb-0">
                    <li>
                      <a href="https://facebook.com/">
                        <UIFacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/">
                        <UITwitterIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/">
                        <UIInstagramIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://facebook.com/">
                        <UILinkedInIcon />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Container>
        </>
      )}
    </>
  );
};
const PureTabletHeaderMenu = React.memo(TabletHeaderMenu);

export { PureTabletHeaderMenu as TabletHeaderMenu };
