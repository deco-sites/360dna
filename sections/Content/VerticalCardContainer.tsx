import { Section } from "deco/blocks/section.ts";

export interface Props {
  vtexContent: Section;
  title: string;
}

export default function VerticalCardContainer({
  vtexContent: { Component, props },
  title,
}: Props) {
  return (
    <section class="container mb-8 p-[20px] md:p-0">
      <h2
        class="text-black md:text-[32px] text-[26px] font-bold leading-7 md:leading-10"
        dangerouslySetInnerHTML={{ __html: title }}
      >
      </h2>
      <div class="flex py-4">
        <span class="md:w-[10%] w-[30%] flex m-0 rounded-[50px] border-solid border-[#FF9100] border-[6px]">
        </span>
      </div>
      <div className="flex gap-4">
        <Component {...props} />
      </div>
    </section>
  );
}
