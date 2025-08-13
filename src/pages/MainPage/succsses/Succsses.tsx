import type { ISuccess } from '../../../interfaces/interfaces'
import './Succsses.scss'

interface SuccessProps {
  data: ISuccess[]
}
const Succsses = ({data}: SuccessProps) => {
  return (
    <div className="succsses-container">
      <h1 className="succsses-title">Successes of the Office</h1>
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
