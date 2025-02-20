import React from 'react'

const Sect3 = ({ sx, img, st, text, stt, desc, stt2, icon, stt3 }) => {
    return (
        <>
            <div className={sx}>
                <img className={st} src={img} alt="" />
                <h1 className={stt}>{text}</h1>
                <p className={stt2}>{desc}</p>
                <img className={stt3} src={icon} alt="" />
            </div>
        </>
    )
}

export default Sect3