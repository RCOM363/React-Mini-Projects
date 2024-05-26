import ImageSlider from "./components/ImageSlider"

function App() {

  return (
    <>
      <h1 className=" mx-auto mt-2 text-3xl text-center font-semibold">Image Slider</h1>
     <ImageSlider url="https://picsum.photos/v2/list" page={2} limit={10}/>
    </>
  )
}

export default App
