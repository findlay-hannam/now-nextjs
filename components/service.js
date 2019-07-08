export default function Service({ title, text }) {
  return (
    <li key={title}>
      <h2>{title}</h2>
      <p>{text}</p>
    </li>
  );
}