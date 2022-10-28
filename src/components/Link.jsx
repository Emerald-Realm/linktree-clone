export default function Links({bundled}) {
  return (
    <>
      <a className="btn-link" href={bundled.link}>
      <p>{bundled.text}</p>
      </a>
    </>
  )
}