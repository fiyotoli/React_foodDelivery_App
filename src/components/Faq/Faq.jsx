import React, { useState } from 'react';
import { Accordion, Container, Row, Col, Image } from 'react-bootstrap';
import { FaQuestionCircle, FaPlus } from 'react-icons/fa'; // Importing the circular question mark and plus icons
import faqImage from '../../assets/faq.png'; 
import "./Faq.css"// Adjust the path based on your project structure

const Faq = () => {
  const [activeKey, setActiveKey] = useState("0"); // Set the default active key to open the first accordion item

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle active key
  };

  return (
    <Container fluid className="mt-5 pt-5 ">
      <Row className="align-items-center">
        {/* Left Section: Image */}
        <Col lg={6} md={6} sm={12} className="mb-4">
          <Image src={faqImage} alt="FAQ" fluid rounded />
        </Col>

        {/* Right Section: FAQ Accordion */}
        <Col lg={6} md={6} sm={12}>
          <h2 className="mb-4 fs-1 text-danger font-weight-bolder">F<span className='text-dark'>A</span>Q</h2>
          <Accordion activeKey={activeKey} flush> {/* Added flush to remove borders */}
            {[
              {
                question: "What is the delivery time?",
                answer: "Our typical delivery time ranges between 30 to 45 minutes depending on your location and the time of order.",
                eventKey: "0",
              },
              {
                question: "Can I cancel my order?",
                answer: "Yes, you can cancel your order within 5 minutes after placing it by contacting our support team.",
                eventKey: "1",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept various payment methods, including credit cards, debit cards, and cash on delivery.",
                eventKey: "2",
              },
              {
                question: "Do you have vegetarian options?",
                answer: "Yes, we offer a wide variety of vegetarian dishes to cater to your dietary needs.",
                eventKey: "3",
              },
            ].map(({ question, answer, eventKey }) => (
              <Accordion.Item eventKey={eventKey} key={eventKey} style={{ border: 'none' }}> {/* Remove default border */}
                <Accordion.Header onClick={() => handleToggle(eventKey)} style={{ borderBottom: '1px solid #ddd' }}>
                  <FaQuestionCircle className="me-2 text-danger" size={20} /> {/* Circular question mark icon in danger color */}
                  <span className="flex-grow-1 text-start">{question}</span>
                  <FaPlus className="text-danger" size={20} /> {/* Always show the plus icon */}
                </Accordion.Header>
                <Accordion.Body>
                  {answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
