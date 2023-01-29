import React, { useState } from "react";

// import Form from "./Form";
// import Portal from "./Portal";
import "./App.css";

export default function Popuper() {
  const [modalOpen, setModalOpen] = useState(false);

  // return (
  //   <div className="pop">
  //     {modalOpen && (
  //       <Portal>
  //         <Form toggleModal={setModalOpen} />
  //       </Portal>
  //     )}
  //     <div className="container">
  //       <h1>Let's Learn React Portals!</h1>
  //       <button onClick={() => setModalOpen(!modalOpen)}>Show Modal</button>
  //     </div>
  //   </div>
  // );
}
