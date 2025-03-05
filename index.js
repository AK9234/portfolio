let contact=document.getelementvyid("contact");
    contact.addeventlistner("click",function(){
        console.log("click me");
        <h2>contact me</h2>
          <h2>Contact Us</h2>
        <form action="submit_form.php" method="POST">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
        </div>

    })
