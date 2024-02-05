import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  contents: Content[];
}

export interface Content {
  title: string;
  subtitle: string;
  img?: ImageWidget;
}

export default function VerticalCard({ contents }: Props) {
  return (
    <div class="flex-initial gap-1 flex-col md:flex-row flex w-full max-w-full h-full m-auto">
      {contents.map((content) => {
        return (
          <div class="bg-white hover:bg-[#F1F0F0] w-full md:w-[25%] flex min-h-[370px] md:min-h-[470px] justify-between flex-col border-b-[6px] transition-all border-solid border-[#C8C8C8] hover:border-[#FF9100]">
            <div class="mb-0 max-w-full">
              <div class="m-0 p-0 h-full overflow-hidden">
                <div class="relative flex flex-wrap">
                  <div class="text-left z-[1] overflow-hidden flex flex-wrap items-center content-center p-9">
                    <h2 class="text-base font-bold text-[#1D1D1B] fill-[#3f444b] relative w-full m-0 border-[#3f444b]">
                      {content.title}
                    </h2>
                    <div class="text-base font-normal text-[#1D1D1B] fill-[#3f444b] relative w-full m-0 border-[#3f444b]">
                      {content.subtitle}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="text-left z-[1] overflow-hidden flex flex-wrap items-center content-center p-9">
              <Image
                class={"w-12 h-12 relative block"}
                src={content.img
                  ? content.img
                  : "https://lp.dna360.ag/wp-content/uploads/2023/05/icone-check.svg"}
                alt={content.title}
                width={31}
                height={31}
                style={{ width: `${31}px`, height: `${31}px` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
