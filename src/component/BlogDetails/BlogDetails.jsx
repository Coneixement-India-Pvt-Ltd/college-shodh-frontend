import React from 'react';

const BlogDetails = () => {
  return (
    <div className=" mx-auto p-6 bg-white mt-5 mb-8 ml-40 mr-40 text-left">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 ">
        Top 10 Colleges to Consider for Your Engineering Degree
      </h1>
      
      {/* <p className="text-gray-600 text-sm mb-2">
        By <span className="font-semibold">Jane Doe</span> | Published on August 15, 2024
      </p> */}
      
      <img 
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
        alt="College campus" 
        className="w-full h-80 object-cover rounded-md mb-6"
      />
      
      <p className="text-lg text-gray-700 leading-relaxed mb-6 ">
        Choosing the right college is one of the most crucial decisions for students aspiring to become engineers. With numerous options available, it can be overwhelming to find the best fit. This blog post highlights the top 10 colleges you should consider for your engineering degree.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">1. Massachusetts Institute of Technology (MIT)</h2>
      <p className="text-gray-700 mb-4 ">
        MIT has consistently been ranked as the top engineering school in the world. Known for its rigorous academics and cutting-edge research facilities, MIT offers students an unparalleled education in engineering.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">2. Stanford University</h2>
      <p className="text-gray-700 mb-4 ">
        Stanford University, located in the heart of Silicon Valley, is another excellent choice for engineering students. The university's close ties to the tech industry provide students with numerous internship and job opportunities.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 ">3. California Institute of Technology (Caltech)</h3>
      <p className="text-gray-700 mb-4 ">
        Caltech is renowned for its focus on science and engineering. Despite its small size, the institute has produced a significant number of Nobel laureates and is known for its high-quality education and research.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4 ">4. University of California, Berkeley</h3>
      <p className="text-gray-700 mb-4 ">
        UC Berkeley offers a wide range of engineering programs and is particularly known for its contributions to technology and innovation. The campus environment fosters a culture of collaboration and creativity.
      </p>

      <h4 className="text-lg font-semibold text-gray-800 mb-4 ">Choosing the Right College for You</h4>
      <p className="text-gray-700 mb-4 ">
        While these are some of the top engineering colleges, it's important to choose a college that fits your personal goals and needs. Consider factors like campus culture, location, financial aid, and available programs.
      </p>

      <p className="text-gray-700 mb-6 ">
        Remember, the college you choose will shape your academic journey and professional career. Take the time to research and visit campuses, talk to current students, and explore what each college has to offer.
      </p>

      <div className='flex mt-2 mb-5 border-4 border-slate-500'>
          <div className="hidden sm:block sm:shrink-0 p-2">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              className="size-16 rounded-3xl object-cover shadow-sm"
            />
          </div>
          <a
            href="#"
            className="relative block overflow-hidden ml-2 p-4"
          >
              <div className="flex">
                <dt className="text-s font-medium text-gray-500 text-left">By</dt>
                <dd className="ml-1 text-s font-medium text-gray-600">John Doe</dd>
              </div>
              <div className="flex">
                <dt className="text-s font-medium text-gray-600 text-left">Published</dt>
                <dd className="ml-1 text-s text-gray-500">31st June, 21</dd>
              </div>  
          </a>
      </div>

      <a 
        href="/blogs" 
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Back to Blogs
      </a>
    </div>
  );
};

export default BlogDetails;
