import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ShippingAdress = ({ show, handleClose, status }) => {


    const submit = (e) => {
      e.preventDefault()
      status('Delivered')
      handleClose()
  }



  return (
    <Offcanvas 
    show={show} 
    onHide={handleClose}
    placement="end"
    >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Shipping Adress</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
    <Form onSubmit={submit}>

        <Form.Group className="mb-3" id="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" 
        required/>
        </Form.Group>

        <Form.Group className="mb-3" id="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" required/>
        </Form.Group>

        <Form.Group className="mb-3" id="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter address" required/>
        </Form.Group>

        <Form.Group className="mb-3" id="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter city" required/>
        </Form.Group>

        <Form.Group className="mb-3" id="formBasicZip">
        <Form.Label>ZipCOde</Form.Label>
        <Form.Control type="text" placeholder="Enter zip" required/>
        </Form.Group>

        <Form.Group className="mb-3" id="formBasicCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Enter country" required />
        </Form.Group>

        <Form.Group className="mb-3" id="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="text" placeholder="Enter phone" required/>
        </Form.Group>

        <Form.Group className="mb-3" id="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>
        </Form.Group>
      
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
     
    </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShippingAdress
