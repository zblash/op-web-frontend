import * as React from 'react';
import { UIOutlineDownIcon } from '../../index';
import { UILink } from '../link';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../images/logo/flogo.png';
import { Colors } from '../../utils/colors';
/* HeaderMenu Helpers */

/* HeaderMenu Constants */

/* HeaderMenu Styles */

/* HeaderMenu Component  */
function HeaderMenu() {
  /* HeaderMenu Variables */

  /* HeaderMenu Callbacks */

  /* HeaderMenu Lifecycle  */

  return (
    <Container fluid className="header__menu">
      <Row>
        <Col xl={2} lg={2} md={2}>
          <div className="logo">
            <img src={Logo} alt="OnlinePlasiyer" />
          </div>
        </Col>
        <Col xl={10} lg={10} md={10}>
          <div className="header__menu__box">
            <ul>
              <li>
                <UILink to="/merchant/home">ANASAYFA</UILink>
              </li>
              <li>
                <UILink to="/merchant/customers">SİSTEMDEKİ MÜŞTERİLER</UILink>
              </li>
              <li>
                <UILink to="">
                  ÜRÜN iŞLEMLERİ <UIOutlineDownIcon color={Colors.gray} />
                </UILink>
                <div className="menu_option">
                  <ul>
                    <li>
                      <UILink to="/product-specifies">Tüm Ürünler</UILink>
                    </li>
                    <li>
                      <UILink to="/add-product-specify">Yeni Urun Ekle</UILink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <UILink to="">
                  CARİ İŞLEMLER <UIOutlineDownIcon color={Colors.gray} />
                </UILink>
                <div className="menu_option">
                  <ul>
                    <li>
                      <UILink to="/merchant/credits">Cariler</UILink>
                    </li>
                    <li>
                      <UILink to="/credit-activities">Cari Ekstreleri</UILink>
                    </li>
                    <li>
                      <UILink to="/obligation-activities">Sistem Cari Ekstreleri</UILink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <UILink to="/orders">SİPARİŞLERİ GÖR</UILink>
              </li>
              <li>
                <UILink to="">
                  DESTEK İŞLEMLERİ <UIOutlineDownIcon color={Colors.gray} />
                </UILink>

                <div className="menu_option">
                  <ul>
                    <li>
                      <UILink to="/create-ticket">Destek Talebi Olustur</UILink>
                    </li>
                    <li>
                      <UILink to="/my-tickets">Destek Taleplerim</UILink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
const PureHeaderMenu = React.memo(HeaderMenu);

export { PureHeaderMenu as HeaderMenu };
