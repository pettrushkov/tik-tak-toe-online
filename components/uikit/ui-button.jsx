import clsx from "clsx";

/**
 *
 * @param {{
 * children: any,
 * className: string,
 * size: 'md' | 'lg',
 * variant: 'primary' | 'outline'
 * }} props
 */
export function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors",
    className,
    {
      md: "py-2 px-6 rounded text-sm  leading-tight",
      lg: "py-2 px-5  rounded-lg text-2xl leading-tight",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );

  return <button className={buttonClassName}>{children}</button>;
}
