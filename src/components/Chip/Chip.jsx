import "./Chip.css"

export function Chip({ label = "", isActive = false }) {
  return (
    <button className="chip">
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
