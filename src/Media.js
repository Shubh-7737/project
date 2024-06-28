import './Media.css';
function Media(props){
    return(  
      <div className=' Box1'>
      <video  autoPlay loop muted>
      <source src={props.video} type="video/mp4"/>
      </video>
        <div class='Box2'> {props.content} <a href='#more'>more..</a>
        </div>
      </div>
    );
}      export default  Media;