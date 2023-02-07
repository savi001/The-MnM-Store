import styled from "styled-components";

const Contact = () => {
  

  return <Wrapper>
    <h2 className="common-heading">Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.6572789456204!2d85.20394431435835!3d25.68265331813748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d05abddb4dd%3A0xcdffc698daa9b8d4!2sJMk%20Electric%20(Manoj%20Ji%20Boardwale%20)!5e0!3m2!1sen!2sin!4v1673295636076!5m2!1sen!2sin" 
    width="90%" height="400" 
    style={{  borderRadius: "1rem",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}
     }allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
     title="map">
     </iframe>
     <div className="container">
      <div className="contact-form">
      <form action="https://formspree.io/f/mjvdvjda"
  method="POST"
  encType="multipart/form-data" className="contact-inputs">
        <input type={"text"} placeholder={"username"} name="Username" required autoComplete="off" className=""></input>

        <input type={"email"} placeholder={"Email"} name="Email" required autoComplete="off" className=""></input>
        <textarea placeholder="Enter Your Message Here " rows="10" cols={"30"} name="Message" required autoComplete="off"></textarea>
        <input type={"submit"} value={"Send"}></input>


      </form>
      </div>
     </div>
  </Wrapper>;
};
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
