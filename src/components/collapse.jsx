import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import '../styles/components/collapse.scss'

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <ChevronDown className={isOpen ? 'chevron open' : 'chevron'} size={20} />
      </button>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  )
}

export default Collapse