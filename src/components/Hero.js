import React, { useEffect, useState } from 'react'
import { homes } from '../data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Hero() {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex(index === homes.length - 1 ? 0 : index + 1)
    console.log(index)
  }
  const prev = () => {
    setIndex(index <= 0 ? homes.length - 1 : index - 1)
    console.log(index)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      next()
    }, 3000)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <main className='hero'>
      {homes.map((home, _idx) => {
        const { location, desc, image } = home
        return (
          <section key={_idx} className='hero__container'>
            {_idx === index && (
              <>
                <img className='hero__image' src={image} alt='Home' />

                <div className='hero__content '>
                  <h1 className='hero__title'>{location}</h1>
                  <p className='hero__description'>{desc}</p>
                </div>

                <div className='hero__sliderButtons'>
                  <button className='hero__leftButton'>
                    <FaChevronLeft onClick={prev} />
                  </button>
                  <button className='hero__rightButton'>
                    <FaChevronRight onClick={next} />
                  </button>
                </div>
              </>
            )}
          </section>
        )
      })}
    </main>
  )
}

export default Hero
