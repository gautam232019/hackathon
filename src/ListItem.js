import React from 'react'
import './App.css'

const ListItem = () => {
  return (
    <div>
        <div className="doctor-card">
		<div className="info">
			<div className="avatar">
				<img src="//via.placeholder.com/200" alt="doc name"/>
			</div>
      <div className="details">
          <div className="name">Some Popular Name</div>
          <div className="meta-info">
            <span className="sp">Actor-Director</span>
            <span className="prac-area"> Lorem ipsum dolor sit amet.
			 Lorem ipsum dolor sit amet.
			 Lorem ipsum dolor sit amet.
		     Lorem ipsum dolor sit amet.</span>
            <span className="exp-yr">10 years exp.</span>
          </div>
      </div>
		</div>
		<div className="actions">
			{/* <div className="ratings">
				<span className="rating-control">
					<i className="fa fa-star"></i>
					<i className="fa fa-star"></i>
					<i className="fa fa-star-half-o"></i>
					<i className="fa fa-star-o"></i>
					<i className="fa fa-star-o"></i>
				</span>
				<span className="rating-count">000 Ratings</span>
			</div> */}
			<div className="comments">
				<span className="comment-count"><strong>340</strong> Budget</span>
			</div>
			<div className="consultation">
				<span className="fee"><strong>Gurugram</strong>Location</span>
			</div>
			<div className="appo">
				<a href="#" className="btn">Accept</a>
			</div>
			<div className="appo">
				<a href="#" className="btnr">Reject</a>
			</div>
		</div>
		
	</div>
    </div>
  )
}

export default ListItem