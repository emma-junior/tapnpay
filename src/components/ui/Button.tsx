type ButtonVariant = "btn-primary" | "btn-secondary" | "btn-outline";

interface ButtonProps {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ variant, children, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${variant} w-full py-3.5 rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
