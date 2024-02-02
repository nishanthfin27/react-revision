import React from 'react'

const Card = ({userName = 'Nishanth', post = 'not assigned yet', imgUrl = '', myArr=[1,2,3,4,5,6,7,8,9]}) => {
  return (
    <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imgUrl} alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, natus.
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {userName} 
                <ul>
                {myArr.map((item) => {
                    console.log(item);
                    return <li key={item}>{item}</li>
                })}
                </ul>
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card