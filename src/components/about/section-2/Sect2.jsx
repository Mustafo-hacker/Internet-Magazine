import React from 'react'

const Sect2 = ({img, text,desc, sx, st, stt, stt2}) => {
  return (
    <div>
        <div className={sx}>
            <img className={st} src={img} alt="" />
            <h1 className={stt}>{text}</h1>
            <p className={stt2}>{desc}</p>
        </div>
    </div>
  )
}

export default Sect2