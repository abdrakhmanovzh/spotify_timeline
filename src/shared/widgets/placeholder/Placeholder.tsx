interface Props {
  children?: React.ReactNode;
}

export const Placeholder = ({ children }: Props) => {
  return <div className="w-[100svw] flex-1 bg-main-green">{children}</div>;
};
