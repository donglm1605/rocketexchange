import React,{useRef,useEffect} from 'react';
import CommonSection from '../components/ui/Common-section/CommonSection';
import { Container, Row, Col } from "reactstrap";

const Contact = () => {

  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
      <CommonSection tittle={"Contact"} />
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' className="m-auto text-center">
              <h2>Please leave your comments</h2>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="form_input">
                    <input 
                      type="text" 
                      placeholder='Enter your name:' 
                      ref={nameRef}
                    />
                  </div>

                  <div className="form_input">
                    <input
                      type="email" 
                      placeholder='Enter your email:' 
                      ref={emailRef}
                    />
                  </div>

                  <div className="form_input">
                    <input 
                      type="text" 
                      placeholder='Enter subject:' 
                      ref={subjectRef}
                    />
                  </div>

                  <div className="form_input">
                    <textarea 
                      rows="7" 
                      placeholder='Write message:' 
                      ref={messageRef}
                    >
                    </textarea>
                  </div>

                  <button 
                    className="send__btn" 
                    style={{
                      border:'none', 
                      padding:'7px 25px', 
                      borderRadius:'5px',
                      marginTop:'20px',
                    }}
                  >
                    Send a Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;