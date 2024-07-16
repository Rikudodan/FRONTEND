import '../index.css'
import ApiExterna from './ApiExterna'

export const CuerpoApi = () => {

  return (
    <div className='container card bg-dark'>
        <div>
            <div>
              <div className="form-group">
                    <div className='h1 text-white'>tu numero de la suerte del dia de hoy es:
                      <ApiExterna/>
                    </div>                    
              </div>
            </div>
        </div>
    </div>
  )
}
