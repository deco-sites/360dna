import { Picture } from "apps/website/components/Picture.tsx";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  src: ImageWidget;
  /**
   * @description Image alt text
   */
  alt: string;
}

export default function BannerFullCover({ src, alt }: Props) {
  return (
    <>
      <div class="flex flex-col w-full grow-0 mt-5 mb-8 mx-0 p-0">
        <div class="max-w-full text-center mb-0">
          <div class="h-full m-0 p-0">
            {src && (
              <Picture>
                <Image
                  width={1920}
                  class="align-middle inline-block max-w-full h-[400px] object-cover md:h-full md:object-none"
                  src={src}
                  alt={alt}
                  decoding="async"
                  loading="lazy"
                />
              </Picture>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
