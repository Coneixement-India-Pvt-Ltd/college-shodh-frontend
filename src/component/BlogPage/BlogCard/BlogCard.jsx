import React from 'react'

const BlogCard = () => {
  return (
    <div>
        <article className="flex transition hover:shadow-xl rounded-lg border border-gray-100 bg-white shadow-sm">
        <div className="hidden sm:block sm:basis-56">
            <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="aspect-square h-full w-full object-cover"
            />
        </div>

        <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 sm:border-l-transparent sm:p-6">
            <a href="#">
                <h3 className="font-bold uppercase text-gray-900 text-left">
                Finding the right guitar for your style - 5 tips
                </h3>
            </a>

            <time datetime="2022-10-10" className="block text-xs text-gray-500 text-left"> 10th Oct 2022 </time>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700 text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
            </div>

            <div className="sm:flex sm:items-end sm:justify-end">
            <a
                href="#"
                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
                Read Blog
            </a>
            </div>
        </div>
        </article>

        <div>
            <p className='text-left mt-10 font-bold'>Select the topic below to know more</p>
            
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-4 mt-5">
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            <div className="h-16  bg-gray-200 rounded-lg"><p className='p-4'>Topic</p></div>
            
        </div>

    </div>

    )
}

export default BlogCard
