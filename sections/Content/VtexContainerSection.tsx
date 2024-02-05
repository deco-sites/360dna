import { Section } from "deco/blocks/section.ts";

export interface Props {
  vtexContent: Section;
  title: string;
  subtitle: string;
  linkCta: {
    text: string;
    href: string;
  };
}

export default function VtexContainerSection({
  vtexContent: { Component, props },
  title,
  subtitle,
  linkCta,
}: Props) {
  return (
    <section class="container mb-8 p-[20px] md:p-0">
      <h2 class="text-black md:text-[32px] text-[26px] font-bold leading-7 md:leading-10">
        {title}
      </h2>
      <div class="flex py-4">
        <span class="w-[30%] md:w-[10%] flex m-0 rounded-[50px] border-solid border-[#FF9100] border-[6px]">
        </span>
      </div>
      <p
        class="text-[#1D1D1B] text-xl font-normal mt-0 mb-4"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      >
      </p>
      <div className="flex gap-4">
        <Component {...props} />
      </div>
      {linkCta &&
        (
          <div class="flex items-center justify-center">
            <a
              class="text-base font-bold fill-white text-white bg-[#FF9100] px-10 py-4 rounded-xl"
              href={linkCta.href}
            >
              <span class="flex justify-center no-underline">
                {linkCta.text}
              </span>
            </a>
          </div>
        )}
    </section>
  );
}
