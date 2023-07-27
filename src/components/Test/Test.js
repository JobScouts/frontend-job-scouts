// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import Company from "../Assest/company.jpg";
// import "./Test.css";

// const Test = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
  
//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title className="ModalTitle">Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="ModalBody">
//           <div className="leftModal">
//             <img src={Company} alt="image" className="ModalImage" />
//           </div>
//           <div className="rightModal">
//             <h5>employer_name</h5>
//             <div className="hrContainer">
//               <hr className="centeredHr" />
//             </div>
//             <p>Investing time and effort into crafting a compelling CV can significantly enhance 
//               your chances of success in the job market. </p>
//               <a href="">Our WebSite</a>

//           </div>

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose} className="ModalButton">
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose} className="ModalButton">
//             Applay To Job
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Test;
