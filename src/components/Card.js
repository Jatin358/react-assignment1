import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Dashboad from "./Dashboard";
import '../component.css';
import axios from "axios";

function CardComponent(props){

    const [id,setId] = useState(1);

    function Addnews(url , news) {
        const headers = {
             'Content-Type': 'application/json'
        };
        return axios.post(url, news, {headers})
    }

    return (
        <div className="col-4">
            <Card className="mb-4 mt-4" style={{ width: '100%' }}>
                <Card.Img src={props.urlToImage} variant="top" />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Title>
                        {props.author}
                    </Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary" className="button mb-3" onClick={()=>{
                        const data = {...props,id:id}
                        // Addnews('http://localhost:3000/readnow',data).then(res =>{
                        //     console.log(res)
                        //     setId(id+1)

                        // })
                        setId(id+1);
                        console.log(id);
                    }} >Read Later</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default CardComponent;