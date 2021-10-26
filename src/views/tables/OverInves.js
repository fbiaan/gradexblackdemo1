import React, { useContext, useEffect, useState } from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Table} from "reactstrap";

import Context from "./store/Context";

// core components


const OverInves = () => {

    const context = useContext(Context);
    let { empresaSelected }  = context.state;
    const [grilla, setGrilla] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        try {
          //let resp = await fetch(`http://168.181.186.118:9093/democompany/companyover?idcom=${empresaSelected}`);
          let resp = await fetch(`http://168.181.186.118:9093/democompany/invesover?idcom=${empresaSelected}`);
          resp = await resp.json();
          setGrilla(resp.return);
        } catch(error) {
          console.error(error);
        }
      };
      getData();
    }, [empresaSelected]);
      
    

  return (
    <>
      <div className="content">
        <Row>
          <Col className="mb-5" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Investment - {empresaSelected}</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                        <tr>
                        <th>INFO</th>
                        <th>VALUE</th>
                        </tr>
                    </thead>
                    <tbody>
                                {
                                    grilla.map((d) =>{
                                        return (
                                            <tr>
                                                <td>{d.OUTPUT_NAME}</td>
                                                <td>{d.TEXT_VALUE}</td>                                            
                                            </tr>
                                        )
                                    } )  
                                }
                            </tbody>
                    </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
};

export default OverInves;
