import { Link } from "react-router-dom";


import HomeLayout from "../layouts/HomeLayout";
function Home() {

    return (
        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">Find out best <span className="text-yellow-500 font-bold">Online courses</span></h1>
                    <p className="text-xl text-gray-200">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cose.
                    </p>

                    <div className="space-x-6">
                        <Link to="/courses" >
                            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Explore courses
                            </button>
                        </Link>
                        <Link to="/contacts" >
                            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    {/* <img src="https://elearningindustry.com/wp-content/uploads/2015/10/6-convincing-reasons-take-elearning-course.jpg"  alt="home page" className="rounded-full hover:opacity-75 transition-opacity duration-1000" /> */}
                    {/* <img src="https://onpassive.com/blog/wp-content/uploads/2021/01/E-Learning-in-Artificial-Intelligence-Based-Platform.gif"  alt="home page" className="rounded hover:opacity-75 transition-opacity duration-1000" /> */}
                    <img src="https://onpassive.com/blog/wp-content/uploads/2021/01/E-Learning-in-Artificial-Intelligence-Based-Platform.gif" alt="home page" class="rounded-full border-4 border-pink-500 hover:opacity-75 filter brightness-125 hover:brightness-100 transform rotate-0  transition-all duration-1000 hover:scale-110 hover:rotate-360" />

                </div>

            </div>
        </HomeLayout>
    )
}

export default Home;