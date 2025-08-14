import IcoMoon, { type IconProps } from "react-icomoon";
import iconSet from "@/assets/images/selection.json";

export const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;
