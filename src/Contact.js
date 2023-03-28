import Header from "./Header";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Btt from "./Btt";

function Contact() {
    const [input_name, setInputName] = useState();
    const [Email_input, setEmail] = useState();
    const [sub_input, set_sub] = useState([]);
    const [Message, set_message] = useState([]);
   
    const btn_click = () => {
        if (input_name == "" || input_name == undefined) {
            alert("Name should not be empty")
        } else if (Email_input == "" || Email_input == undefined) {
            alert("Email should not be empty")
        }
        else if (sub_input == "" || sub_input == undefined) {
            alert("Subject should not be empty")
        }
        else if (Message == "" || Message == undefined) {
            alert("Message should not be empty")
        } else {
            alert("everything is ok ");
        }

    }
    return (
      <div classname='contact'>
        <Header />
        <h1><a href='contact'>Contact</a></h1> 
        <div class="container-fluid page-header">
        <h1 class="display-3 text-uppercase text-white mb-3">Contact</h1>
        <div class="d-inline-flex text-white">
            <h6 class="text-uppercase m-0"><a href="">Home</a></h6>
            <h6 class="text-white m-0 px-3">/</h6>
            <h6 class="text-uppercase text-white m-0">Contact</h6>
        </div>
    </div>
   
    <div class="container-fluid py-6 px-5">
        <div class="text-center mx-auto mb-5" >
            <h1 class="display-5 text-uppercase mb-4">Please <span class="text-primary">Feel Free</span> To Contact Us</h1>
        </div>
        <div class="row gx-0 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0" >
                <iframe class="w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    frameborder="0" ></iframe>
            </div>
            <div class="col-lg-6">
                <div class="contact-form bg-light p-5">
                    <div class="row g-3">
                        <div class="col-12 col-sm-6">
                            <input onChange={(e) => setInputName(e.target.value)} type="text" class="form-control border-0" placeholder="Your Name" />
                        </div>
                        <div class="col-12 col-sm-6">
                            <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control border-0" placeholder="Your Email" />
                        </div>
                        <div class="col-12">
                            <input onChange={(e) => set_sub(e.target.value)} type="text" class="form-control border-0" placeholder="Subject" />
                        </div>
                        <div class="col-12">
                            <textarea onChange={(e) => set_message(e.target.value)} class="form-control border-0" rows="4" placeholder="Message"></textarea>
                        </div>
                        <div class="col-12">
                            <button onClick={() => btn_click()} class="btn btn-primary w-100 py-3" type="submit" >Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Btt />
      <Footer />
      </div>
      
     
    );
  }
  export default Contact;
  