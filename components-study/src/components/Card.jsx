import {card}from './Card.module.css'
export default function Card(props){
    const {title,content}=props;
  return(
    <div className={card}>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
  );
}