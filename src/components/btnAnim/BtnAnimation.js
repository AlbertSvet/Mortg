import './btnAnim.scss';

const BtnAnimation = ({link}) =>{
   
    return(
        <button className='btn-play'>
            <a className='btn-play__link-tube' href={link} target="_blank"></a>
            <div className='btn-play__circle'></div>
        </button> 
    )
}
export default BtnAnimation