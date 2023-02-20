const contactPage = () => {
  return /*html*/ `
 <!-- Contact Section -->
 <section id="contact" class="position-relative section">
 <div class="container text-center">
   <h6 class="subtitle">Contact</h6>
   <h6 class="section-title mb-4">Get In Touch With Me</h6>
   <p class="mb-5 pb-4">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias
     dignissimos. <br />
     rerum commodi corrupti, temporibus non quam.
   </p>

   <div class="contact text-left">
     <div class="form">
       <h6 class="subtitle">Available 24/7</h6>
       <h6 class="section-title mb-4">Get In Touch</h6>
       <form>
         <div class="form-group">
           <input
             type="email"
             class="form-control"
             id="exampleInputEmail1"
             aria-describedby="emailHelp"
             placeholder="Enter email"
             required
           />
         </div>
         <div class="form-group">
           <input
             type="password"
             class="form-control"
             id="exampleInputPassword1"
             placeholder="Password"
             required
           />
         </div>
         <div class="form-group">
           <textarea
             name="contact-message"
             id=""
             cols="30"
             rows="5"
             class="form-control"
             placeholder="Message"
           ></textarea>
         </div>
         <button
           type="submit"
           class="btn btn-primary btn-block rounded w-lg"
         >
           Send Message
         </button>
       </form>
     </div>
     <div class="contact-infos">
       <div class="item">
         <i class="ti-location-pin"></i>
         <div class="">
           <h5>Location</h5>
           <p>12345 Fake ST NoWhere AB Country</p>
         </div>
       </div>
       <div class="item">
         <i class="ti-mobile"></i>
         <div>
           <h5>Phone Number</h5>
           <p>(123) 456-7890</p>
         </div>
       </div>
       <div class="item">
         <i class="ti-email"></i>
         <div class="mb-0">
           <h5>Email Address</h5>
           <p>info@website.com</p>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div id="map">
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.8606674440425!2d105.93787906531286!3d20.30603358639433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136784c9b00587d%3A0x9ad227250a60b0db!2zUGhvbmcgUGjDuiwgTmluaCBHaWFuZywgSG9hIEzGsCwgTmluaCBCw6xuaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1676713923844!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
<!-- End of Contact Section -->

  `;
};
export default contactPage;
