import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  title: string;
  subtitle: string;
  img?: ImageWidget;
}

export interface Item {
  name: string;
  label: string;
}

export default function BannerInicial({ title, subtitle, img }: Props) {
  return (
    <section class="container">
      <div class="flex flex-col items-center m-0 px-0 py-6">
        <div class="text-lg font-bold flex md:flex-row flex-col items-center">
          <div class="inline-block self-center p-[20px] md:pl-1.5 max-w-full md:max-w-[50%]">
            <h2
              class="text-black text-[26px] md:text-[40px] font-bold mb-6 leading-[2rem] md:leading-[2.8rem]"
              dangerouslySetInnerHTML={{ __html: title }}
            >
            </h2>
            <p
              class="text-black text-[20px] md:text-[24px] font-normal mb-4"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            >
            </p>
            <form method={"post"} name="Formulário Landing Page VTEX IO DNA360">
              <div class="flex flex-wrap">
                <div class="w-full mb-[10px] px-[5px]">
                  <input
                    class="bg-white border-gray-300 border rounded-lg text-base font-normal text-gray-600 w-full max-w-full flex-grow p-2"
                    type="text"
                    placeholder={"Nome"}
                    required
                  />
                </div>
                <div class="md:w-6/12 w-full mb-[10px] px-[5px]">
                  <input
                    class="bg-white border-gray-300 border rounded-lg text-base font-normal text-gray-600 w-full max-w-full flex-grow p-2"
                    type="text"
                    placeholder={"E-mail"}
                    required
                  />
                </div>
                <div class="md:w-6/12 w-full mb-[10px] px-[5px]">
                  <input
                    class="bg-white border-gray-300 border rounded-lg text-base font-normal text-gray-600 w-full max-w-full flex-grow p-2"
                    type="tel"
                    placeholder={"Telefone"}
                    required
                  />
                </div>
                <div class="w-full mb-[10px] px-[5px]">
                  <label
                    class="inline-block pb-0 text-[#848484] font-normal px-[5px] mb-[10px]"
                    for="select_faturamento"
                  >
                    Quanto sua empresa fatura?
                  </label>
                  <select
                    class="bg-white border-gray-300 border rounded-lg text-base font-normal text-gray-600 w-full max-w-full flex-grow p-2"
                    name="select_faturamento"
                    required
                  >
                    <option value="Até R$ 50.000,00">Até R$ 50.000,00</option>
                    <option value="De R$ 50.000,00 à R$ 100.000,00">
                      De R$ 50.000,00 à R$ 100.000,00
                    </option>
                    <option value="De R$ 100.000,00 à R$ 500.000,00">
                      De R$ 100.000,00 à R$ 500.000,00
                    </option>
                    <option value="Acima de R$ 500.000,00">
                      Acima de R$ 500.000,00
                    </option>
                  </select>
                </div>
                <div class="w-full mb-[10px] px-[5px]">
                  <textarea
                    class="bg-white border-gray-300 border rounded-lg text-base font-normal text-gray-600 w-full max-w-full flex-grow p-2"
                    name="Mensagem"
                    rows={4}
                    placeholder="Como podemos ajudar?"
                    required
                  >
                  </textarea>
                </div>

                <div class="w-full px-[5px] mb-[10px]">
                  <button
                    class="w-full min-h-[40px] rounded-xl transition-all px-3 py-0 bg-[#FF9100] text-white text-[16px]"
                    type="submit"
                  >
                    <span>
                      <span>Enviar</span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          {img &&
            (
              <Image
                src={img}
                alt={title}
                width={600}
                height={632}
                class={"md:max-w-[50%] max-w-full w-full"}
                sizes="(max-width: 640px) 50vw, 20vw"
                loading={"lazy"}
                decoding="async"
              />
            )}
        </div>
      </div>
    </section>
  );
}
