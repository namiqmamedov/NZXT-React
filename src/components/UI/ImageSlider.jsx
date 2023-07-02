import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../../styles/slider.css"
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import  'lightgallery/css/lightgallery.css'
import  'lightgallery/css/lg-thumbnail.css'
import  LightGallery  from 'lightgallery/react/Lightgallery.es5';
import h9P01 from '../../assets/images/product/h9-01.png'
import h9P02 from '../../assets/images/product/h9-02.png'
import h9P03 from '../../assets/images/product/h9-03.png'
import h9P04 from '../../assets/images/product/h9-04.png'
import h9P05 from '../../assets/images/product/h9-05.png'
import h9P06 from '../../assets/images/product/h9-06.png'

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

export default function App() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <LightGallery speed={500}
                    plugins={[lgThumbnail]} elementClassNames="keen-slider">
        <a className="keen-slider__slide number-slide item-slider-main" href={h9P01}>
        <img src={h9P03} />
        </a>
        <a className="keen-slider__slide number-slide item-slider-main" href={h9P02}>
        <img src={h9P02} />
        </a>
        <a className="keen-slider__slide number-slide3 item-slider-main" href={h9P03}>
        <img src={h9P03} />
        </a>
        <a className="keen-slider__slide number-slide3 item-slider-main" href={h9P04}>
        <img src={h9P04} />
        </a>
        <a className="keen-slider__slide number-slide3 item-slider-main" href={h9P05}>
        <img src={h9P05} />
        </a>
        <a className="keen-slider__slide number-slide3 item-slider-main" href={h9P06}>
        <img src={h9P06} />
        </a>
        </LightGallery>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <a className="keen-slider__slide number-slide item-slider">
        <img src={h9P01} />
        </a>
        <a className="keen-slider__slide number-slide item-slider">
        <img src={h9P02} />
        </a>
        <a className="keen-slider__slide number-slide item-slider">
        <img src={h9P03} />
        </a>
        <a className="keen-slider__slide number-slide item-slider">
        <img src={h9P04} />
        </a>
        <a className="keen-slider__slide number-slide item-slider">
        <img src={h9P05} />
        </a>
        <a className="keen-slider__slide number-slide item-slider">
        <img src={h9P06} />
        </a>
      </div>
    </>
  )
}
