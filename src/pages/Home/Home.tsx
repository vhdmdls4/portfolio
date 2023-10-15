import { Row, Col, Container } from 'react-bootstrap'
import computerSvg from '../../assets/computer-image.webp'
import styles from './assets/Home.module.scss'
import { useEffect, useState } from 'react'

export default function Home() {
  const [dots, setDots] = useState<string>('.')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots: string) => {
        return prevDots.length < 3 ? prevDots + '.' : ''
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="d-flex align-items-center h-75">
      <Container>
        <section className="d-flex flex-lg-nowrap flex-wrap flex-sm-row-reverse justify-content-center justify-content-lg-around gap-5">
          <figure>
            <img
              className={styles.vector}
              src={computerSvg}
              alt="Imagem de um notebook com IDE aberta e copo de café ao lado"
            />
          </figure>
          <Row>
            <Col>
              <h3 className={styles.hello}>
                Olá!{' '}
                <span role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h3>
              <h3 className="">Meu nome é Victor Hugo e eu sou</h3>
              <h1 className="">
                <p className={styles.strokeShadow}>
                  <span>F</span>
                  <span>R</span>
                  <span>O</span>
                  <span>N</span>
                  <span>T</span>
                  <span> </span>
                  <span>E</span>
                  <span>N</span>
                  <span>D</span>
                  <span> </span>
                  <span>D</span>
                  <span>E</span>
                  <span>V</span>
                  <span>E</span>
                  <span>L</span>
                  <span>O</span>
                  <span>P</span>
                  <span>E</span>
                  <span>R</span>
                </p>
              </h1>
            </Col>
          </Row>
        </section>
        <section className="mt-5 pt-3 border-top border-2">
          Projetos WIP{dots}
        </section>
      </Container>
    </main>
  )
}
