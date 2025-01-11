import './btnAnim.scss';

const BtnAnimation = ({link}) =>{
   
    return(
        <button class='btn-play'>
            <a class='btn-play__link-tube' href={link} target="_blank"></a>
            <div class='btn-play__circle'></div>
        </button> 
    )
}
export default BtnAnimation