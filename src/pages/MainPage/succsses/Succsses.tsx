import type { ISuccess } from '../../../interfaces/interfaces'
import './Succsses.scss'

interface SuccessProps {
  data: ISuccess[]
  title: string
}
const Succsses = ({data, title}: SuccessProps) => {
  return (
    <div className="succsses-container">
      <h1 className="succsses-title">{title}</h1>
      <div className="succsses-cards">
        {data.map((item) => (
          <div key={item.id} className="succsses-card">
            <div className="succsses-card-title">{item.title}</div>
            <div className="succsses-card-subtitle">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Succsses
