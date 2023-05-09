import Pagina from '../../components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import Rodape from '../../components/Rodape'
import apiAnime from '@/services/apiDeputados'

const detalhes = ({ genero }) => {

    console.log(genero)

    return (
        <Pagina titulo='Gêneros'>

            <Row>
                <Col md={10}>

                    <ul>
                        {genero.map(item => (
                            <li>
                                <div>{item.name},({item.count})</div>
                            </li>
                        ))}

                    </ul>
                    <br></br>
                    <br></br>
                    <br></br>

                </Col>
            </Row>
        </Pagina>
    )
}

export default detalhes

export async function getServerSideProps(context) {

    const resultado = await apiAnime.get('/genres/anime')

    const genero = resultado.data.data


    return {

        props: { genero }, // will be passed to the page component as props
    }
}