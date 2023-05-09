import Galeria from '../../components/Galeria'
import Pagina from '../../components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'
import Rodape from '../../components/Rodape'
import apiAnime from '../../services/apiDeputados'

const detalhes = ({ anime }) => {
    console.log(anime)

    return (
        <Pagina titulo={anime.title}>
           
            <Container>
                <Row xs='auto'>

                    <Col sm md={4}>
                        <Card className='border-danger' >
                            <Card.Header className='bg-danger'>Foto</Card.Header>
                            <Card.Img variant="top" src={anime.images.jpg.large_image_url} />
                            <Card.Body>
                                <Card.Title><Link className="btn btn-primary " href={anime.images.jpg.large_image_url}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-front" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z"/></svg> Ver maior</Link></Card.Title>
                            </Card.Body>
                        </Card>
                        <br></br>
                        <Link className="btn btn-danger" href={'/anime'}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg> Voltar </Link>
                        <br></br>
                        <br></br>
                        <br></br>
                    </Col>


                    <Col sm md={8}>
                    <Card className='border-danger' >
                            <Card.Header className='bg-danger'>{anime.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                </Card.Title>
                                    <p><strong>Episodios: </strong> {anime.episodes}</p>
                                    <p><strong>Status: </strong> {anime.status}</p>
                                    <p><strong>Ano: </strong> {anime.year}</p>
                                    <p><strong>Duração: </strong> {anime.duration}</p>
                                    <p><strong>Score: </strong> {anime.score}</p>
                                    <br></br>
                                    <p><lowcase>{anime.synopsis}</lowcase></p>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
                 


                </Container>



          
        </Pagina>
    )
}

export default detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const res = await apiAnime.get('/anime/' + id)

    const anime = res.data.data



    return {

        props: { anime }, // will be passed to the page component as props
    }
}