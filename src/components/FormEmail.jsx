import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import emailjs from 'emailjs';

export default className, Form extends Components {
    render() {
        function enviarCorreo(c){
            c.preventDefault();

            email.jssendForm('service_47sboqa', 'template_brarces', c.target, 'user_').then(res=>{
                alert('Tu correo se envió correctamente');
                console.log(res);
            })
        }
        return (
            <form action="/">
              <div className="mb-3 mt-3">
                <label for="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email">
              </div>
              <div className="mb-3">
                <label for="pwd" className="form-label">Password:</label>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd">
              </div>
              <div className="mb-3">
                 <label for="comment">Comments:</label>
                 <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
              <div className="form-check mb-3">
                 <label className="form-check-label">
                 <input className="form-check-input" type="checkbox" name="remember"> Remember me
                 <button type="submit" className="btn btn-primary">Submit</button>
                 </label>
              </div>
            </form>
        )
    }

}

