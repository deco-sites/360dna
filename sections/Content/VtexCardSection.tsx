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

export default function VtexCardSection({ contents }: Props) {
  return (
    <>
      {contents.map((item) => {
        return (
          <div class="mb-8 border flex flex-col md:flex-row items-start md:items-center text-left m-0 px-12 py-4 rounded-[30px] border-solid border-[#FF9100]">
            <div class="inline-flex flex-[0_0_auto] ml-0 mr-5 mb-0">
              <span class="text-5xl inline-block leading-none text-center transition-all duration-[0.5s]">
                {item.img &&
                  (
                    <Image
                      class={"w-12 h-12 relative block"}
                      src={item.img}
                      alt={item.title}
                      width={51}
                      height={51}
                      style={{ width: `${51}px`, height: `${51}px` }}
                    />
                  )}
              </span>
            </div>
            <div class="grow">
              <h3 class="mt-2 mb-4 text-xl font-bold text-[#1D1D1B]">
                <span>
                  {item.title}
                </span>
              </h3>
              <p class="text-[#1D1D1B] text-sm font-normal m-0">
                {item.subtitle}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
