import { BoxShadowType } from "../../../theme/constants/boxShadow";
import { ColorType } from "../../../theme/constants/color";

export interface IAvatar {
  userName?: string;
  image?: string;
  $avatarSize?: number;
  $avatarColor?: ColorType;
  $boxShadow?: BoxShadowType;
}
