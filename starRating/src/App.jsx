import StarRating from "./components/StarRating"
function App() {

  return (
    <>
      <h1 className=" text-center text-3xl text-white m-5 font-semibold">Star Rating using Components</h1>
      <div className="w-[80vw] border-[0px] border-black mx-auto p-3  grid grid-cols-5 justify-items-center gap-x-[19em]">
        <div className=" w-[18em] flex flex-col items-center bg-[#fdfdfd]">
          <img src="https://m.media-amazon.com/images/M/MV5BODJhZDU1MDYtMDQ0NS00N2JmLWI2ZDAtMGNmN2RmNWJhNzQ5L2ltYWdlXkEyXkFqcGdeQXVyNjY1OTY4MTk@._V1_FMjpg_UX1000_.jpg" alt="poster" 
            className=" w-[100%]"
          />
          <h3 className=" text-xl ">5 centimeters per second</h3>
          <StarRating/>
        </div>
        <div className=" w-[18em] flex flex-col items-center bg-white">
          <img src="https://m.media-amazon.com/images/M/MV5BNDM4MWE3NGQtODlkYS00NWU5LTg3ZjMtMTEyNjljOWI4NWIxXkEyXkFqcGdeQXVyNzkzODk2Mzc@._V1_FMjpg_UX1000_.jpg" alt="poster" 
            className=" w-[100%]"
          />
          <h3 className=" text-xl">I want to eat your pancreas</h3>
          <StarRating/>
        </div>
        <div className=" w-[18em] flex flex-col items-center bg-white">
          <img src="https://i.imgur.com/xNPlWgd.jpg" alt="poster" 
            className=" w-[100%]"
          />
          <h3 className=" text-xl">Your Name</h3>
          <StarRating/>
        </div>
        <div className=" w-[18em] flex flex-col items-center bg-white">
          <img src="https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="poster" 
            className=" w-[100%]"
          />
          <h3 className=" text-xl">A silent voice</h3>
          <StarRating/>
        </div>
        <div className=" w-[18em] flex flex-col items-center bg-white">
          <img src="https://i.redd.it/kco1fdcf90131.jpg" alt="poster" 
            className=" w-[100%]"
          />
          <h3 className=" text-xl">Weathering with you</h3>
          <StarRating/>
        </div>
      </div>
    </>
  )
}

export default App
