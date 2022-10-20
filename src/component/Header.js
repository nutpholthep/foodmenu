import '../App.css';
//เมนูด้านบน
function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >ม๋วนใจ๋ หมูกระทะ</div>
            <div onClick={() => props.handleShow(true)}> ตระกร้า
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;