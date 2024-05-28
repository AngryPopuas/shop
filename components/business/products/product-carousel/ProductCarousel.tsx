
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const ProductCarousel = ({ props }: { props: Array<string> }) => {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {props.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1 relative w-full h-[500px]">
                            {/* flex aspect-square items-center justify-center p-6 */}
                            <Image className="rounded-md object-contain" src={item} fill alt="Изображение продукта" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
export default ProductCarousel