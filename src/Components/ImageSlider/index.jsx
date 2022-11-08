import { useState } from 'react'

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex].url})`,
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div class="sliderStyles">
      <div class="leftArrowStyles" onClick={goToPrevious}>
        ❰
      </div>
      <div class="rightArrowStyles" onClick={goToNext}>
        ❱
      </div>
      <div style={slideStyles}></div>
    </div>
  )
}
export default ImageSlider
