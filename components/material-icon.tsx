export type MtIcon =
  | "mail"
  | "call"
  | "location_on"
  | "schedule"
  | "close"
  | "menu"
  | "west"
  | "east"
  
/**
 * Reusable React component that displays Material icons.
 *
 * @interface IProps
 * @extends React.HTMLAttributes<HTMLSpanElement>
 */
interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: MtIcon;
  size?: number;
  color?: string;
  fill?: boolean;
  displayInline?: boolean;
}
/**
 * React functional component that renders an icon based on a given `MtIcon` string value.
 *
 * @param {IProps} props - Component props.
 * @returns {JSX.Element} - Rendered component.
 */
const MaterialIcon = (props: IProps) => {
  const { size, color, fill, displayInline, ...rest } = props;
  return (
    <span
      {...{
        ...rest,
        className: `${
          rest.className ? rest.className : ""
        } material-symbols-outlined`,
        style: {
          ...rest.style,
          fontSize: size ? size : 24,
          color: color ? color : rest.style?.color,
          display: displayInline ? "inline" : "flex",
          alignItems: "center",
          fontVariationSettings: `"FILL" ${
            fill ? 1 : 0
          }, "wght" 400, "GRAD" 0, "opsz" 48`,
        },
      }}
    >
      {props.icon}
    </span>
  );
};
export default MaterialIcon;