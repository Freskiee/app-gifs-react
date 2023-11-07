import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])   TODO ESTO SE PASO AL HOOK DE useFetchGifs.js


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
                // ? (<h2>Cargando...</h2>) Aqui esta preguntando si se esta ejecutando el isLoading, de ser asi ejecuta el h2, de lo contrario brinca a ejecuta el null
                // : null Esto es lo mismo que arriba, solo que evitando el uso de null, mas simplificado
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>

        </>
    )
}

