import { IconSvgElement } from "@hugeicons/react";
import { ComponentType, SVGProps } from "react";

type IconDimensions = {
  width: number;
  height: number;
};
export type NavIcon =
  | ({
      kind: "image";
      src: string;
      alt: string;
      fill?: boolean;
    } & IconDimensions)
  | ({
      kind: "svg-component";
      icon: ComponentType<SVGProps<SVGSVGElement>>;
    } & IconDimensions)
  | ({
      kind: "hugeicons";
      icon: IconSvgElement;
    } & IconDimensions);

export type NavItem = {
  label: string;
  icon?: NavIcon;
  href?: string;
  children?: NavItem[];
};
