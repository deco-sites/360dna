import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Item {
  title?: string;
  subtitle: string;
  link: string;
}
export interface SocialItem {
  icon: ImageWidget;
  subtitle: string;
  link: string;
}

export interface Props {
  contato?: {
    title: string;
    items: Item[];
  };
  acesso: {
    title: string;
    items: Item[];
  };
  social: {
    title: string;
    items: SocialItem[];
  };
  variation?:
    | "Variation 1"
    | "Variation 2";
}

export default function Rodape({ contato, acesso, social, variation }: Props) {
  return (
    <>
      <div class="font-inter bg-[#131211]">
        <div
          class={`container w-full flex-col md:flex-row flex m-auto h-full p-0 flex-wrap ${
            variation == "Variation 2"
              ? "pt-[80px] pb-[30px]"
              : "pt-[50px] pb-[30px]"
          }`}
        >
          {variation && variation == "Variation 2" &&
            (
              <div class="w-full md:w-[33.33%] flex justify-center items-center">
                <a class="inline-block" href="https://dna360.ag/">
                  <img
                    class="inline-block align-middle"
                    loading="lazy"
                    decoding="async"
                    width="164"
                    height="130"
                    src="https://lp.dna360.ag/wp-content/uploads/2023/05/logo-rodape.png"
                    alt=""
                  />
                </a>
              </div>
            )}

          <div
            class={`${
              variation == "Variation 2"
                ? "w-full md:w-[33.33%] justify-center items-center"
                : "w-[20%]"
            } flex flex-col h-full m-0 md:pl-[50px]`}
          >
            <div class="max-w-full mb-0">
              <div class="m-0 pb-[45px] h-full ">
                <h2 class="text-white text-[25px] font-bold p-0 m-0">
                  {contato?.title}
                </h2>
              </div>
            </div>
            <div class="max-w-full font-[14px] text-white mb-0">
              <div class="p-0 m-0 h-full">
                {contato?.items && contato.items.map((item) => {
                  return (
                    <p class="mb-[0.9rem]">
                      {item.title}
                      <br />
                      <span>
                        <a href={item.link} target="_blank" rel="noopener">
                          {item.subtitle}
                        </a>
                      </span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>

          {variation && variation == "Variation 1" &&
            (
              <div class="w-[40%] flex flex-col h-full m-0 pl-[80px]">
                <div class="max-w-full w-full mb-0">
                  <div class="pb-[45px] h-full">
                    <h2 class="text-white text-[25px] font-bold">
                      {acesso.title}
                    </h2>
                  </div>
                </div>
                <div class="flex flex-nowrap p-0 m-0">
                  <div class="flex h-100 w-full">
                    <div class="max-w-full">
                      <div class="m-0 p-0 h-full">
                        <ul class="p-0 flex flex-col gap-x-6 h-[130px] max-h-[130px] flex-wrap">
                          {acesso?.items && acesso.items.map((item) => {
                            return (
                              <li class="pb-[5px] flex items-center">
                                <a
                                  class="text-white hover:text-[#FF9100] transition-all font-[14px] w-full flex items-center"
                                  href={item.link}
                                >
                                  <span class="inline-block">
                                    {item.subtitle}
                                  </span>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          <div
            class={`${
              variation == "Variation 2"
                ? "w-full md:w-[33.33%] justify-center items-center md:items-start"
                : "w-[40%] items-end"
            } flex flex-col h-full m-0 pt-[40px]`}
          >
            <div class="max-w-full mb-0">
              <div class="h-full pb-[45px]">
                <h2 class="text-[22px] font-bold text-white">{social.title}</h2>
              </div>
            </div>
            <div class="max-w-full">
              <div class="text-left font-[0px] h-full">
                <div class="flex gap-3 w-full ">
                  {social?.items && social.items.map((item) => {
                    return (
                      <span class="inline-block">
                        <a
                          class="p-[.5em] flex bg-[#02010100] border border-white rounded-[50%] "
                          href={item.link}
                          target="_blank"
                        >
                          <span class="font-[0px] text-[0px]">
                            {item.subtitle}
                          </span>
                          <Image
                            class="fill-white w-[1em] h-[1em] relative block"
                            src={item.icon}
                            alt={item.subtitle}
                            width={20}
                            height={20}
                            loading="lazy"
                          />
                        </a>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div class="border-t border-t-white w-full mt-[20px] flex flex-col h-full m-0 py-[20px]">
            <div class="max-w-full text-white text-center font-[18px] mb-0">
              <div class="m-0 p-0 h-full">
                <p>© Copyright 2023 – DNA360</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
