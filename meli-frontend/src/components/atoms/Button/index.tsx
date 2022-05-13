interface IButton {
  type: "button" | "submit" | "reset";
  children: JSX.Element | string;
  id?: string;
  className?: string;
  onClick?(): void;
}

export default function Button({ type, children, id, className, onClick }: IButton) {
  return (
    <>
      <button type={type} id={id} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}