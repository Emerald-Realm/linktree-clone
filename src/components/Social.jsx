export default function Social({ bundled }) {
  return (
    <div>
      <a href={bundled.link}>
        <i className={bundled.class}></i>
      </a>
    </div>
  )
}