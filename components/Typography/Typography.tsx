import classNames from "classnames";
import styles from "./Typography.module.css";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
interface TypographyProps {
  tag?: Tag;
  className?: string;
  noMargin?: boolean;
  children: React.ReactNode;
}

export const Typography = ({
  tag = "p",
  children,
  className,
  noMargin,
  ...props
}: TypographyProps) => {
  const Component = tag;

  return (
    <Component
      className={classNames(
        {
          [styles[tag]]: tag,
          [styles.noMargin]: noMargin,
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
