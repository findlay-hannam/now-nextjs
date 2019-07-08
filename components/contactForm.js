export default function ContactForm() {
  return (
    <form action="https://mailthis.to/findlay.hannam@gmail.com" 
      method="POST"> 
      <input type="text" name="name" placeholder="Your name"/> 
      <input type="email" name="_replyto" placeholder="Your email"/> 
      <input type="submit" value="Send"/> 
    </form>
  );
}

