import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/pic 1 new.png'
import IMG2 from "../../assets/pic 2 new.png"
import IMG3 from "../../assets/pic 3 new.png"
// import IMG4 from "../../assets/portfolio4.jpg"
// import IMG5 from "../../assets/portfolio5.png"
// import IMG6 from "../../assets/portfolio6.jpg"


const data=[
  {
    id:1,
    image:IMG1,
    title:'Crypto currency dashboard and financial visualization',
    github:'https://github.com',
    demo:'https://pappuparvez1112.github.io/responsive-shoe-fashion/'
  },
  {
    id:2,
    image:IMG2,
    title:'Crypto currency dashboard and financial visualization',
    github:'https://github.com',
    demo:'https://pappuparvez1112.github.io/panda-ecommerce/'
  },
  {
    id:3,
    image:IMG3,
    title:'Crypto currency dashboard and financial visualization',
    github:'https://github.com',
    demo:'https://pappuparvez1112.github.io/personal-web-protfolio/'
  },
  // {
  //   id:4,
  //   image:IMG4,
  //   title:'Crypto currency dashboard and financial visualization',
  //   github:'https://github.com',
  //   demo:'https://google.com'
  // },
  // {
  //   id:5,
  //   image:IMG5,
  //   title:'Crypto currency dashboard and financial visualization',
  //   github:'https://github.com',
  //   demo:'https://google.com'
  // },
  // {
  //   id:6,
  //   image:IMG6,
  //   title:'Crypto currency dashboard and financial visualization',
  //   github:'https://github.com',
  //   demo:'https://google.com'
  // }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
     
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live demo</a>
              </div>
            </article>
          
            )
          })
        }
       {/* <article  className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="http://google.com" className="btn btn-primary" target='_blank' rel="noreferrer">Live demo</a>
            </div>
          </article>
          <article  className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="http://google.com" className="btn btn-primary" target='_blank' rel="noreferrer">Live demo</a>
            </div>
          </article>
          <article  className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="http://google.com" className="btn btn-primary" target='_blank' rel="noreferrer">Live demo</a>
            </div>
          </article>
          <article  className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="http://google.com" className="btn btn-primary" target='_blank' rel="noreferrer">Live demo</a>
            </div>
          </article>
          <article  className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="http://google.com" className="btn btn-primary" target='_blank' rel="noreferrer">Live demo</a>
            </div>
          </article>
          <article  className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>title</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com" className="btn" target='_blank' rel="noreferrer">Github</a>
              <a href="http://google.com" className="btn btn-primary" target='_blank' rel="noreferrer">Live demo</a>
            </div>
          </article> */}
      </div>
    </section>
  )
}

export default Portfolio
