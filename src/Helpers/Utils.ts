import { TextColors } from "./TextColors";
import { Position } from "./Position";
import { BackgroundColors } from "./BackgroundColors";
import { Shadows } from "./Shadows";

export function getColorText(color? : TextColors): string {
    let tempColor: string = "";
    if(color == null )
        return "";
    
    else{
        switch (color) {
            case TextColors.Primary:
              tempColor = TextColors.Primary;
              break;
            case TextColors.Secondary:
              tempColor = TextColors.Secondary;
              break;
            case TextColors.Error:
              tempColor = TextColors.Error;
              break;
            case TextColors.Warning:
              tempColor = TextColors.Warning;
              break;
            case TextColors.Info:
              tempColor = TextColors.Info;
              break;
            case TextColors.Success:
              tempColor = TextColors.Success;
              break;
            case TextColors.Light:
              tempColor = TextColors.Light;
              break;
            case TextColors.Dark:
              tempColor = TextColors.Dark;
              break;
          }
    }
    return tempColor;
}
export function getPosition(aligment? : Position): string {

    let tempPosition: string = "";
    if(aligment == null )
        return "";
    else{
        switch (aligment) {
            case Position.FixedTop:
              tempPosition = Position.FixedTop;
              break;
            case Position.FixedBottom:
              tempPosition = Position.FixedBottom;
              break;
            case Position.StickyTop:
              tempPosition = Position.StickyTop;
              break;
            case Position.StickyBottom:
              tempPosition = Position.StickyBottom;
              break;
          }
    }
    return tempPosition;
}
export function getBackgroundColor( background? : BackgroundColors) : string {
    let tempBackground: string = "";
    if(background == null )
        return "";
    else{
        switch (background) {
            case BackgroundColors.Primary:
              tempBackground = BackgroundColors.Primary;
              break;
            case BackgroundColors.Secondary:
              tempBackground = BackgroundColors.Secondary;
              break;
            case BackgroundColors.Success:
              tempBackground = BackgroundColors.Success;
              break;
            case BackgroundColors.Danger:
              tempBackground = BackgroundColors.Danger;
              break;
            case BackgroundColors.Warning:
              tempBackground = BackgroundColors.Warning;
              break;
            case BackgroundColors.Info:
              tempBackground = BackgroundColors.Info;
              break;
            case BackgroundColors.Light:
              tempBackground = BackgroundColors.Light;
              break;
            case BackgroundColors.Dark:
              tempBackground = BackgroundColors.Dark;
              break;
          }
    }
    return tempBackground;
}
export function getShadowBox(shadow? : Shadows) : string {

  let tempShadow: string = "";
  if(shadow == null )
    return "";
  else
  {
    switch (shadow) {
      case Shadows.ShadowNone:
        tempShadow = Shadows.ShadowNone;
        break;
      case Shadows.ShadowsSM:
        tempShadow = Shadows.ShadowsSM;
        break;
      case Shadows.Shadows:
        tempShadow = Shadows.Shadows;
        break;
      case Shadows.ShadowLg:
        tempShadow = Shadows.ShadowLg;
        break;
    }

  }
  return tempShadow;
}