import React, { useState } from 'react'
import Image from 'next/image'
import { bankData } from '../data/data'

const Main: React.FC = () => {
   const [data, setData] = useState<IData>(bankData)

   return (
      <article className="main">
         <section className="main__intro">
            <div className="main__image-wrapper">
               <div className="intro__mobile-img">
                  <Image src="/images/bg-intro-mobile.svg" alt="mobile icon" layout="fill" priority />
               </div>
               <div className="intro__desktop-img">
                  <Image src="/images/bg-intro-desktop.svg" alt="desktop icon" layout="fill" priority />
               </div>
               <div className="intro__mockup-img">
                  <Image src="/images/image-mockups.png" alt="mobile icon api" layout="fill" priority />
               </div>
            </div>
            <div className="intro__content">
               <h1 className="content__title">{data.main.header.title}</h1>
               <p className="content__description">{data.main.header.description}</p>
               <button className="content__invite-btn">Request Invite</button>
            </div>
         </section>
         <section className="main__features">
            <div className="features__header">
               <h1 className="features__header-title">{data.main.features.title}</h1>
               <p className="features__header-desc">{data.main.features.description}</p>
            </div>
            <div className="features__strategies">
               {data.main.features.strategies.map((strategy, index) => (
                  <div key={index}>
                     <div className="strategies-img">
                        <Image src={strategy.image} alt={strategy.title} layout="fill" />
                     </div>
                     <h3 className="strategies__title">{strategy.title}</h3>
                     <p className="strategies__desc">{strategy.description}</p>
                  </div>
               ))}
            </div>
         </section>
         <section className="main__articles">
            <div className="articles__header">
               <h1 className="articles__header-title">{data.main.articles.title}</h1>
            </div>
            <div className="articles__post">
               {data.main.articles.posts.map((post, index) => (
                  <div key={index} className="post__content">
                     <div className="post__img">
                        <Image src={post.image} alt="article image" layout="fill" />
                     </div>
                     <p className="post__createdby">{post.createdBy}</p>
                     <h3 className="post__title">{post.title}</h3>
                     <p className="post__desc">{post.description}</p>
                  </div>
               ))}
            </div>
         </section>
      </article>
   )
}

export default Main
