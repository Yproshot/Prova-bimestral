import Pagina from "../../components/Pagina";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col, Table } from "react-bootstrap";
import Link from "next/link";
import apiAnime from "../../services/apiDeputados";

const index = (props) => {
    console.log(props.anime)

    return (
        <Pagina titulo="Animes">
            <Row  md={4}>
            <Col sm md={12}>
                    <br></br>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Detalhes</th>
                            <th>Titulo</th>
                            <th>Duração</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                       {props.anime.map(item=>(

                           <tr>
                                <td><Link href={'../anime/'+item.mal_id}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></Link></td>
                                <td>{item.title}</td>
                                <td>{item.duration}</td>
                                <td>{item.year}</td>
                            </tr>
                         ))}
                        

                    </tbody>
                </Table>
                </Col>

               
            </Row>
            <br></br>
            <br></br>
            <br></br>
        

        </Pagina>
    )
}


export default index

export async function getServerSideProps(context) {

    const resultado = await apiAnime.get('/anime')

    const anime = resultado.data.data

    return {
        props: { anime }, // will be passed to the page component as props
    }
}