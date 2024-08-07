import React from 'react'

const BlogListing = () => {
  return (
    <div>
      <article className="overflow-hidden hover:shadow-xl rounded-lg border border-gray-100 bg-white shadow-sm">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg text-left font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-left text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>

          {/* <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Find out more

            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a> */}
          <div className='flex mt-2'>
          <div className="hidden sm:block sm:shrink-0">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="size-12 rounded-3xl object-cover shadow-sm"
            />
          </div>
                        <a
                href="#"
                className="relative block overflow-hidden ml-2 p-2"
              >
                {/* <span
                  className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span> */}

                {/* <div className="sm:flex sm:justify-between sm:gap-4"> */}

                
                  
                    {/* <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                      Building a SaaS product as a software developer
                    </h3> */}
                    <div className="flex">
                    <dt className="text-xs font-medium text-gray-500 text-left">By</dt>
                    <dd className="ml-1 text-xs font-medium text-gray-600">John Doe</dd>
                  </div>
                    {/* <p className="mt-1 text-xs font-medium text-gray-600 text-left">By John Doe</p> */}
                  

                  
                {/* </div> */}

                {/* <div className="mt-4">
                  <p className="text-pretty text-sm text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                    maiores deleniti consectetur nobis et eaque.
                  </p>
                </div> */}

                {/* <dl className="mt-6 flex gap-4 sm:gap-6"> */}
                  <div className="flex">
                    <dt className="text-xs font-medium text-gray-600 text-left">Published</dt>
                    <dd className="ml-1 text-xs text-gray-500">31st June, 21</dd>
                  </div>

                  
                {/* </dl> */}
              </a>

              </div>
              </div>
        {/* </div> */}
      </article>
        
        
      
    </div>
  )
}

export default BlogListing
