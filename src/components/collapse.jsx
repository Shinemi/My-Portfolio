import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import '../styles/components/collapse.scss'

const Collapse = ({ title, preview, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <button className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
            <div>
                <h3>{title}</h3>
                {!isOpen && (
                <div className="preview-badges">
                    {preview.map((item) => (
                        <span key={item} className="badge">{item}</span>
                    ))}
                </div>
                )}
            </div>
            <ChevronDown className={isOpen ? 'chevron open' : 'chevron'} size={20} />
            </button>

            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    )
}

export default Collapse