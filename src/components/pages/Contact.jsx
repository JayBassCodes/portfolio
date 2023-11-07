export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <div>
      <form action="submit">
        <label>
          Name:
        <input type="text" name="name" id="name" placeholder="Name"></input>
        </label>

        <label>
          Email:
        <input type="text" name="email" id="email" placeholder="Email"></input>
        </label>

        <label>
          Message:
        <input type="text" name="message" id="message" placeholder="Message"></input>
        </label>
        
        <input type="submit" value="Submit"></input>
      </form>
      </div>
    </div>
  );
}
