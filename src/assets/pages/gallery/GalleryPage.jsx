import HeroSectionTemplate from "../../components/common/HeroSectionTemplate";
import ImageGallery from "./GalleryImage";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-100 mt-[96px]">
      <div className="container mx-auto">
        <HeroSectionTemplate
          heading={"Image Gallery"}
          description={`A visual showcase of our electrical engineering projects and
            technical achievements`}
          bg={"/assets/gallery/bg.jpg"}
        />
        <ImageGallery />
      </div>
    </main>
  );
}
