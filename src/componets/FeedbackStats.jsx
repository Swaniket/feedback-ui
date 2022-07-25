import PropTypes from "prop-types"

function FeedbackStats({feedback}) {
    let avg = feedback.reduce((accumulator, curr) => {
        return accumulator + curr.rating
    }, 0) / feedback.length

    avg = avg.toFixed(1).replace(/[.,]0$/, '')


  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(avg) ? 0 : avg }</h4>
    </div>
  )
}

FeedbackStats.prototypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats