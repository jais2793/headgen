import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    const blogData = {
        _id: 'skdlfjksd',
        title: `21 Best “Meet the Team” Examples and Why They Work
        Updated on May 9, 2024`,
        blogImage: 'https://www.themultiverse.ai/_next/image?url=https%3A%2F%2Fthe-multiverse-ai.ghost.io%2Fcontent%2Fimages%2F2023%2F11%2Fno-watermark---team-gallery--1-.webp&w=1920&q=75',
        blogContent: `The "Meet the Team" gallery is a dynamic display showcasing the team's diversity and skills. This gallery goes beyond a simple staff introduction page; it presents an in-depth look at the team member bios, offering stories of dedication and expertise that resonate with visitors. The "Employee Spotlight Gallery" and "Team Bio Showcase" sections are particularly engaging, providing a rich narrative of each team member.

        Sections like "The Team Members" and "Employee Professional Profiles" are designed to connect personally with visitors. The "Team Member Highlights" segment offers a deeper understanding of each individual's contributions, illustrating how their unique skills and experiences enhance the team's overall dynamics.`


    }
    return (
        <div className='min-h-screen grid place-items-center text-white'>
            <section className="py-28">
                <div className="container px-4 md:px-6">
                    <div className="mb-8 md:mb-10 lg:mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Latest Blog Posts</h2>
                        <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                            Discover the latest insights, trends, and stories from our team of experts.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                        {
                            Array(6).fill(blogData).map(item => {
                                return <Link to={`/blog/${item?._id}`} className="rounded-lg group overflow-hidden shadow-lg cursor-pointer transition-all hover:text-white hover:bg-gradient-to-tr from-[#02AFDC] to-[#2563EB]">
                                    <img
                                        alt="Blog Post 1"
                                        className="w-full h-56 object-cover"
                                        height={400}
                                        src={item?.blogImage}
                                        style={{
                                            aspectRatio: "600/400",
                                            objectFit: "cover",
                                        }}
                                        width={600}
                                    />
                                    <div className="p-4 md:p-6">
                                        <h3 className="text-xl md:text-2xl font-bold mb-2 line-clamp-2">{item?.title}</h3>
                                        <p className="text-gray-500 group-hover:text-white  line-clamp-3">
                                            {item?.blogContent}
                                        </p>
                                    </div>
                                </Link>
                            })
                        }


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog