import { useNavigate } from 'react-router-dom';
import type { ISuccess } from '../../../interfaces/interfaces'
import './Succsses.scss'

interface SuccessProps {
  data: ISuccess
  title: string
}
const Succsses = ({data, title}: SuccessProps) => {
  const navigate = useNavigate();
  return (
    <div className="succsses-container">
      <h1 className="succsses-title">{title}</h1>
      <div className="succsses-cards">
        {
          <div key={data.id} className="succsses-card">
            <div className="succsses-card-title">{data.title}</div>
            <div className="succsses-card-subtitle">{data.subtitle}</div>
            <button className='success-btn' onClick={() => navigate(data.pageUrl)}>button</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Succsses
