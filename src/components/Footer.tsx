import { Container, Row, Col } from 'react-bootstrap'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import styles from './assets/Footer.module.scss'

function Footer() {
  let date = new Date()
  let currentYear = date.getFullYear()
  return (
    <footer className="w-100">
      <Container className="footer">
        <Row className="flex-row-reverse">
          <Col md={4} className="">
            <ul
              className={`d-flex gap-4 justify-content-center justify-content-md-end ps-sm-0 ${styles.footerIconList}`}
              style={{ textDecoration: 'none', listStyle: 'none' }}
            >
              <li>
                {' '}
                <a href="https://github.com/vhdmdls4" target="_blank">
                  <AiFillGithub
                    size={40}
                    alt="Ícone do Github"
                    aria-label="Github icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/vhdmdls4" target="_blank">
                  <AiOutlineTwitter
                    size={40}
                    alt="Ícone do Twitter"
                    aria-label="Twitter icon"
                  />
                </a>
              </li>
              <li>
                {' '}
                <a href="https://www.linkedin.com/in/vhmdl/" target="_blank">
                  <FaLinkedinIn
                    size={40}
                    alt="Ícone do LinkedIn"
                    aria-label="LinkedIn icon"
                  />
                </a>
              </li>
              <li>
                {' '}
                <a
                  href="https://www.instagram.com/vhmartins07/"
                  target="_blank"
                  aria-label="Instagram icon"
                >
                  <AiFillInstagram size={40} alt="Ícone do Instagram" />
                </a>
              </li>
            </ul>
          </Col>
          <Col
            md={8}
            className="d-flex align-items-center justify-content-center justify-content-md-start"
          >
            <h5>Copyright © {currentYear} Victor Hugo Martins</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
