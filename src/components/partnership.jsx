import React from 'react'

export const Partners = () => {
    const imgFunc = (img) =>{
        return {img}
    }
    const imgArr = [
        imgFunc('cgc.png'),
        imgFunc('cmc.png'),
        imgFunc('zz.png'),
        imgFunc('ang.svg')
    ]
  return (
    <div className="partner" id='pt'>
        <div className="container">
            <div className="p-head text-center text-light p-5">
                <h1>Valued Partnerships</h1>
            </div>
            <div className="row">
                <div className="col-12 p-card">
                    <div className="row align-items-center">
                        {imgArr.map((i, index) => (
                            <div className="col-lg-3 col-sm-6 text-center -col-md-4" key={index}>
                            <div className="p-img p-2">
                                <img src={i.img} alt="ang venture" className='img-fluid' />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
