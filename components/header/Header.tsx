import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Drawers from "$store/islands/Header/Drawers.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
import { headerHeight } from "./constants.ts";
import Image from "apps/website/components/Image.tsx";

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}
export interface Props {
  variation: "LP" | "Institucional";

  /** @title Logo */
  logo: Logo;
  logoVariation: Logo;
  navItems: SiteNavigationElement[];
}

function Header({
  variation,
  logo,
  logoVariation,
  navItems,
}: Props) {
  const platform = usePlatform();

  return (
    <>
      {
        /* <header class="h-[300px]">
        <Drawers
          menu={{ items }}
          searchbar={searchbar}
          platform={platform}
        >
          <div class="bg-base-100 fixed w-full z-50">
            {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
            <Navbar
              items={items}
              searchbar={searchbar && { ...searchbar, platform }}
              logo={logo}
              logoPosition={logoPosition}
              buttons={buttons}
            />
          </div>
        </Drawers>
      </header> */
      }
      {variation == "Institucional" && (
        <header class="z-10 w-full bg-[#131211]">
          <div class="container flex-wrap justify-start items-center content-start 
        basis-auto grow shrink self-auto flex-row w-full h-full mx-auto my-0
        flex py-5">
            <a class="w-[15%]" href="https://dna360.ag">
              {logo.width && (
                <Image
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  src={logo.src}
                />
              )}
            </a>
            <ul class="w-[50%] flex flex-wrap pl-20">
              {navItems && navItems.map((item) => {
                return (
                  <li class="px-5 py-3 relative group">
                    <a
                      class="text-white hover:text-[#FF9100] transition-all gap-1 flex items-center fill-white text-[15px] font-semibold whitespace-nowrap grow"
                      href={item.url}
                    >
                      {item.name}
                      {item.children && item.children?.length > 0 && (
                        <svg
                          class="w-[1em] h-[1em]"
                          viewBox="0 0 320 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                        </svg>
                      )}
                    </a>
                    <ul class="bg-[#FF9100] group-hover:block hidden absolute min-w-[18em] top-[100%] w-auto left-0">
                      {item.children && item.children.map((children) => {
                        return (
                          <li class="block transition-all hover:bg-[#131211] bg-[#FF9100] m-0 leading-normal relative  px-[13px] py-[13px]">
                            <a class="text-white" href={children.url}>
                              {children.name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <ul class="w-[35%] justify-end flex flex-wrap ml-auto">
              <li class="px-5 py-3">
                <a
                  class="text-white fill-white text-[15px] font-semibold whitespace-nowrap grow"
                  href="#"
                >
                  Carreira
                </a>
              </li>
              <li class="bg-[#FF9100] flex">
                <a
                  class=" text-white fill-white text-[15px] font-semibold whitespace-nowrap grow px-5 py-3"
                  href="#"
                >
                  Vamos bater um papo?
                </a>
              </li>
            </ul>
          </div>
        </header>
      )}

      {variation == "LP" && (
        <header class="z-10 w-full bg-white">
          <div class="container">
            <div class="flex items-center justify-between">
              <a class="w-[15%]" href="https://dna360.ag">
                {logoVariation.width && (
                  <Image
                    alt={logoVariation.alt}
                    width={logoVariation.width}
                    height={logoVariation.height}
                    src={logoVariation.src}
                  />
                )}
              </a>
              <ul class="flex flex-wrap pl-20">
                <li class="px-5 py-3">
                  <a
                    class="hover:text-[#FF9100] text-black fill-black text-[15px] font-semibold whitespace-nowrap grow"
                    href="#"
                  >
                    A Vtex IO
                  </a>
                </li>
                <li class="px-5 py-3">
                  <a
                    class="hover:text-[#FF9100] text-black fill-black text-[15px] font-semibold whitespace-nowrap grow"
                    href="#"
                  >
                    A DNA 360
                  </a>
                </li>
                <li class="px-5 py-3">
                  <a
                    class="hover:text-[#FF9100] text-black fill-black text-[15px] font-semibold whitespace-nowrap grow"
                    href="#"
                  >
                    Clientes
                  </a>
                </li>
                <li class="px-5 py-3">
                  <a
                    class="text-[#FF9100] fill-[#FF9100] text-[15px] font-semibold whitespace-nowrap grow"
                    href="#"
                  >
                    Fale com a gente!
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
