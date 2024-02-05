import Image from "apps/website/components/Image.tsx";
import Header from "$store/components/ui/SectionHeader.tsx";
import { useMemo } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Slider from "deco-sites/360dna/components/ui/Slider.tsx";
import SliderJS from "deco-sites/360dna/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Icon from "deco-sites/360dna/components/ui/Icon.tsx";
export interface Image {
  image: ImageWidget;
  altText: string;
  width: number;
  height: number;
}

export interface Props {
  title?: string;
  description?: string;
  images?: Image[];
  layout?: {
    headerAlignment?: "center" | "left";
  };
}

const IMAGES = [
  {
    width: 300,
    height: 300,
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/fe7cd8ba-c954-45d6-9282-ee7d8ca8e3c7",
  },
  {
    width: 300,
    height: 300,
    altText: "deco",
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/637e8601-6b86-4979-aa97-68013a2a60fd",
  },
];

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2">
        <Slider.PrevButton class="btn border-0 bg-transparent">
          <Icon
            class="text-black"
            size={24}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn border-0 bg-transparent">
          <Icon
            class="text-black"
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function Logos(props: Props) {
  const {
    title,
    description,
    images,
    layout,
  } = props;
  const list = useMemo(
    () =>
      images && images.length > 0
        ? images
        : Array(20).fill(null).map((_, i) => IMAGES[i % 2]),
    [],
  );
  const id = useId();

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-8 lg:gap-12 lg:py-10 lg:px-0 mb-8">
      <Header
        title={title}
        description={description}
        alignment={layout?.headerAlignment || "center"}
      />
      <div
        id={id}
        class="grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] sm:min-h-min w-full"
      >
        <Slider class="carousel carousel-center w-full col-span-full row-[1/-2] gap-6">
          {list.map((element, index) => (
            <Slider.Item class="carousel-item md:w-1/4 w-full" index={index}>
              <div
                id={`${id}::${index}`}
                class="h-full w-full px-4 lg:px-6 py-6 lg:py-4 inline-block align-middle"
              >
                <div class="flex w-full h-full items-center justify-center">
                  <Image
                    width={element.width}
                    height={element.height}
                    src={element.image}
                    alt={element.altText || ""}
                    class="max-w-full max-h-full"
                  />
                </div>
              </div>
            </Slider.Item>
          ))}
        </Slider>
        <Buttons />

        <SliderJS rootId={id} />
      </div>
    </div>
  );
}

export default Logos;
