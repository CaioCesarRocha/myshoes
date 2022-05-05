import Header from "../components/header";
import CategoriesPage from "../components/categoriesPage";

const NotFound = () =>{
    return(
        <>
            <Header/>
            <CategoriesPage/>
            <div className="pt-20 w-full h-screen text-center align-start dark:bg-gray-900">
                <text className="text-5xl sm:text-8xl text-violet-700 h-full font-bold dark:text-white">
                    ERROR,
                </text>
                <text className="text-xs sm:text-xl text-violet-700 pl-5 font-bold dark:text-white">
                    Tente novamente mais tarde.
                </text>
            </div>
        </>
    );
}


export default NotFound;