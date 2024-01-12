import React from 'react';
import  Comments  from './types/Comments';
import  './styles/index.css';
import peso from '../assets/icon/peso.png';
import speed from '../assets/icon/velocimetro.png';
import hp from '../assets/icon/hp.png';
import topSpeed from '../assets/icon/topSpeed.png';
import traction from '../assets/icon/transmition.png';
import torque from '../assets/icon/torque.png';
interface CommentsCardProps {
  comment: Comments;
}

const CommentsCard: React.FC<CommentsCardProps> = ({ comment }) => {
  return (
    <div  id={comment.id.toString()}>
      <div>
        <p className='containerText'>
          <img className='containerIcon' src={speed} alt="speed" />
          <strong>{comment.speed}:</strong> {comment.body_speed}
        </p>
        <p className='containerText'>
          <img className='containerIcon' src={hp} alt="hp" />
          <strong>{comment.hp}: </strong> {comment.body_hp}
        </p>
        <p className='containerText'>
          <img className='containerIcon' src={topSpeed} alt="topSpeed" />
          <strong>{comment.topSpeed}: </strong> {comment.body_topSpeed}
        </p>
        <p className='containerText'>
          <img className='containerIcon' src={peso} alt="weight" />
          <strong>{comment.weight}: </strong> {comment.body_weight}
        </p>
        <p className='containerText'>
          <img className='containerIcon' src={traction} alt="traction" />
          <strong>{comment.traction}: </strong> {comment.body_traction}
        </p>
        <p className='containerText'>
          <img className='containerIcon' src={torque} alt="torque" />
          <strong>{comment.torque}:</strong> {comment.body_torque}
        </p>
      </div>
    </div>
  );
};

export default CommentsCard;