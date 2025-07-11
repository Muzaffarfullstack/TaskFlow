import './Card.css'

function Card() {
  return (
    <div className='card-container'>
        <div className="card-component">
            <div className="card-header">
                <i className="fa-regular fa-circle-check"></i>
            </div>
            <div className="card-info">
                <h2>0%</h2>
                <p>Overall progress</p>
                <small>0 of 0 completed</small>
            </div>
        </div>

            <div className="card-component">
                <div className="card-header">
                 <i className="fa-solid fa-calendar"></i>
            </div>
            <div className="card-info">
                <h2>0</h2>
                <p>Active Tasks</p>
                <small>Tasks in progess</small>
            </div>
        </div>

            <div className="card-component">
                <div className="card-header">
                <i className="fa-regular fa-circle"></i>
            </div>
            <div className="card-info">
                <h2>0</h2>
                <p>Pending Tasks</p>
                <small>Awaiting completion</small>
            </div>
        </div>

            <div className="card-component">
                <div className="card-header">
                <i className="fa-solid fa-box-archive"></i>
            </div>
            <div className="card-info">
                <h2>0</h2>
                <p>Archived Tasks</p>
                <small>Stored safely</small>
            </div>
        </div>
    </div>
  )
}

export default Card