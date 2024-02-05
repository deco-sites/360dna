import { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  imageLateral: ImageWidget;
  content: {
    firstText: string;
    /**
     * @format textarea
     */
    secondText: string;
    buttonText: string;
    linkButton: string;
  };
}

export default function BannerFinal({ imageLateral, content }: Props) {
  return (
    <>
      <div class="bg-[#f4f4f4] md:pt-[100px] p-[20px] flex flex-col md:flex-row">
        <div class="w-full md:max-w-[50%]">
          <div class="w-full max-w-full">
            <div class="h-full transition-all">
              <img
                class="align-middle inline-block max-w-full h-auto"
                loading="lazy"
                decoding="async"
                src={imageLateral}
              />
            </div>
          </div>
        </div>
        <div class="w-full md:max-w-[50%] md:pl-[50px]">
          <div class="w-full md:max-w-[70%] mb-5">
            <div class="h-full transition-all">
              <h2
                class="text-black md:text-[32px] text-[24px] font-bold leading-[2.4rem]"
                dangerouslySetInnerHTML={{ __html: content.firstText }}
              >
              </h2>
            </div>
          </div>
          <div class="w-full md:max-w-[70%] mb-5 text-black text-[24px] md:text-[32px] font-normal leading-9">
            <div class="p-0 m-0 h-full">
              <p dangerouslySetInnerHTML={{ __html: content.secondText }}></p>
            </div>
          </div>
          <div class="w-full md:max-w-[70%] mb-5">
            <div class="py-[20px] m-0 ">
              <div class="w-full flex">
                <a
                  class="min-h-[40px] w-full items-center flex justify-center text-base font-bold rounded-lg text-white bg-[#FF9100]"
                  href={content.linkButton}
                >
                  {content.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
